document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector(".s-block.s-block--fixed-banner.wide-placeholder");
  if (!section) return;

  const menuHTML = `
    <div class="side-menu">
      <ul>
        <li><span>المفارش</span></li>
        <li><span>اللباد</span></li>
        <li><span>المخدات</span></li>
        <li><span>الأرواب</span></li>
        <li><span>المناشف</span></li>
        <li><span>عازل المرتبة</span></li>
        <li><span>البكجات والعروض</span></li>
      </ul>
    </div>
  `;

  // Function to toggle the menu based on screen width
  function updateMenu() {
    const existingMenu = section.querySelector(".side-menu");

    if (window.innerWidth >= 1024) {
      // ✅ Desktop: show the menu if not present
      if (!existingMenu) {
        section.style.display = "flex";
        section.style.alignItems = "flex-start";
        section.style.justifyContent = "flex-start";
        section.style.gap = "20px";
        section.style.flexWrap = "wrap";
        section.insertAdjacentHTML("afterbegin", menuHTML);
      }
    } else {
      // 📱 Mobile: remove the menu if it exists
      if (existingMenu) existingMenu.remove();
      section.style.display = ""; // reset layout for mobile
      section.style.alignItems = "";
      section.style.justifyContent = "";
      section.style.gap = "";
      section.style.flexWrap = "";
    }
  }

  // Initial check
  updateMenu();

  // Listen for window resize to handle live responsiveness
  window.addEventListener("resize", updateMenu);
});
