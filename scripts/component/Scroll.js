class Scroll {
  constructor() {
    this.render();
  }
  render() {
    const travelObj = document.getElementsByClassName("travel")[0];
    const yoohooObj = document.getElementsByClassName("yoohoo")[0];
    const covers = document.getElementsByClassName("projectCover");

    window.addEventListener("scroll", () => {
      let H = window.scrollY + window.innerHeight; //현재 스크롤 하단 y좌표

      if (H >= travelObj.offsetTop + 160) {
        //travel, fm 프로젝트 커버 애니메이션
        covers[0].classList.add("travelAni");
        covers[1].classList.add("fmAni");
      }

      if (H >= travelObj.offsetTop + 470) {
        //toy 프로젝트 커버 애니메이션
        covers[2].classList.add("toyAni");
      }

      if (H >= yoohooObj.offsetTop + 140) {
        //yoohoo 프로젝트 커버 애니메이션
        covers[3].classList.add("yoohooAni");
      }
    });
  }
}

export default Scroll;
