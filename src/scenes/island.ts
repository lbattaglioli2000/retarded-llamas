import * as THREE from "three";
import {Player} from "../models/player";
import {GameState} from "../state";

const createGround = () => {
  const geometry = new THREE.PlaneGeometry(5, 5);
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const ground = new THREE.Mesh(geometry, material);

  ground.rotation.x = - Math.PI / 2; // This will make the plane horizontal

  return ground;
};

const createLlama = () => {
  const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
  const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const llama = new THREE.Mesh(geometry, material);

  llama.position.set(0, 0.1, 0); // Set initial position
  return llama;
};

const gameState = new GameState();

export const renderIsland = () => {
  const width = window.innerWidth,
    height = window.innerHeight;

  // init

  const camera = new THREE.PerspectiveCamera(70, width / height, 0.01, 10);
  camera.position.z = 1;
  camera.position.y = 0.3;

  const scene = new THREE.Scene();

  const ground = createGround();
  scene.add(ground);

  const llama = createLlama();
  scene.add(llama);

  const player = new Player(llama);
  gameState.players.add(player);

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(1366, 768);
  renderer.setAnimationLoop(animate);
  // renderer.setSize(width, height);
  const appElem = document.getElementById("app");
  appElem!.appendChild(renderer.domElement);

  // animation

  function animate(time: number) {
    // mesh.rotation.x = time / 2000;
    // mesh.rotation.y = time / 1000;
    // mesh.rotation.z = time / 1000;

    player.updateMovement(time);

    renderer.render(scene, camera);
  }
};

const handleLlamaMovement = (event: KeyboardEvent) => {
  gameState.players.values().next().value.controls.moveForward = false;
  gameState.players.values().next().value.controls.moveBackward = false;
  gameState.players.values().next().value.controls.moveLeft = false;
  gameState.players.values().next().value.controls.moveRight = false;

  switch (event.key) {
    case 'w':
      gameState.players.values().next().value.controls.moveForward = true;
      break;
    case 's':
      gameState.players.values().next().value.controls.moveBackward = true;
      break;
    case 'a':
      gameState.players.values().next().value.controls.moveLeft = true;
      break;
    case 'd':
      gameState.players.values().next().value.controls.moveRight = true;
      break;
  }
}
const handleLlamaStop = (event: KeyboardEvent) => {
    switch (event.key) {
        case 'w':
        gameState.players.values().next().value.controls.moveForward = false;
        break;
        case 's':
        gameState.players.values().next().value.controls.moveBackward = false;
        break;
        case 'a':
        gameState.players.values().next().value.controls.moveLeft = false;
        break;
        case 'd':
        gameState.players.values().next().value.controls.moveRight = false;
        break;
    }
}

window.addEventListener('keydown', handleLlamaMovement);
window.addEventListener('keyup', handleLlamaStop);