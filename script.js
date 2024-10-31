// Smooth scrolling to sections
document.querySelectorAll('.side-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Highlight active link in the sidebar based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('main h2');
    const sidebarLinks = document.querySelectorAll('.side-link');

    let currentSectionId = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100; // Adjust to your header height if necessary
        if (window.scrollY >= sectionTop) {
            currentSectionId = section.getAttribute('id');
        }
    });

    sidebarLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href').substring(1) === currentSectionId);
    });
});
