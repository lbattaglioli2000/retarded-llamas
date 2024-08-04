import * as THREE from "three";

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

const handleLlamaMovement = (event: KeyboardEvent) => {
  switch (event.key) {
    case 'w':
      // move llama forward
      break;
    case 's':
      // move llama backward
      break;
    case 'a':
      // move llama left
      break;
    case 'd':
      // move llama right
      break;
  }
}

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

    // player.updateMovement(time);
    renderer.render(scene, camera);
  }
};

window.addEventListener('keydown', handleLlamaMovement);