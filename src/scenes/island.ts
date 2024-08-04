import * as THREE from "three";

export const createBox = () => {
  const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
  const material = new THREE.MeshNormalMaterial();

  // Add to some map

  return new THREE.Mesh(geometry, material);
};

export const renderIsland = () => {
  const width = window.innerWidth,
    height = window.innerHeight;

  // init

  const camera = new THREE.PerspectiveCamera(70, width / height, 0.01, 10);
  camera.position.z = 1;

  const scene = new THREE.Scene();

  const mesh = createBox();

  scene.add(mesh);

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

    renderer.render(scene, camera);
  }
};
