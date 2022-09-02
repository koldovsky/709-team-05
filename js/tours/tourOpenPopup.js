(function () {
  const tourPopupWindow = document.querySelector(".book__tour-popup-window");
  const openPopupBtn = document.querySelectorAll(".open-popup");
  const closeBtnPopup = document.querySelector(".close-button-popup");

  function openPopup(el) {
    tourPopupWindow.classList.toggle("show-modal");
    el.stopPropagation();
  }

  openPopupBtn.forEach((btns) => {
    btns.addEventListener("click", openPopup);
  });

  closeBtnPopup.addEventListener("click", openPopup);
})();