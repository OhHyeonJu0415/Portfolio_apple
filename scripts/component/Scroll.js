class Scroll {
  constructor() {
    this.render();
  }
  render() {
    const travelObj = document.getElementsByClassName("travel")[0];
    const yoohooObj = document.getElementsByClassName("yoohoo")[0];
    const covers = document.getElementsByClassName("projectCover");

    const titles = document.getElementsByClassName("coverTitle");

    const travleTitle = document.getElementById("travelTitle");

    window.addEventListener("scroll", () => {
      let H = window.scrollY + window.innerHeight; //현재 스크롤 하단 y좌표

      if (H >= travelObj.offsetTop + 120) {
        //travel 프로젝트 타이틀 애니메이션
        titles[0].classList.add("opacityAni");
      }

      if (H >= travelObj.offsetTop + 180) {
        //travel, fm 프로젝트 커버 애니메이션
        covers[0].classList.add("travelAni");
        covers[1].classList.add("fmAni");
      }

      if (H >= travelObj.offsetTop + 320) {
        //fm 프로젝트 타이틀 애니메이션
        titles[1].classList.add("opacityAni");
      }

      if (H >= travelObj.offsetTop + 470) {
        //toy 프로젝트 커버,타이틀 애니메이션
        covers[2].classList.add("toyAni");
        titles[2].classList.add("opacityAni");
      }

      if (H >= yoohooObj.offsetTop + 230) {
        //yoohoo 프로젝트 타이틀 애니메이션
        titles[7].classList.add("opacityAni");
      }

      if (H >= yoohooObj.offsetTop + 320) {
        //yoohoo 프로젝트 커버 애니메이션
        covers[3].classList.add("yoohooAni");
      }
    });
  }
}

export default Scroll;
