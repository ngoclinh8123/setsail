const dimesion = {
  mapWidth: "-460px",
  oldHeight: "296px",
  newHeight: "347px",
  pointStartRenderNumber: 3310,
  pointEndRenderNumber: 3340,
};

function showSearchModal() {
  const searchIcon = document.querySelector(".tool__search > i");
  const closeSearchIcon = document.querySelector(".modal__search > i");
  const searchModal = document.querySelector(".modal__search");

  searchIcon.onclick = function () {
    searchModal.classList.add("active");
  };

  closeSearchIcon.onclick = function () {
    searchModal.classList.remove("active");
  };
}

function showMap(dimesion) {
  const mapIcon = document.querySelector(".tool__map i");
  const closeMap = document.querySelector(".map__close-icon i");
  const map = document.querySelector(".map__container");
  mapIcon.onclick = function () {
    // map.classList.add("active");
    map.style.right = 0;
  };
  closeMap.onclick = function () {
    map.style.right = dimesion.mapWidth;
    // map.classList.remove("active");
  };
}

function headerFloat(height) {
  const heading = document.querySelector(".heading");
  const EleList = document.querySelector(".subnav__list--elements-wrap");
  const body = document.querySelector("#body");
  let widthBrowser = document.documentElement.offsetWidth;

  // if (widthBrowser < 1024) {
  //   body.style.marginTop = 0;
  // } else {
  //   body.style.marginTop = "80px";
  // }

  window.onscroll = function () {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;
    if (scrollTop > height) {
      heading.style.top = 0;
      EleList.style.top = "80px";
    } else {
      heading.style.top = "-80px";
      EleList.style.top = `calc(-${scrollTop}px + 80px)`;
    }
    // else if (scrollTop < height && scrollTop > 80) {
    //   heading.style.top = "-80px";
    //   EleList.style.top = `calc(-document.querySelector{scrollTop}px + 80px)`;
    // } else {
    //   heading.style.top = "0px";
    //   EleList.style.top = "80px";
    //   // body.style.marginTop = "80px";
    // }

    if (
      scrollTop > dimesion.pointStartRenderNumber &&
      scrollTop < dimesion.pointEndRenderNumber
    ) {
      renderNumberIncrease();
    }
    // const newWidthBrowser = document.documentElement.offsetWidth;
    // if (newWidthBrowser < 1024) {
    //   body.style.marginTop = 0;
    // }
    const scrollTopBtn = document.querySelector(".btn-scroll-top");
    if (scrollTop > 800) {
      scrollTopBtn.style.display = "flex";
    } else {
      scrollTopBtn.style.display = "none";
    }
  };
}

function autoSlide() {
  const slide1 = document.querySelector(".slide-wrap--1");
  const slide2 = document.querySelector(".slide-wrap--2");
  function selectSlide() {
    slide1.classList.toggle("active");
    slide2.classList.toggle("active");
  }
  setInterval(selectSlide, 4000);
  function handleSlide() {
    const prevBtn = document.querySelector(".slide__buttton--prev");
    const nextBtn = document.querySelector(".slide__buttton--next");

    prevBtn.onclick = selectSlide;
    nextBtn.onclick = selectSlide;
  }
  handleSlide();
}

function renderNumberIncrease() {
  function renderCount(html, max) {
    function createCounter() {
      let num = 0;
      function increase() {
        return ++num;
      }
      return increase;
    }

    let a = createCounter();
    setInterval(function () {
      let text = a();
      if (text <= max) {
        html.innerText = text;
      }
    }, 5);
  }

  const numberCount1 = document.querySelector(".number__number.number--1");
  const numberCount2 = document.querySelector(".number__number.number--2");
  const numberCount3 = document.querySelector(".number__number.number--3");
  const numberCount4 = document.querySelector(".number__number.number--4");
  renderCount(numberCount1, 452);
  renderCount(numberCount2, 120);
  renderCount(numberCount3, 283);
  renderCount(numberCount4, 197);
}

