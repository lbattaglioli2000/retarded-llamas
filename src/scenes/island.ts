import * as THREE from "three";
import { Player } from "../models/player";
import { gameState } from "../state";
import { appElem } from "../components/app";
import ui from "../components/ui";

const createGround = () => {
  const geometry = new THREE.PlaneGeometry(5, 5);
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const ground = new THREE.Mesh(geometry, material);

  ground.rotation.x = -Math.PI / 2; // This will make the plane horizontal

  return ground;
};

const createLlama = () => {
  const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
  const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const llama = new THREE.Mesh(geometry, material);

  llama.position.set(0, 0.1, 0); // Set initial position
  return llama;
};

export const renderIsland = () => {
  const width = window.innerWidth,
    height = window.innerHeight;

  // init

  const camera = new THREE.PerspectiveCamera(100, width / height, 0.01, 10);

  const scene = new THREE.Scene();

  const ground = createGround();
  scene.add(ground);

  const llama = createLlama();
  scene.add(llama);

  camera.position.set(llama.position.x, 1, llama.position.z);

  // Rotate the camera to face downwards
  camera.rotation.x = -Math.PI / 2;

  // Add a slight angle
  camera.rotation.x += 0.1;

  const player = new Player(llama);
  gameState.players.push(player);

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(1366, 768);
  renderer.setAnimationLoop(animate);
  renderer.domElement.id = "game-canvas";
  appElem!.appendChild(renderer.domElement);
  appElem!.appendChild(ui.createUI());

  // animation

  function animate(time: number) {
    // mesh.rotation.x = time / 2000;
    // mesh.rotation.y = time / 1000;
    // mesh.rotation.z = time / 1000;

    player.updateMovement(time);
    ui.updateUI();
    camera.position.set(llama.position.x, 1, llama.position.z);

    renderer.render(scene, camera);
  }
};

const handleLlamaMovement = (event: KeyboardEvent) => {
  switch (event.key.toLowerCase()) {
    case "w":
      gameState.localPlayer.controls.moveForward = true;
      break;
    case "s":
      gameState.localPlayer.controls.moveBackward = true;
      break;
    case "a":
      gameState.localPlayer.controls.moveLeft = true;
      break;
    case "d":
      gameState.localPlayer.controls.moveRight = true;
      break;
  }
};
const handleLlamaStop = (event: KeyboardEvent) => {
  switch (event.key.toLowerCase()) {
    case "w":
      gameState.localPlayer.controls.moveForward = false;
      break;
    case "s":
      gameState.localPlayer.controls.moveBackward = false;
      break;
    case "a":
      gameState.localPlayer.controls.moveLeft = false;
      break;
    case "d":
      gameState.localPlayer.controls.moveRight = false;
      break;
  }
};

window.addEventListener("keydown", handleLlamaMovement);
window.addEventListener("keyup", handleLlamaStop);
