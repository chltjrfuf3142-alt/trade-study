// === State ===
let currentScreen = 'home', activePart = 0, activeSubj = 0;
let quizQuestions = [], quizIdx = 0, quizCorrect = 0, quizAnswered = false;
let errorNotes = JSON.parse(localStorage.getItem('errors') || '[]');
let dailyData = JSON.parse(localStorage.getItem('daily') || '{}');

// === Init ===
document.addEventListener('DOMContentLoaded', () => {
    checkDailyReset(); renderPartTabs(); renderSubjTabs(); updateHome();
    if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js');
});

function checkDailyReset() {
    const today = new Date().toDateString();
    if (dailyData.date !== today) dailyData = { date: today, solved: 0, correct: 0 };
}
function saveDaily() { localStorage.setItem('daily', JSON.stringify(dailyData)); if (typeof saveToCloud === 'function') saveToCloud(); }

// === Navigation ===
function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    document.querySelectorAll('.nav-item').forEach(n => {
        n.classList.toggle('active', n.dataset.screen === id);
    });
    currentScreen = id;
    if (id === 'concepts') renderConcepts();
    if (id === 'quiz') resetQuizUI();
    if (id === 'home') updateHome();
}

// === Home ===
function updateHome() {
    checkDailyReset();
    document.getElementById('dailySolved').textContent = dailyData.solved || 0;
    document.getElementById('dailyRate').textContent = dailyData.solved ? Math.round(dailyData.correct / dailyData.solved * 100) + '%' : '-';
    document.getElementById('dailyErrors').textContent = errorNotes.length;
}

