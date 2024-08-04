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
        speed: number = 0.05,
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
        const direction = new THREE.Vector3();

        if (this.controls.moveForward) {
            direction.z -= 1;
        }
        if (this.controls.moveBackward) {
            direction.z += 1;
        }
        if (this.controls.moveLeft) {
            direction.x -= 1;
        }
        if (this.controls.moveRight) {
            direction.x += 1;
        }

        if (direction.length() > 0) {
            direction.normalize().multiplyScalar(this.speed);
            this.mesh.position.add(direction);
        }
    }
}