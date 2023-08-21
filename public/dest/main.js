function openModal() {
  const btn = document.querySelector(
    ".headermidle__topic .headermidle__topic-icon"
  );
  const btnClose = document.querySelector(".modal-fullmenu .btn-close");
  const modal = document.querySelector(".modal-fullmenu");
  btn.addEventListener("click", () => {
    modal.classList.toggle("active");
  });
  btnClose.addEventListener("click", () => {
    // e.stopPropagation();
    modal.classList.remove("active");
    console.log("no");
  });
}
openModal();
console.log("hello");
