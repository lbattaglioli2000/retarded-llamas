import * as THREE from "three";

class Player {
    mesh: THREE.Mesh;
    speed: number;

    constructor(
        mesh: THREE.Mesh,
        speed: number = 0.1,
    ) {
        this.mesh = mesh;
        this.speed = speed;
    }

    moveForward() {
        this.mesh.position.z -= this.speed;
    }

    moveBackward() {
        this.mesh.position.z += this.speed;
    }

    moveLeft() {
        this.mesh.position.x -= this.speed;
    }

    moveRight() {
        this.mesh.position.x += this.speed;
    }

    updateMovement(time: number) {
        // Update the movement
    }
}