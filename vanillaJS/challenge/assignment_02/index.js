
const body = document.querySelector("body");
body.style.backgroundColor = "#9b59b6";

const LARGE_CLASS = "large";
const SMALL_CLASS = "small";

function changeColor(currentWidth) {
  if (currentWidth > 700) {
    body.classList.add(LARGE_CLASS);
  } else {
    body.classList.add(SMALL_CLASS);
  }
}

const eventHandler = {
  getInnerWidth: function getInnerWidth() {
    const currentWidth = window.innerWidth;
    changeColor(currentWidth);
  }
};

function addHello() {
  body.innerHTML = "<h2>Hello!</h2>";
  const h2 = body.querySelector("h2");
  h2.style.color = "#ecf0f1";
}

function init() {
  addHello();
  window.addEventListener("resize", eventHandler.getInnerWidth);
}

init();