// === Concepts - Always Expanded ===
function renderPartTabs() {
    const c = document.getElementById('partTabs');
    c.innerHTML = '<div class="part-tab active" onclick="setActivePart(0)">전체</div>';
    for (let i = 1; i <= 7; i++) c.innerHTML += `<div class="part-tab" onclick="setActivePart(${i})">Part ${i}</div>`;
}
function setActivePart(p) {
    activePart = p;
    document.querySelectorAll('.part-tab').forEach((t, i) => t.classList.toggle('active', i === p));
    renderConcepts();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
function renderConcepts() {
    const q = (document.getElementById('searchInput').value || '').toLowerCase();
    let items = CONCEPTS.filter(c => {
        if (activePart && c.part !== activePart) return false;
        if (q && !c.title.toLowerCase().includes(q) && !c.content.toLowerCase().includes(q) && !(c.highlight || '').toLowerCase().includes(q)) return false;
        return true;
    });
    const el = document.getElementById('conceptList');
    if (!items.length) { el.innerHTML = '<div style="text-align:center;padding:40px;color:var(--text3)">검색 결과가 없습니다</div>'; return; }
    let html = '', lastPart = 0;
    items.forEach(c => {
        if (c.part !== lastPart && !activePart) {
            html += `<div class="part-divider">📖 Part ${c.part} <span>${PART_NAMES[c.part]}</span></div>`;
            lastPart = c.part;
        }
        html += `<div class="concept-block">
      <div class="cb-title">${c.title}</div>
      <div class="cb-part">Part ${c.part}: ${PART_NAMES[c.part]}</div>
      <div class="cb-body">${c.content}${c.highlight ? `<div class="highlight-box">⚡ ${c.highlight}</div>` : ''}</div>
    </div>`;
    });
    el.innerHTML = html;
}
function filterConcepts() { renderConcepts(); }

// === Quiz ===
function renderSubjTabs() {
    const c = document.getElementById('subjTabs');
    c.innerHTML = '<div class="subj-tab active" onclick="setActiveSubj(0)">전체</div>';
    for (let i = 1; i <= 4; i++) c.innerHTML += `<div class="subj-tab" onclick="setActiveSubj(${i})">${SUBJ_NAMES[i]}</div>`;
}
function setActiveSubj(s) {
    activeSubj = s;
    document.querySelectorAll('.subj-tab').forEach((t, i) => t.classList.toggle('active', i === s));
}
function resetQuizUI() {
    document.getElementById('quizSetup').style.display = '';
    document.getElementById('quizActive').style.display = 'none';
    document.getElementById('quizResult').style.display = 'none';
    document.getElementById('errorNotesSection').style.display = 'none';
}
function startQuiz() {
    quizQuestions = activeSubj ? QUIZ.filter(q => q.subj === activeSubj) : [...QUIZ];
    if (document.getElementById('toggleRandom').classList.contains('on')) quizQuestions.sort(() => Math.random() - 0.5);
    quizIdx = 0; quizCorrect = 0;
    document.getElementById('quizSetup').style.display = 'none';
    document.getElementById('quizActive').style.display = '';
    document.getElementById('quizResult').style.display = 'none';
    showQuestion();
}
function showQuestion() {
    const q = quizQuestions[quizIdx], total = quizQuestions.length;
    quizAnswered = false;
    document.getElementById('qProgress').textContent = `문제 ${quizIdx + 1} / ${total}`;
    document.getElementById('qScore').textContent = `정답 ${quizCorrect}개`;
    document.getElementById('progressFill').style.width = ((quizIdx) / total * 100) + '%';
    document.getElementById('nextBtn').style.display = 'none';
    const sym = ['①', '②', '③', '④'];
    document.getElementById('questionArea').innerHTML = `
    <div class="q-card">
      <div class="q-number">Q${q.id}. ${SUBJ_NAMES[q.subj]}</div>
      <div class="q-text">${q.q}</div>
      <div class="options">${q.o.map((o, i) => `<button class="option-btn" onclick="selectAnswer(${i})">${sym[i]} ${o}</button>`).join('')}</div>
      <div class="explanation" id="explanation"><b>해설:</b> ${q.ex}</div>
    </div>`;
}
function selectAnswer(idx) {
    if (quizAnswered) return;
    quizAnswered = true;
    const q = quizQuestions[quizIdx];
    const btns = document.querySelectorAll('.option-btn');
    btns.forEach((b, i) => {
        b.classList.add('disabled');
        if (i === q.a) b.classList.add('correct', 'show-correct');
        if (i === idx && i !== q.a) b.classList.add('wrong');
    });
    dailyData.solved++;
    if (idx === q.a) { quizCorrect++; dailyData.correct++; removeError(q.id); } else { addError(q); }
    saveDaily();
    document.getElementById('explanation').classList.add('show');
    document.getElementById('qScore').textContent = `정답 ${quizCorrect}개`;
    document.getElementById('nextBtn').textContent = quizIdx < quizQuestions.length - 1 ? '다음 문제 →' : '결과 보기 🎯';
    document.getElementById('nextBtn').style.display = '';
}
function nextQuestion() {
    quizIdx++;
    if (quizIdx >= quizQuestions.length) { showResult(); return; }
    showQuestion();
}
function showResult() {
    const total = quizQuestions.length, pct = Math.round(quizCorrect / total * 100);
    document.getElementById('quizActive').style.display = 'none';
    let emoji = pct >= 90 ? '🏆' : pct >= 70 ? '😊' : pct >= 50 ? '💪' : '📚';
    let msg = pct >= 90 ? '훌륭합니다!' : pct >= 70 ? '잘하고 있어요!' : pct >= 50 ? '조금만 더!' : '복습이 필요해요!';
    document.getElementById('quizResult').style.display = '';
    document.getElementById('quizResult').innerHTML = `
    <div class="result-card">
      <div style="font-size:4rem">${emoji}</div>
      <div class="result-score">${pct}%</div>
      <div class="result-label">${msg}</div>
      <div class="result-detail">${total}문제 중 <b style="color:var(--green)">${quizCorrect}개 정답</b> · <b style="color:var(--red)">${total - quizCorrect}개 오답</b></div>
      <button class="btn btn-primary btn-block" onclick="resetQuizUI()">다시 풀기</button>
      ${total - quizCorrect > 0 ? '<button class="btn btn-outline btn-block" onclick="showErrorNotes()">오답 노트 보기</button>' : ''}
    </div>`;
}

// === Error Notes ===
function addError(q) {
    if (!errorNotes.find(e => e.id === q.id)) {
        errorNotes.push({ id: q.id, subj: q.subj, q: q.q, o: q.o, a: q.a, ex: q.ex });
        localStorage.setItem('errors', JSON.stringify(errorNotes));
        if (typeof saveToCloud === 'function') saveToCloud();
    }
}
function removeError(id) {
    errorNotes = errorNotes.filter(e => e.id !== id);
    localStorage.setItem('errors', JSON.stringify(errorNotes));
    if (typeof saveToCloud === 'function') saveToCloud();
}
function showErrorNotes() {
    document.getElementById('quizSetup').style.display = 'none';
    document.getElementById('quizActive').style.display = 'none';
    document.getElementById('quizResult').style.display = 'none';
    document.getElementById('errorNotesSection').style.display = '';
    renderErrors();
}
function renderErrors() {
    const el = document.getElementById('errorList'), ne = document.getElementById('noErrors');
    if (!errorNotes.length) { el.innerHTML = ''; ne.style.display = ''; return; }
    ne.style.display = 'none';
    const sym = ['①', '②', '③', '④'];
    el.innerHTML = errorNotes.map(q => `
    <div class="q-card" style="margin-bottom:12px">
      <div class="q-number">Q${q.id}. ${SUBJ_NAMES[q.subj]}</div>
      <div class="q-text">${q.q}</div>
      <div class="options">${q.o.map((o, i) => `<div class="option-btn ${i === q.a ? 'correct' : ''} disabled">${sym[i]} ${o}</div>`).join('')}</div>
      <div class="explanation show"><b>해설:</b> ${q.ex}</div>
      <button class="btn btn-outline" style="margin-top:12px;font-size:0.8rem" onclick="clearError(${q.id})">✅ 이해했어요</button>
    </div>`).join('');
}
function clearError(id) { removeError(id); renderErrors(); updateHome(); }
