export class UI {
  elem?: HTMLDivElement;

  createUI() {
    if (!this.elem) {
      this.elem = document.createElement("div");
      this.elem.classList.add("player-board");
      this.elem.innerHTML = `
<h4>Points: </h4>
<h4>Health: </h4>
<h4>Time: </h4>
      `;
    }

    return this.elem;
  }
}

export default new UI();
