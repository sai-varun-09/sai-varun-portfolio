document.addEventListener('DOMContentLoaded', () => {

    // 1. Mobile Menu Toggle Logic
    const menuButton = document.getElementById('menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelectorAll('#mobile-menu a');

    // Function to close the menu
    const closeMenu = () => {
        mobileMenu.classList.add('hidden');
    };

    // Toggle the mobile menu when the button is clicked
    menuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Close the mobile menu when a navigation link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // 2. Project Tabs Functionality
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    // Function to handle tab switching
    const switchTab = (tabId) => {
        // Deactivate all buttons and hide all content
        tabButtons.forEach(button => {
            button.classList.remove('active');
            button.classList.remove('bg-accent', 'text-white', 'shadow-lg');
            button.classList.add('bg-gray-700', 'hover:bg-gray-600');
        });

        tabContents.forEach(content => {
            content.classList.add('hidden');
        });

        // Activate the selected button and show the corresponding content
        const activeButton = document.querySelector(`.tab-button[data-tab="${tabId}"]`);
        const activeContent = document.getElementById(tabId);

        if (activeButton && activeContent) {
            activeButton.classList.add('active');
            activeButton.classList.remove('bg-gray-700', 'hover:bg-gray-600');
            activeButton.classList.add('bg-accent', 'text-white', 'shadow-lg');
            activeContent.classList.remove('hidden');
        }
    };

    // Add click listener to all tab buttons
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');
            switchTab(tabId);
        });
    });

    // Initialize: Ensure the default tab ('fullstack') is active and visible on load
    switchTab('fullstack');
});