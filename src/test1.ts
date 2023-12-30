import * as THREE from "three";
import GUI from "lil-gui";

// const gui = new GUI();
const gui = new GUI({
  // autoPlace: true,
  container: document.getElementById("gui")!,
});

const myObject = {
  myBoolean: true,
  myFunction: function () {
    console.log("example");
  },
  myString: "lil-gui",
  myNumber: 1,
};

gui.add(myObject, "myBoolean"); // Checkbox
gui.add(myObject, "myFunction"); // Button
gui.add(myObject, "myString"); // Text Field
gui.add(myObject, "myNumber"); // Number Field

// Add sliders to number fields by passing min and max
gui.add(myObject, "myNumber", 0, 1);
gui.add(myObject, "myNumber", 0, 100, 2); // snap to even numbers

// Create dropdowns by passing an array or object of named values
gui.add(myObject, "myNumber", [0, 1, 2]);
gui.add(myObject, "myNumber", { Label1: 0, Label2: 1, Label3: 2 });

// Create color pickers for multiple color formats
const colorFormats = {
  string: "#ffffff",
  int: 0xffffff,
  object: { r: 1, g: 1, b: 1 },
  array: [1, 1, 1],
};

gui.addColor(colorFormats, "string");

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// const geometry = new THREE.BoxGeometry(1, 1, 1);
const geometry = new THREE.IcosahedronGeometry(1, 0);
// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
// const cube = new THREE.Mesh(geometry, material);
const icosahedron = new THREE.Mesh(geometry, material);
// scene.add(cube);
scene.add(icosahedron);

// Ambient light
const ambientLight = new THREE.AmbientLight(0x333333);
scene.add(ambientLight);

// Directional light
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
scene.add(directionalLight);
directionalLight.position.set(-1, 1, 0);

// Directional light helper
// const directionalLightHelper = new THREE.DirectionalLightHelper(
//   directionalLight,
// );
// scene.add(directionalLightHelper);

camera.position.z = 5;

function animate() {
  console.log("here");
  requestAnimationFrame(animate);
  // cube.rotation.x += 0.01;
  // cube.rotation.y += 0.01;
  icosahedron.rotation.x += 0.01;
  icosahedron.rotation.y += 0.01;
  renderer.render(scene, camera);
}

animate();

export function setupTest1(el: HTMLButtonElement) {
  el.addEventListener("click", () => {
    const closeBtnEl = document.querySelector<HTMLDivElement>("#closeBtn");
    closeBtnEl!.style.visibility = "visible";
    const guiEl = document.querySelector<HTMLDivElement>("#gui");
    guiEl!.style.visibility = "visible";
    const app = document.querySelector<HTMLDivElement>("#test");
    app!.innerHTML = ``;
    app!.appendChild(renderer.domElement);
  });
}
