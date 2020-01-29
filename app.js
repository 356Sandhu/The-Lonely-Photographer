const intro = document.querySelector(".intro");
const img = intro.querySelector("img");
const text = intro.querySelector(".text");
const body = document.querySelector("body");

// Bio
const bioImg = document.querySelector(".bImage");
const bioText = document.querySelector(".bText");
const image1 = document.querySelector("#image1");
const image2 = document.querySelector("#image2");
const image3 = document.querySelector("#image3");
const image4 = document.querySelector("#image4");
const image5 = document.querySelector("#image5");

// Camera Zoom Animation
let accelAmount = 0.1;
let scrollPos = 0;
let scrollTrail = 0;

const setOpacity = (element, value) => {
  element.setAttribute(
    "style",
    `opacity: ${value};
     `
  );
};

setInterval(() => {
  scrollPos = window.scrollY;
  scrollTrail += (scrollPos - scrollTrail) * accelAmount;
  console.log(`The scrollTrail is currently: ${scrollTrail}`);

  //  Act 1 : Camera Zoom In
  img.setAttribute(
    "style",
    `transform: rotate(${(scrollTrail / 15) * 1.5}deg) scale(${1 +
      scrollTrail / 15}, ${1 + scrollTrail / 15}) !important;
      opacity: ${100 - (scrollTrail * 11) / 15};
      filter: brightness(${100 - scrollTrail}%);`
  );

  // Act 2:
  if (scrollTrail > 150 && 360 > scrollTrail) {
    text.setAttribute(
      "style",
      `opacity: ${(-150 + scrollTrail) * 0.01};
       `
    );
  } else if (scrollTrail < 150) {
    text.setAttribute(
      "style",
      `opacity: 0;
       `
    );
  } else if (scrollTrail > 360 && 550 > scrollTrail) {
    let textAway = scrollTrail - 400;
    text.setAttribute(
      "style",
      `opacity: ${1 - textAway / 100};
       `
    );
  }

  // Act 3 Biography
  else if (scrollTrail > 560 && scrollTrail < 820) {
    setOpacity(bioImg, (-560 + scrollTrail) * 0.02);
    setOpacity(bioText, (-560 + scrollTrail) * 0.01);
    setOpacity(image1, (-560 + scrollTrail) * 0.005);
    setOpacity(image2, (-575 + scrollTrail) * 0.005);
    setOpacity(image3, (-590 + scrollTrail) * 0.005);
    setOpacity(image4, (-605 + scrollTrail) * 0.005);
    setOpacity(image5, (-615 + scrollTrail) * 0.005);
  } else if (scrollTrail < 560) {
    setOpacity(bioImg, 0);
    setOpacity(bioText, 0);
    setOpacity(image1, 0);
    setOpacity(image2, 0);
    setOpacity(image3, 0);
    setOpacity(image4, 0);
    setOpacity(image5, 0);
  } else if (scrollTrail > 815) {
    setOpacity(bioImg, 1);
    setOpacity(bioText, 1);
    setOpacity(image1, 1);
    setOpacity(image2, 1);
    setOpacity(image3, 1);
    setOpacity(image4, 1);
    setOpacity(image5, 1);
  }

  // Act 3: Bio Load
}, 15);
