// menu toggling
const btnToggler = document.querySelector("button.menu_toggle");
const menu = document.querySelector("ul.menu");
const printType = document.querySelector("select");

btnToggler.addEventListener("click", () => {
  const show = "d_show",
    hide = "d_hide";
  if (menu.className.includes(hide)) {
    menu.classList.add(show);
    menu.classList.remove(hide);
  } else {
    menu.classList.add(hide);
    menu.classList.remove(show);
  }
});
// track all li
document.querySelectorAll("ul.menu>li").forEach((ele) => {
  ele.addEventListener("click", () => {
    const ptypeTxt = printType.value;
    if (!ptypeTxt) {
      alert(`Please select type!`);
      return;
    } else if (!["dir_or_warn", "console_or_alert"].includes(ptypeTxt)) {
      alert(`Invalid selected type`);
      return;
    }
    const txt = ele.innerText;
    if (ptypeTxt === "console_or_alert") {
      if (txt === "Menu 01") {
        console.log(txt);
      } else if (txt === "Menu 02") {
        alert(`Selected menu value is:${txt}`);
      } else if (txt === "Menu 03") {
        console.dir(txt);
      } else if (txt === "Menu 04") {
        console.dir(confirm(`This is ${txt}`));
      } else if (txt === "Menu 05") {
        console.error(`This is ${txt}`);
      } else if (txt === "Menu 06") {
        console.info(`This is ${txt}`);
      } else if (txt === "Menu 07") {
        console.warn(`This is ${txt}`);
      }
      return;
    }
    const num = parseInt(txt.split(" ")[1]);
    if (num % 2 === 0) {
      console.dir(`This is even menu where value is: ${txt}`);
      return;
    }
    console.warn(`This is odd menu where value is: ${txt}`);
  });
});
