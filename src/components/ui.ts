import gameState from "../state";

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
    const points = this.elem!.childNodes.item(0) as HTMLHeadingElement;
    const health = this.elem!.childNodes.item(1) as HTMLHeadingElement;
    const time = this.elem!.childNodes.item(2) as HTMLHeadingElement;
    const movement = this.elem!.childNodes.item(3) as HTMLHeadingElement;

    const player = gameState.localPlayer;

    points.innerHTML = `${points.innerHTML.split(" ")[0]} ${player.state.getPoints()}`;
    health.innerHTML = `${health.innerHTML.split(" ")[0]} ${player.state.getHealth()}`;
    time.innerHTML = `${time.innerHTML.split(" ")[0]} ${player.state.getStateTime()}`;
  }
}

export default new UI();
