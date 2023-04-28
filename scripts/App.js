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

  projectEvent() {
    const btn = document.getElementsByClassName("arrow");
    const modalContainer = document.getElementsByClassName("modalContainer");
    const modalScrim = document.getElementsByClassName("modalScrim");
    const modalPanel = document.getElementsByClassName("modalPanel");
    const panelShow = document.getElementsByClassName("panelShow");
    const main = document.getElementsByClassName("main");
    const body = document.getElementById("container");

    for (let i = 0; i < 5; i++) {
      btn[i].addEventListener("click", () => {
        modalContainer[i].classList.add("visib");
        modalScrim[i].classList.add("visib");
        modalPanel[i].classList.add("modalPanelShow");
        panelShow[i].classList.add("moveRight");
        main[0].classList.add("moveLeft");
        body.classList.add("scroll");
      });
    }
  }

  render() {
    this.navEvent();
    this.projectEvent();
  }
}

export default App;
