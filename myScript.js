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
  function updateMenu() {
    const existingMenu = section.querySelector(".side-menu");

    if (window.innerWidth >= 1024) {
      if (!existingMenu) {
        section.style.display = "flex";
        section.style.alignItems = "flex-start";
        section.style.justifyContent = "flex-start";
        section.style.gap = "20px";
        section.style.flexWrap = "wrap";
        section.insertAdjacentHTML("afterbegin", menuHTML);
      }
    } else {

      if (existingMenu) existingMenu.remove();
      section.style.display = ""; 
      section.style.alignItems = "";
      section.style.justifyContent = "";
      section.style.gap = "";
      section.style.flexWrap = "";
    }
  }

  updateMenu();

  window.addEventListener("resize", updateMenu);
});
