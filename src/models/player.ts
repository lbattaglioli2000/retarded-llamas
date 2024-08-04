import * as THREE from "three";

export class Player {
    mesh: THREE.Mesh;
    speed: number;
    controls = {
        moveForward: false,
        moveBackward: false,
        moveLeft: false,
        moveRight: false,
    }

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
        console.log("Updating movement")
        if (this.controls.moveForward) {
            this.moveForward();
        }
        if (this.controls.moveBackward) {
            this.moveBackward();
        }
        if (this.controls.moveLeft) {
            this.moveLeft();
        }
        if (this.controls.moveRight) {
            this.moveRight();
        }
    }
}