import Modal from "./Modal.js";

class App {
  constructor($container) {
    this.$container = $container;
    this.render();
  }

  navEvent() {
    const header = document.getElementsByClassName("move");

    const movement = [0, 1100, 2620, 200000];

    for (let i = 0; i < 4; i++) {
      header[i].addEventListener("click", () => {
        window.scrollTo({ left: 0, top: movement[i], behavior: "smooth" });
      });
    }
  }

  render() {
    this.navEvent();
    new Modal(this.$container);
  }
}

export default App;
