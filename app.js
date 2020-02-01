// Target Vars: Act 1
const head = document.getElementById("head");
const intro = document.querySelector(".intro");
const img = intro.querySelector("img");

// Target Vars: Act 2
const text = intro.querySelector(".text");

// Target Vars: Act 3
const bioImg = document.querySelector(".bImage");
const bioText = document.querySelector(".bText");
const image1 = document.querySelector("#image1");
const image2 = document.querySelector("#image2");
const image3 = document.querySelector("#image3");
const image4 = document.querySelector("#image4");
const image5 = document.querySelector("#image5");

const bGrid = document.querySelector(".bGrid");

// Scroll Vars
let trailRate = 0.1;
let scrollPos = 0;
let scrollTrail = 0;

// FPS vars
let fps = 60;
let fpsCounter = 0;

// Helper Functions
const setOpacity = (element, value) => {
  element.setAttribute(
    "style",
    `opacity: ${value};
     `
  );
};

const act2Vis = value => {
  setOpacity(text, value);
};

const act3Vis = value => {
  setOpacity(bioImg, value);
  // setOpacity(bioText, value);
  setOpacity(image1, value);
  setOpacity(image2, value);
  setOpacity(image3, value);
  setOpacity(image4, value);
  setOpacity(image5, value);
};

const act4Vis = value => {
  setOpacity(image1, value);
  setOpacity(image2, value);
  setOpacity(image3, value);
  setOpacity(image4, value);
  setOpacity(image5, value);
};

const convertToTick = value => 1000 / value;

const fadeIn = (min, max, pos) => {
  let increments = 100 / (max - min);
  return (increments * (pos - min)) / 100;
};

const fadeOut = (min, max, pos) => {
  let increments = 100 / (max - min);
  return 1 - (increments * (pos - min)) / 100;
};

const act1Controller = (min, max, length, pos) => {
  img.setAttribute(
    "style",
    `transform: rotate(${(pos / 15) * 1.5}deg) scale(${1 + pos / 5}, ${1 +
      pos / 5}) translateX(${pos / -2.25}px) !important;
      opacity: ${100 - (pos * 11) / 15};
      filter: brightness(${100 - pos}%);`
  );
  //
  setOpacity(head, `${5 - (pos * 15) / 15}`);
};

const act2Controller = (min, max, length, pos) => {
  let buffer = (max - min - length) / 2;
  if (pos < min) {
    act2Vis(0);
  } else if (pos > min && pos < min + buffer) {
    act2Vis(fadeIn(min, min + buffer, pos));
  } else if (pos > min + buffer && pos < max - buffer) {
    act2Vis(fadeOut(min + buffer, max - buffer, pos));
  } else if (pos > max - buffer && pos < max) {
    act2Vis(0);
  }
};

const act3Controller = (min, max, length, pos) => {
  let buffer = (max - min - length) / 2;
  if (pos < min) {
    act3Vis(0);
  } else if (pos > min && pos < min + buffer) {
    act3Vis(fadeIn(min, min + buffer, pos));
  } else if (pos > min + buffer) {
    act3Vis(1);
  }
};

// Event loop

setInterval(() => {
  scrollPos = window.scrollY;
  scrollTrail += (scrollPos - scrollTrail) * trailRate;

  act1Controller(0, 110, 110, scrollTrail);

  act2Controller(110, 600, 400, scrollTrail);

  act3Controller(600, 1500, 250, scrollTrail);

  fpsCounter += 1;
}, convertToTick(fps));

// Display FPS
setInterval(() => {
  console.log(`FrameRate: ${fpsCounter}`);
  fpsCounter = 0;
}, 1000);
