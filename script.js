document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.content-section');
    const navLinks = document.querySelectorAll('nav ul li a');
    
    // Function to switch between sections
    function showSection(sectionId) {
        sections.forEach(section => {
            section.classList.toggle('hidden', section.id !== sectionId);
        });

        navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('data-section') === sectionId);
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            showSection(link.getAttribute('data-section'));
        });
    });

    showSection('about');
});

// Animation Section Video Play/Pause
const animationVideo = document.getElementById('animation-video');
animationVideo.addEventListener('click', () => {
    if (animationVideo.paused) {
        animationVideo.play();
    } else {
        animationVideo.pause();
    }
});

// PDF Viewer Logic (unchanged)
let pdfDoc1 = null;
let currentPage1 = 1;
let pdfCanvas1 = document.getElementById('pdf-canvas');
let ctx1 = pdfCanvas1.getContext('2d');
const url1 = './images/logo/shima.pdf';

function renderPage1(num) {
    pdfDoc1.getPage(num).then((page) => {
        const scale = 1.5;
        const viewport = page.getViewport({ scale: scale });

        pdfCanvas1.height = viewport.height;
        pdfCanvas1.width = viewport.width;

        const renderContext = {
            canvasContext: ctx1,
            viewport: viewport
        };

        page.render(renderContext);
    });
}

function loadPDF1() {
    pdfjsLib.getDocument(url1).promise.then((pdf) => {
        pdfDoc1 = pdf;
        renderPage1(currentPage1);
    });
}

document.getElementById('prevPage').addEventListener('click', () => {
    if (currentPage1 > 1) {
        currentPage1--;
        renderPage1(currentPage1);
    }
});

document.getElementById('nextPage').addEventListener('click', () => {
    if (currentPage1 < pdfDoc1.numPages) {
        currentPage1++;
        renderPage1(currentPage1);
    }
});

loadPDF1();

// Second PDF Logic
let pdfDoc2 = null;
let currentPage2 = 1;
let pdfCanvas2 = document.getElementById('pdf-canvas-2');
let ctx2 = pdfCanvas2.getContext('2d');
const url2 = './images/logo/eco.pdf';

function renderPage2(num) {
    pdfDoc2.getPage(num).then((page) => {
        const scale = 1.5;
        const viewport = page.getViewport({ scale: scale });

        pdfCanvas2.height = viewport.height;
        pdfCanvas2.width = viewport.width;

        const renderContext = {
            canvasContext: ctx2,
            viewport: viewport
        };

        page.render(renderContext);
    });
}

function loadPDF2() {
    pdfjsLib.getDocument(url2).promise.then((pdf) => {
        pdfDoc2 = pdf;
        renderPage2(currentPage2);
    });
}

document.getElementById('prevPage-2').addEventListener('click', () => {
    if (currentPage2 > 1) {
        currentPage2--;
        renderPage2(currentPage2);
    }
});

document.getElementById('nextPage-2').addEventListener('click', () => {
    if (currentPage2 < pdfDoc2.numPages) {
        currentPage2++;
        renderPage2(currentPage2);
    }
});

loadPDF2();
