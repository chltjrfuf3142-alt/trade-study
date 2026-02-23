// Firebase Configuration & Cloud Sync
const firebaseConfig = {
    apiKey: "AIzaSyAuGUyEK3lskkM-syEd2x_1wtByq_lN-Ho",
    authDomain: "trade-study-575e7.firebaseapp.com",
    projectId: "trade-study-575e7",
    storageBucket: "trade-study-575e7.firebasestorage.app",
    messagingSenderId: "412544827665",
    appId: "1:412544827665:web:adcfd89adb437334510cb0"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// === Google Login ===
function googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider).catch(err => {
        console.error('Login error:', err);
        alert('로그인에 실패했습니다. 다시 시도해주세요.');
    });
}

function googleLogout() {
    auth.signOut();
}

// === Auth State Listener ===
let currentUser = null;

auth.onAuthStateChanged(user => {
    currentUser = user;
    const authArea = document.getElementById('authArea');
    if (user) {
        authArea.innerHTML = `
            <div class="user-profile">
                <img class="user-avatar" src="${user.photoURL || ''}" alt="" onerror="this.style.display='none'">
                <span class="user-name">${user.displayName || user.email}</span>
                <button class="btn-logout" onclick="googleLogout()">로그아웃</button>
            </div>
            <div class="sync-status" id="syncStatus">☁️ 동기화됨</div>`;
        loadFromCloud();
    } else {
        authArea.innerHTML = `<button class="btn-login" id="loginBtn" onclick="googleLogin()">🔐 Google 로그인</button>`;
    }
});

// === Cloud Sync Functions ===
async function saveToCloud() {
    if (!currentUser) return;
    try {
        const saveData = {
            errors: errorNotes,
            daily: dailyData,
            lastSync: firebase.firestore.FieldValue.serverTimestamp()
        };
        // Include annotations if available
        if (typeof annotations !== 'undefined') {
            saveData.annotations = annotations;
        }
        await db.collection('users').doc(currentUser.uid).set(saveData, { merge: true });
        showSyncStatus('☁️ 저장됨');
    } catch (e) {
        console.error('Save error:', e);
        showSyncStatus('⚠️ 저장 실패');
    }
}

async function loadFromCloud() {
    if (!currentUser) return;
    try {
        showSyncStatus('🔄 동기화 중...');
        const doc = await db.collection('users').doc(currentUser.uid).get();
        if (doc.exists) {
            const data = doc.data();
            if (data.errors) {
                errorNotes = data.errors;
                localStorage.setItem('errors', JSON.stringify(errorNotes));
            }
            if (data.daily) {
                dailyData = data.daily;
                localStorage.setItem('daily', JSON.stringify(dailyData));
            }
            if (data.annotations && typeof annotations !== 'undefined') {
                annotations = data.annotations;
                localStorage.setItem('annotations', JSON.stringify(annotations));
                if (typeof renderAllStrokes === 'function') renderAllStrokes();
            }
            checkDailyReset();
            updateHome();
        } else {
            // First login: upload local data to cloud
            await saveToCloud();
        }
        showSyncStatus('☁️ 동기화됨');
    } catch (e) {
        console.error('Load error:', e);
        showSyncStatus('⚠️ 동기화 실패');
    }
}

function showSyncStatus(text) {
    const el = document.getElementById('syncStatus');
    if (el) el.textContent = text;
}
