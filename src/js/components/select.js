document.querySelectorAll(".dropdown").forEach(function (dropDownWrapper) {
  const dropWrapper = dropDownWrapper.querySelector(".dropdown__wrapper");
  const dropBtn = dropDownWrapper.querySelector(".dropdown__btn");
  const dropList = dropDownWrapper.querySelector(".dropdown__list");
  const dropItem = dropDownWrapper.querySelectorAll(".dropdown__list-item");
  const dropInput = dropDownWrapper.querySelector(".dropdown__list-input");

  dropBtn.addEventListener("click", () => {
    const isVisible = dropList.classList.toggle("dropdown__list-visible");
    dropWrapper.classList.toggle("dropdown__wrapper-visible", isVisible);
  });

  dropItem.forEach(function (listItem) {
    listItem.addEventListener("click", function (e) {
      e.stopPropagation();
      dropBtn.innerText = this.innerText;
      dropInput.value = this.dataset.value;
      dropList.classList.remove("dropdown__list-visible");
      dropBtn.classList.remove("dropdown__btn-active");
      dropWrapper.classList.remove("dropdown__wrapper-visible");
    });
  });

  document.addEventListener("click", (e) => {
    if (!dropDownWrapper.contains(e.target)) {
      dropList.classList.remove("dropdown__list-visible");
      dropBtn.classList.remove("dropdown__btn-active");
      dropWrapper.classList.remove("dropdown__wrapper-visible");
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Tab" || e.key === "Escape") {
      dropList.classList.remove("dropdown__list-visible");
      dropBtn.classList.remove("dropdown__btn-active");
      dropWrapper.classList.remove("dropdown__wrapper-visible");
    }
  });
});
