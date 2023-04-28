import ProgressBar from "./ProgressBar.js";

class Modal {
  constructor($container) {
    this.$container = $container;
    this.render();
  }

  projectEvent(
    btn,
    main,
    body,
    modalContainer,
    modalScrim,
    modalPanel,
    panelShow
  ) {
    const progressBar = document.getElementsByClassName("progress-bar");
    for (let i = 0; i < 5; i++) {
      btn[i].addEventListener("click", () => {
        main.classList.add("moveLeft");
        body.classList.add("scroll");
        modalContainer[i].classList.add("visib");
        modalScrim[i].classList.add("visib");
        modalPanel[i].classList.add("modalPanelShow");
        panelShow[i].classList.add("moveRight");
        new ProgressBar(panelShow[i], progressBar[i]);
      });
    }
  }

  closeEvent(
    modalClose,
    main,
    modalContainer,
    modalScrim,
    modalPanel,
    panelShow,
    body
  ) {
    for (let i = 0; i < 5; i++) {
      modalClose[i].addEventListener("click", () => {
        setTimeout(() => modalContainer[i].classList.remove("visib"), 1000);
        setTimeout(() => modalScrim[i].classList.remove("visib"), 1000);
        setTimeout(() => body.classList.remove("scroll"), 1000);

        modalPanel[i].classList.remove("modalPanelShow");
        panelShow[i].classList.remove("moveRight");
        main.classList.remove("moveLeft");
      });
    }
  }

  render() {
    // new ProgressBar(this.$container);
    const btn = document.getElementsByClassName("arrow");
    const modalContainer = document.getElementsByClassName("modalContainer");
    const modalScrim = document.getElementsByClassName("modalScrim");
    const modalPanel = document.getElementsByClassName("modalPanel");
    const panelShow = document.getElementsByClassName("panelShow");
    const main = document.getElementsByClassName("main");
    const body = document.getElementById("container");
    const modalClose = document.getElementsByClassName("modalClose");

    this.projectEvent(
      btn,
      main[0],
      body,
      modalContainer,
      modalScrim,
      modalPanel,
      panelShow
    );

    this.closeEvent(
      modalClose,
      main[0],
      modalContainer,
      modalScrim,
      modalPanel,
      panelShow,
      body
    );
  }
}

export default Modal;
