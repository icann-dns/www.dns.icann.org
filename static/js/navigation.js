document.addEventListener("DOMContentLoaded", () => {
  const menuItems = document.querySelectorAll(".has-children");

  for (const menuItem of menuItems) {
    const toggle = menuItem.querySelector(".submenu-toggle");

    toggle.addEventListener("click", () => {
      const isOpen = menuItem.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    menuItem.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        menuItem.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.focus();
      }
    });
  }
});