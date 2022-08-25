const menu = document.querySelector(".menu")
const menuItems = document.querySelectorAll(".menu-link")

menuItems.forEach(item => item.addEventListener("click", () => {
    menu.style.right = "-100%"
}))