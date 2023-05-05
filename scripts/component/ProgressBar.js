class ProgressBar {
  constructor($container, $bar) {
    this.$container = $container;
    this.$bar = $bar;
    this.render();
  }

  // setProgress() {
  //   let wrap = this.$container;
  //   let bar = this.$bar;
  //   wrap.addEventListener("scroll", function () {
  //     let scrollLeft = wrap.scrollLeft;
  //     let scrollWidth = wrap.scrollWidth - wrap.clientWidth;
  //     let percentage = scrollLeft / scrollWidth;
  //     bar.style.background = `linear-gradient(
  //       90deg,
  //       white,
  //       white calc(${percentage} * 100%),
  //       rgba(255, 255, 255, 0.4) calc(${percentage} * 100%),
  //       rgba(255, 255, 255, 0.4)
  //     )`;
  //   });
  // }

  setMouseWheel() {
    let bar = this.$bar;
    let wrap = this.$container;
    let percentage = wrap.scrollLeft;
    wrap.addEventListener("wheel", function (event) {
      event.preventDefault();
      if (event.deltaY < 0) {
        //프로그레스바 왼쪽으로 이동
        if (percentage > 0) percentage -= 0.1;
      } else {
        //프로그레스바 오른쪽으로 이동
        if (percentage < 1) percentage += 0.1;
      }
      bar.style.background = `linear-gradient(
          90deg,
          white,
          white calc(${percentage} * 100%),
          rgba(255, 255, 255, 0.4) calc(${percentage} * 100%),
          rgba(255, 255, 255, 0.4)
        )`;
      wrap.scrollLeft = (wrap.scrollWidth - wrap.clientWidth) * percentage;
    });
  }

  render() {
    this.setMouseWheel();
    // this.setProgress();
  }
}

export default ProgressBar;
