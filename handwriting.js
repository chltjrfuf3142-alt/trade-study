// === Annotation Overlay System ===
// Draws directly on top of the concept page content

let annotations = JSON.parse(localStorage.getItem('annotations') || '{}');
let drawingMode = false;
let isDrawing = false;
let currentTool = 'pen';
let currentColor = '#00d4ff';
let currentLineWidth = 2;
let activeStroke = null;
let overlayCanvas, overlayCtx;
let saveTimeout = null;

// === Init ===
function initAnnotationCanvas() {
    overlayCanvas = document.getElementById('annotationCanvas');
    if (!overlayCanvas) return;
    overlayCtx = overlayCanvas.getContext('2d');

    // Pointer events
    overlayCanvas.addEventListener('pointerdown', onDrawStart, { passive: false });
    overlayCanvas.addEventListener('pointermove', onDrawMove, { passive: false });
    overlayCanvas.addEventListener('pointerup', onDrawEnd, { passive: false });
    overlayCanvas.addEventListener('pointercancel', onDrawEnd, { passive: false });
    overlayCanvas.addEventListener('pointerleave', onDrawEnd, { passive: false });

    // Prevent touch defaults on canvas
    overlayCanvas.addEventListener('touchstart', e => {
        if (drawingMode || e.touches[0] && e.touches[0].touchType === 'stylus') {
            e.preventDefault();
        }
    }, { passive: false });
    overlayCanvas.addEventListener('touchmove', e => {
        if (drawingMode || e.touches[0] && e.touches[0].touchType === 'stylus') {
            e.preventDefault();
        }
    }, { passive: false });
}

// === Canvas Sizing ===
function resizeAnnotationCanvas() {
    if (!overlayCanvas) return;
    const wrapper = document.getElementById('conceptListWrapper');
    if (!wrapper) return;

    const rect = wrapper.getBoundingClientRect();
    const contentHeight = wrapper.scrollHeight;
    const contentWidth = rect.width;
    const dpr = window.devicePixelRatio || 1;

    overlayCanvas.width = contentWidth * dpr;
    overlayCanvas.height = contentHeight * dpr;
    overlayCanvas.style.width = contentWidth + 'px';
    overlayCanvas.style.height = contentHeight + 'px';

    overlayCtx.scale(dpr, dpr);
    overlayCtx.lineCap = 'round';
    overlayCtx.lineJoin = 'round';

    // Re-render strokes
    renderAllStrokes();
}

// === Drawing Mode Toggle ===
function toggleDrawingMode() {
    drawingMode = !drawingMode;
    const btn = document.getElementById('drawToggleBtn');
    const toolbar = document.getElementById('drawToolbar');
    const canvas = document.getElementById('annotationCanvas');

    if (drawingMode) {
        btn.classList.add('active');
        btn.textContent = '📖';
        btn.title = '읽기 모드로 전환';
        toolbar.style.display = 'flex';
        canvas.classList.add('drawing-active');
        // Re-render strokes when entering drawing mode
        resizeAnnotationCanvas();
    } else {
        btn.classList.remove('active');
        btn.textContent = '✏️';
        btn.title = '필기 모드로 전환';
        toolbar.style.display = 'none';
        canvas.classList.remove('drawing-active');
        // Ensure strokes remain visible after exit
        renderAllStrokes();
    }
}

// === Drawing Events ===
function onDrawStart(e) {
    // Apple Pencil always draws, finger/mouse only when drawing mode is on
    const isPen = e.pointerType === 'pen';
    if (!isPen && !drawingMode) return;

    e.preventDefault();
    overlayCanvas.setPointerCapture(e.pointerId);
    isDrawing = true;

    const pos = getCanvasPos(e);
    activeStroke = {
        points: [pos],
        color: currentTool === 'eraser' ? '__eraser__' : currentColor,
        width: currentTool === 'eraser' ? currentLineWidth * 5 : currentLineWidth
    };

    // Start drawing the line
    overlayCtx.beginPath();
    overlayCtx.moveTo(pos.x, pos.y);
    if (currentTool === 'eraser') {
        overlayCtx.globalCompositeOperation = 'destination-out';
        overlayCtx.strokeStyle = 'rgba(0,0,0,1)';
        overlayCtx.lineWidth = currentLineWidth * 5;
    } else {
        overlayCtx.globalCompositeOperation = 'source-over';
        overlayCtx.strokeStyle = currentColor;
        overlayCtx.lineWidth = currentLineWidth * (0.5 + (e.pressure || 0.5));
    }
}

