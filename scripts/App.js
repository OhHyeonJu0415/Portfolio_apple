import Modal from "./component/Modal.js";
import Scroll from "./component/Scroll.js";

class App {
  constructor($container) {
    this.$container = $container;
    this.render();
  }

  navEvent() {
    const header = document.getElementsByClassName("move");

    const movement = [0, 1100, 2400, 200000];

    for (let i = 0; i < 4; i++) {
      header[i].addEventListener("click", () => {
        window.scrollTo({ left: 0, top: movement[i], behavior: "smooth" });
      });
    }
  }

  render() {
    this.navEvent();
    new Modal(this.$container);
    new Scroll();
  }
}

export default App;
