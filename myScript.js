document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector(".s-block.s-block--fixed-banner.wide-placeholder");
  if (!section) return;

  const menuHTML = `
   <div class="side-menu">
    <ul>
      <li><a href="/%D8%A7%D9%84%D9%85%D9%81%D8%A7%D8%B1%D8%B4/c1489028710">المفارش</a></li>
      <li><a href="/%D8%A7%D9%84%D9%84%D8%A8%D8%A7%D8%AF/c334902026">اللباد</a></li>
      <li><a href="/%D8%A7%D9%84%D9%85%D8%AE%D8%AF%D8%A7%D8%AA/c159813653">المخدات</a></li>
      <li><a href="/%D8%A7%D8%B1%D9%88%D8%A7%D8%A8-%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D8%AD%D9%85%D8%A7%D9%85-%D9%88%D8%A7%D9%84%D9%85%D9%86%D8%A7%D8%B4%D9%81/c1358044177">الأرواب</a></li>
      <li><a href="/%D8%A7%D9%84%D9%85%D9%86%D8%A7%D8%B4%D9%81/c1317107996">المناشف</a></li>
      <li><a href="/%D9%88%D8%A7%D9%82%D9%8A-%D9%85%D8%B1%D8%AA%D8%A8%D8%A9/c1259739649">عازل المرتبة</a></li>
      <li><a href="/offers">البكجات والعروض</a></li>
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