function onDrawMove(e) {
    if (!isDrawing || !activeStroke) return;
    e.preventDefault();

    const pos = getCanvasPos(e);
    activeStroke.points.push(pos);

    if (currentTool === 'pen') {
        overlayCtx.lineWidth = currentLineWidth * (0.5 + (e.pressure || 0.5));
    }

    overlayCtx.lineTo(pos.x, pos.y);
    overlayCtx.stroke();
    overlayCtx.beginPath();
    overlayCtx.moveTo(pos.x, pos.y);
}

function onDrawEnd(e) {
    if (!isDrawing) return;
    isDrawing = false;
    overlayCtx.globalCompositeOperation = 'source-over';

    if (activeStroke && activeStroke.points.length > 1) {
        const key = getAnnotationKey();
        if (!annotations[key]) annotations[key] = [];
        annotations[key].push(activeStroke);
        debounceSave();
    }
    activeStroke = null;
}

function getCanvasPos(e) {
    const rect = overlayCanvas.getBoundingClientRect();
    return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        p: e.pressure || 0.5
    };
}

// === Annotation Key (per part filter) ===
function getAnnotationKey() {
    return 'part_' + (typeof activePart !== 'undefined' ? activePart : 0);
}

// === Rendering ===
function renderAllStrokes() {
    if (!overlayCtx || !overlayCanvas) return;
    const wrapper = document.getElementById('conceptListWrapper');
    if (!wrapper) return;

    const w = wrapper.getBoundingClientRect().width;
    const h = wrapper.scrollHeight;

    overlayCtx.clearRect(0, 0, w, h);

    const key = getAnnotationKey();
    const strokes = annotations[key] || [];

    strokes.forEach(stroke => {
        if (stroke.points.length < 2) return;
        overlayCtx.beginPath();
        overlayCtx.lineCap = 'round';
        overlayCtx.lineJoin = 'round';

        if (stroke.color === '__eraser__') {
            overlayCtx.globalCompositeOperation = 'destination-out';
            overlayCtx.strokeStyle = 'rgba(0,0,0,1)';
            overlayCtx.lineWidth = stroke.width;
        } else {
            overlayCtx.globalCompositeOperation = 'source-over';
            overlayCtx.strokeStyle = stroke.color;
            overlayCtx.lineWidth = stroke.width;
        }

        overlayCtx.moveTo(stroke.points[0].x, stroke.points[0].y);
        for (let i = 1; i < stroke.points.length; i++) {
            overlayCtx.lineTo(stroke.points[i].x, stroke.points[i].y);
        }
        overlayCtx.stroke();
    });

    overlayCtx.globalCompositeOperation = 'source-over';
}

// === Tools ===
function setTool(tool) {
    currentTool = tool;
    document.querySelectorAll('.tool-btn[data-tool]').forEach(b => b.classList.remove('active'));
    const btn = document.querySelector(`.tool-btn[data-tool="${tool}"]`);
    if (btn) btn.classList.add('active');
}

function setColor(color) {
    currentColor = color;
    document.querySelectorAll('.color-dot').forEach(d => d.classList.remove('active'));
    const dot = document.querySelector(`.color-dot[data-color="${color}"]`);
    if (dot) dot.classList.add('active');
    if (currentTool === 'eraser') setTool('pen');
}

function setLineWidth(w) {
    currentLineWidth = w;
    document.querySelectorAll('.width-btn').forEach(b => b.classList.remove('active'));
    const btn = document.querySelector(`.width-btn[data-width="${w}"]`);
    if (btn) btn.classList.add('active');
}

function undoStroke() {
    const key = getAnnotationKey();
    if (!annotations[key] || !annotations[key].length) return;
    annotations[key].pop();
    renderAllStrokes();
    debounceSave();
}

function clearAnnotations() {
    if (!confirm('이 파트의 필기를 모두 지우시겠습니까?')) return;
    const key = getAnnotationKey();
    annotations[key] = [];
    renderAllStrokes();
    debounceSave();
}

// === Save / Load ===
function debounceSave() {
    clearTimeout(saveTimeout);
    saveTimeout = setTimeout(() => saveAnnotations(), 1000);
}

function saveAnnotations() {
    localStorage.setItem('annotations', JSON.stringify(annotations));
    if (typeof saveToCloud === 'function') saveToCloud();
}

// === Hook into concept rendering ===
const _originalRenderConcepts = typeof renderConcepts === 'function' ? renderConcepts : null;

// Wait for DOM and then init
document.addEventListener('DOMContentLoaded', () => {
    initAnnotationCanvas();
    // Resize canvas after concepts render
    window.addEventListener('resize', () => {
        setTimeout(resizeAnnotationCanvas, 100);
    });
});

// Called by app.js after rendering concepts
function onConceptsRendered() {
    setTimeout(() => {
        resizeAnnotationCanvas();
    }, 50);
}
