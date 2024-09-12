const header = document.querySelector(".header");
const headerContainer = document.querySelector(".header__container");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.style.top = "10px";
    headerContainer.style.padding = "12px 16px";
  } else {
    header.style.top = "30px";
    headerContainer.style.padding = "17px 33px";
  }
});