function subListOpen(dimesion) {
  const openBtn = document.querySelector(".icon--ade");
  const closeBtn = document.querySelector(".icon--rme");
  const menu = document.querySelector(".heading2__nav-list-wrap");
  const heading2 = document.querySelector(".heading--sub");
  const body = document.querySelector("#body");
  openBtn.onclick = function () {
    menu.style.height = dimesion.oldHeight;
    openBtn.classList.remove("active");
    closeBtn.classList.add("active");

    // heading fixed

    let isOpen = closeBtn.classList.contains("active");
    if (isOpen) {
      heading2.style.position = "fixed";
      heading2.style.top = 0;

      // body.style.marginTop = "69px";
    } else {
      heading2.style.top = "-69px";
      // heading2.style.position = "sticky";
    }
  };

  closeBtn.onclick = function () {
    menu.style.height = "0px";
    closeBtn.classList.remove("active");
    openBtn.classList.add("active");

    let isOpen = closeBtn.classList.contains("active");
    if (!isOpen) {
      heading2.style.position = "relative";
      body.style.marginTop = "0px";
    }
  };

  const navItems = document.querySelectorAll(".heading2__nav-item-wrap");

  Array.from(navItems).forEach(function (navItem) {
    navItem.onclick = function (e) {
      const subList = navItem
        .closest(".heading2__nav-item")
        .querySelector(".heading2__subnav-list");
      const oldActive = document.querySelector(".heading2__subnav-list.active");
      if (oldActive) {
        const oldItemActive = oldActive.closest(".heading2__nav-item");
        const currentActive = navItem.closest(".heading2__nav-item");
        const oldIndex = oldItemActive.getAttribute("data-index");
        const newIndex = currentActive.getAttribute("data-index");

        if (newIndex === oldIndex) {
          subList.classList.remove("active"); //---------------------------
          navItem.querySelector(".sub__icon--right").classList.add("active");
          navItem.querySelector(".sub__icon--down").classList.remove("active");
        } else {
          oldItemActive
            .querySelector(".heading2__nav-item-wrap .sub__icon--right")
            .classList.add("active");
          oldItemActive
            .querySelector(".heading2__nav-item-wrap .sub__icon--down")
            .classList.remove("active");

          oldActive.classList.remove("active");

          subList.classList.add("active"); //---------------------------
          navItem.querySelector(".sub__icon--right").classList.remove("active");
          navItem.querySelector(".sub__icon--down").classList.add("active");
        }
      } else {
        subList.classList.add("active");
        navItem.querySelector(".sub__icon--right").classList.remove("active");
        navItem.querySelector(".sub__icon--down").classList.add("active");
      }
      if (subList.classList.contains("active")) {
        const subItems = subList.querySelectorAll(".heading2__subnav-item");

        Array.from(subItems).forEach(function (subItem) {
          subItem.onclick = function () {
            const sub2ItemNav = subItem.closest(".heading2__nav2-item");
            if (sub2ItemNav) {
              const sub2List = sub2ItemNav.querySelector(
                ".heading2__subnav2-list"
              );
              const old2Active = document.querySelector(
                ".heading2__subnav2-list.active"
              );
              if (old2Active) {
                old2Active.classList.remove("active");
                old2Active
                  .closest(".heading2__nav2-item")
                  .querySelector(".heading2__subnav-item .sub__icon--right")
                  .classList.add("active");
                old2Active
                  .closest(".heading2__nav2-item")
                  .querySelector(".heading2__subnav-item .sub__icon--down")
                  .classList.remove("active");
                sub2List.classList.add("active");

                subItem
                  .querySelector(".sub__icon--right")
                  .classList.remove("active");
                subItem
                  .querySelector(".sub__icon--down")
                  .classList.add("active");
              } else {
                sub2List.classList.add("active");
                subItem
                  .querySelector(".sub__icon--right")
                  .classList.remove("active");
                subItem
                  .querySelector(".sub__icon--down")
                  .classList.add("active");
              }
            }
          };
        });
      }

      let hasAction = Array.from(navItems).some(function (navItem) {
        return navItem
          .closest(".heading2__nav-item")
          .querySelector(".heading2__subnav-list.active");
      });

      if (hasAction) {
        menu.style.height = dimesion.newHeight;
      } else {
        menu.style.height = dimesion.oldHeight;
      }
    };
  });

  (function () {
    let oldOffset = 0;
    document.onscroll = function () {
      const st = document.documentElement.scrollTop || window.screenY;
      if (st > oldOffset) {
        let isOpen = closeBtn.classList.contains("active");
        if (isOpen) {
          heading2.style.top = "0px";
        } else {
          heading2.style.top = "-69px";
        }
      } else {
        heading2.style.position = "fixed";
        heading2.style.top = "0px";
      }
      oldOffset = st <= 0 ? 0 : st;
    };
  })();
}

function showRegister() {
  const regBtn = document.querySelector(".heading--sub-register i");
  const regForm = document.querySelector(".reg__container");

  regBtn.onclick = function () {
    regForm.classList.add("active");
  };
  regForm.onclick = function (e) {
    const regFormWrap = e.target.getAttribute("data");
    if (regFormWrap == 0) {
      regForm.classList.remove("active");
    }
  };
}

function openProductList() {
  const openBtn = document.querySelector(".pr__btn-img");
  const prList = document.querySelector(".pr-container");
  const prFoot = document.querySelector(".pr__foot");
  const cartBtn = document.querySelector(".pr__btn--cart");
  const prBtn = document.querySelector(".pr__btn--open");
  const closeBtn = document.querySelector(".pr__btn--open i");
  openBtn.onclick = function () {
    prBtn.classList.add("active");
    prList.style.right = 0;
    prBtn.style.right = "209px";
    cartBtn.style.right = "209px";
    prFoot.style.right = 0;
  };
  closeBtn.onclick = function () {
    prList.style.right = "-282px";
    prBtn.classList.remove("active");
    prBtn.style.right = 0;
    cartBtn.style.right = 0;
    prFoot.style.right = "-282px";
  };
}

showSearchModal();
showMap(dimesion);
headerFloat(800);
autoSlide();
subListOpen(dimesion);
showRegister();
openProductList();

// slick
$(document).ready(function () {
  $(".ticket__list").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  });
  $(".author__list").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  });
  $(".mb__img").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  });
});
