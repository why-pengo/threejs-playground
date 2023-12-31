export function setupCloseBtn(el: HTMLButtonElement) {
  el.addEventListener("click", () => {
    localStorage.removeItem("Pinned");
    location.reload();
  });
}

export function setupPinBtn(el: HTMLButtonElement) {
  el.addEventListener("click", () => {
    const unpinEl = document.querySelector<HTMLDivElement>("#unpinBtn");
    const pinEl = document.querySelector<HTMLDivElement>("#pinBtn");
    console.log("unpinning");
    localStorage.removeItem("Pinned");
    unpinEl!.style.visibility = "visible";
    pinEl!.style.visibility = "hidden";
  });
}

export function setupUnpinBtn(el: HTMLButtonElement) {
  el.addEventListener("click", () => {
    const unpinEl = document.querySelector<HTMLDivElement>("#unpinBtn");
    const pinEl = document.querySelector<HTMLDivElement>("#pinBtn");
    console.log("pinning");
    localStorage.setItem("Pinned", "setupTest1");
    pinEl!.style.visibility = "visible";
    unpinEl!.style.visibility = "hidden";
  });
}

export function checkPinState() {
  const pinState = localStorage.getItem("Pinned");
  console.log("pinState", pinState);
  return pinState;
}

export function setupView() {
  const closeBtnEl = document.querySelector<HTMLDivElement>("#closeBtn");
  closeBtnEl!.style.visibility = "visible";
  const guiEl = document.querySelector<HTMLDivElement>("#gui");
  guiEl!.style.visibility = "visible";
  const pinEl = document.querySelector<HTMLDivElement>("#pinBtn");
  const unpinEl = document.querySelector<HTMLDivElement>("#unpinBtn");
  if (checkPinState()) {
    pinEl!.style.visibility = "visible";
    unpinEl!.style.visibility = "hidden";
  } else {
    pinEl!.style.visibility = "hidden";
    unpinEl!.style.visibility = "visible";
  }
}

export function loadView(el: HTMLElement) {
  el.click();
}
