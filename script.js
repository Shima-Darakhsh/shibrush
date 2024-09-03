document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.content-section');
    const navLinks = document.querySelectorAll('nav ul li a');

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

function loadBook(epubUrl) {
    const viewer = document.querySelector('#ebook-viewer');
    if (viewer) {
        // Clear the viewer before loading a new book
        viewer.innerHTML = '';

        const book = ePub(epubUrl);
        const rendition = book.renderTo(viewer, {
            width: "100%",
            height: "100%"
        });

        rendition.display();
    } else {
        console.error('EPUB viewer element not found');
    }
}
