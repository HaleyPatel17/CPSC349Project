const hamburger = document.querySelector(".nav_hamburger");
const linksContain = document.querySelector(".nav_menu");
const links = document.querySelectorAll(".menu_link");

hamburger.addEventListener("click", () => {
    linksContain.classList.toggle("active");
    hamburger.classList.toggle("active");
});

window.addEventListener("resize", () => {
    if (window.matchMedia("(max-width: 600px").matches) {
        closeMenu();
    }
});

if (window.matchMedia("(max-width: 600px").matches) {
    closeMenu();
}

function closeMenu() {
    links.forEach((link) => {
        link.addEventListener("click", () => {
            linksContain.classList.remove("active");
            hamburger.classList.remove("active");
        })
    })
}