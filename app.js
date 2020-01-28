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
    bioImg.setAttribute(
      "style",
      `opacity: ${(-560 + scrollTrail) * 0.02};
       `
    );
    bioText.setAttribute(
      "style",
      `opacity: ${(-560 + scrollTrail) * 0.01};
       `
    );
    image1.setAttribute(
      "style",
      `opacity: ${(-560 + scrollTrail) * 0.005};
       `
    );
    image2.setAttribute(
      "style",
      `opacity: ${(-575 + scrollTrail) * 0.005};
       `
    );
    image3.setAttribute(
      "style",
      `opacity: ${(-590 + scrollTrail) * 0.005};
       `
    );
    image4.setAttribute(
      "style",
      `opacity: ${(-605 + scrollTrail) * 0.005};
       `
    );
    image5.setAttribute(
      "style",
      `opacity: ${(-615 + scrollTrail) * 0.005};
       `
    );
  } else if (scrollTrail < 560) {
    bioImg.setAttribute(
      "style",
      `opacity: 0;
       `
    );
    bioText.setAttribute(
      "style",
      `opacity: 0;
       `
    );
    image1.setAttribute(
      "style",
      `opacity: 0;
       `
    );
    image2.setAttribute(
      "style",
      `opacity: 0;
       `
    );
    image3.setAttribute(
      "style",
      `opacity: 0;
       `
    );
    image4.setAttribute(
      "style",
      `opacity: 0;
       `
    );
    image5.setAttribute(
      "style",
      `opacity: 0;
       `
    );
  } else if (scrollTrail > 815) {
    bioImg.setAttribute(
      "style",
      `opacity: 1;
       `
    );
    bioText.setAttribute(
      "style",
      `opacity: 1;
       `
    );
    image1.setAttribute(
      "style",
      `opacity: 1;
       `
    );
    image2.setAttribute(
      "style",
      `opacity: 1;
       `
    );
    image3.setAttribute(
      "style",
      `opacity: 1;
       `
    );
    image4.setAttribute(
      "style",
      `opacity: 1;
       `
    );
    image5.setAttribute(
      "style",
      `opacity: 1;
       `
    );
  }

  // Act 3: Bio Load
}, 15);
