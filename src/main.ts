import "./style.scss";
import typescriptLogo from "./typescript.svg";
import threejsLogo from "./threejs.svg";
import viteLogo from "/vite.svg";
import { setupTest1 } from "./test1.ts";
import { setupCloseBtn } from "./utils.ts";
// Import all of Bootstrap's JS
// import * as bootstrap from "bootstrap";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <a href="https://threejs.org/" target="_blank">
      <img src="${threejsLogo}" class="logo vanilla" alt="Three.js logo" />
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

setupTest1(document.querySelector<HTMLButtonElement>("#test1")!);
setupCloseBtn(document.querySelector<HTMLButtonElement>("#closeBtn")!);
