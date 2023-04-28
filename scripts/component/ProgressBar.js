class ProgressBar {
  constructor($container, $bar) {
    this.$container = $container;
    this.$bar = $bar;
    this.render();
  }

  setProgress() {
    let wrap = this.$container;
    let bar = this.$bar;
    wrap.addEventListener("scroll", function () {
      let scrollLeft = wrap.scrollLeft;
      let scrollWidth = wrap.scrollWidth - wrap.clientWidth;
      let percentage = scrollLeft / scrollWidth;
      bar.style.background = `linear-gradient(
        90deg,
        white,
        white calc(${percentage} * 100%),
        rgba(255, 255, 255, 0.4) calc(${percentage} * 100%),
        rgba(255, 255, 255, 0.4)
      )`;
    });
  }

  render() {
    this.setProgress();
  }
}

export default ProgressBar;
