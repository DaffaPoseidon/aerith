const hamburger = document.querySelector(".hamburger");
const navItems = document.querySelector(".nav-items");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("aktif");
    navItems.classList.toggle("aktif");
});

document.querySelectorAll(".nav-list").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("aktif");
    navItems.classList.remove("aktif");
}))