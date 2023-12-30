export function setupCloseBtn(el: HTMLButtonElement) {
  el.addEventListener("click", () => {
    // const closeBtnEl = document.querySelector<HTMLDivElement>("#closeBtn");
    // closeBtnEl!.style.visibility = "hidden";
    location.reload();
  });
}
