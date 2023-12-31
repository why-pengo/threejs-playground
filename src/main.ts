import "./style.scss";
import typescriptLogo from "/typescript.svg";
import threejsLogo from "/threejs.svg";
import viteLogo from "/vite.svg";
import { setupTest1 } from "./test1.ts";
import { loadView } from "./utils.ts";
import {
  setupCloseBtn,
  setupPinBtn,
  checkPinState,
  setupUnpinBtn,
} from "./utils.ts";
// Import all of Bootstrap's JS
// import * as bootstrap from "bootstrap";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo" alt="TypeScript logo" />
    </a>
    <a href="https://threejs.org/" target="_blank">
      <img src="${threejsLogo}" class="logo" alt="Three.js logo" />
    </a>
    <h1>Vite + TypeScript + Three.js</h1>
    <div class="border-0 bg-transparent">
      <button id="test1" class="btnTweak" type="button">Test1</button>
    </div>
    <p class="read-the-docs">
      Click on the Vite, TypeScript and Threejs logos to learn more
    </p>
  </div>
`;

setupCloseBtn(document.querySelector<HTMLButtonElement>("#closeBtn")!);
setupPinBtn(document.querySelector<HTMLButtonElement>("#pinBtn")!);
setupUnpinBtn(document.querySelector<HTMLButtonElement>("#unpinBtn")!);

// Tests
const test1 = document.querySelector<HTMLButtonElement>("#test1");
setupTest1(test1!);

// Check Pin State
const curView = checkPinState();
if (curView !== null) {
  loadView(test1!);
}
