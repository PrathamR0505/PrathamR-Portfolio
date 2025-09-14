document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize AOS (Animate on Scroll)
    AOS.init({
        duration: 700, // values from 0 to 3000, with step 50ms
        easing: 'ease-in-out', // default easing for AOS animations
        once: true, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
    });

    // --- Scroll-based animation for fixed elements ---
    const heroSection = document.getElementById('hero');
    const verticalText = document.querySelector('.vertical-text');
    const socialIcons = document.querySelector('.social-icons');

    // Function to check scroll position and toggle classes
    const handleScroll = () => {
        // We check if these elements exist to avoid errors on smaller screens where they might be hidden
        if (heroSection && verticalText && socialIcons) {
            const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
            const scrollPosition = window.scrollY;

            // Hide elements when user scrolls past 80% of the hero section height
            if (scrollPosition > heroBottom * 0.8) {
                verticalText.classList.add('is-hidden');
                socialIcons.classList.add('is-hidden');
            } else {
                verticalText.classList.remove('is-hidden');
                socialIcons.classList.remove('is-hidden');
            }
        }
    };

    // Add event listener for scroll
    window.addEventListener('scroll', handleScroll);

    // --- Theme Switcher ---
    const themeSwitcher = document.getElementById('theme-switcher');
    const body = document.body;

    // The website always opens in dark theme, so no need to check localStorage on load.
    themeSwitcher.addEventListener('click', () => {
        body.classList.toggle('light-theme');
    });
});