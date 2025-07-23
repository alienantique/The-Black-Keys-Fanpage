// script.js
document.addEventListener("DOMContentLoaded", () => {
    const dropdowns = document.querySelectorAll(".dropdown");
    const themeToggle = document.querySelector(".theme-toggle");
    const body = document.body;

    document.querySelectorAll(".submenu").forEach(submenu => {
        submenu.style.display = "none";
    });

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener("mouseenter", () => {
            const submenu = dropdown.querySelector(".submenu");
            submenu.style.display = "block";
        });
        dropdown.addEventListener("mouseleave", () => {
            const submenu = dropdown.querySelector(".submenu");
            submenu.style.display = "none";
        });
    });

    
});
