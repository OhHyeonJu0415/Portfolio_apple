class Scroll {
  constructor() {
    this.render();
  }
  render() {
    const travelObj = document.getElementsByClassName("travel")[0];
    const yoohooObj = document.getElementsByClassName("yoohoo")[0];
    const comingSoon = document.getElementsByClassName("comingSoon")[0];
    const covers = document.getElementsByClassName("projectCover");

    const titles = document.getElementsByClassName("coverTitle");
    const comingTitle = document.getElementsByClassName("comingSoonTitle")[0];

    const arrows = document.getElementsByClassName("arrow");

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

        arrows[0].classList.add("toRightArrow");
      }

      if (H >= travelObj.offsetTop + 320) {
        //fm 프로젝트 타이틀 애니메이션
        titles[1].classList.add("opacityAni");
        arrows[1].classList.add("toRightArrow");
      }

      if (H >= travelObj.offsetTop + 470) {
        //toy 프로젝트 커버,타이틀 애니메이션
        covers[2].classList.add("toyAni");
        titles[2].classList.add("opacityAni");
        arrows[2].classList.add("toRightArrowDelay");
      }

      if (H >= yoohooObj.offsetTop + 100) {
        //doling 프로젝트 서브타이틀 애니메이션
        titles[4].classList.add("opacityAni");
      }

      if (H >= yoohooObj.offsetTop + 230) {
        //yoohoo 프로젝트 타이틀 애니메이션
        titles[7].classList.add("opacityAni");
      }

      if (H >= yoohooObj.offsetTop + 320) {
        //yoohoo 프로젝트 커버 애니메이션
        covers[3].classList.add("yoohooAni");
        arrows[3].classList.add("toRightArrow");
        arrows[4].classList.add("toRightArrow");
      }

      if (H >= comingSoon.offsetTop + 80) {
        //coming soon 타이틀 애니메이션
        comingTitle.classList.add("comingAni");
      }
    });
  }
}

export default Scroll;
