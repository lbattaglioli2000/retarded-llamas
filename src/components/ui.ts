import { gameState } from "../state";

export class UI {
  elem?: HTMLDivElement;

  createUI() {
    if (!this.elem) {
      this.elem = document.createElement("div");
      this.elem.classList.add("player-board");
      this.elem.innerHTML = `
<h4 id='ui-points'>Points: 0</h4>
<h4 id='ui-health'>Health: 0</h4>
<h4 id='ui-time'>Time: Infinity</h4>
<h4 id='ui-movement'>Time: WASD</h4>
      `;
    }

    return this.elem;
  }

  updateUI() {
    const points = document.getElementById("ui-points") as HTMLHeadingElement;
    const health = document.getElementById("ui-health") as HTMLHeadingElement;
    const time = document.getElementById("ui-time") as HTMLHeadingElement;
    const movement = document.getElementById(
      "ui-movement",
    ) as HTMLHeadingElement;

    const player = gameState.localPlayer;

    points.innerHTML = `${points.innerHTML.split(" ")[0]} ${player.state.getPoints()}`;
    if (points.innerHTML && health.innerHTML && time.innerHTML) {
      health.innerHTML = `${health.innerHTML.split(" ")[0]} ${player.state.getHealth()}`;
      time.innerHTML = `${time.innerHTML.split(" ")[0]} ${player.state.getStateTime()}`;
    }
  }
}

export default new UI();
