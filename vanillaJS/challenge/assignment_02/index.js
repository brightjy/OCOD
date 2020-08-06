
const body = document.querySelector("body");

const DEFAULT_CLASS = "default";
const LARGE_CLASS = "large";
const SMALL_CLASS = "small";

function changeColor(currentWidth) {
  if (currentWidth > 700) {
      if (body.classList.contains(SMALL_CLASS)) {
          body.classList.remove(SMALL_CLASS);
      } else {
          body.classList.remove(DEFAULT_CLASS);
      }
      body.classList.add(LARGE_CLASS);
  } else if (currentWidth < 500) {
      if (body.classList.contains(LARGE_CLASS)) {
          body.classList.remove(LARGE_CLASS);
      } else {
          body.classList.remove(DEFAULT_CLASS);
      } 
      body.classList.add(SMALL_CLASS);
  } else {
      if (body.classList.contains(LARGE_CLASS)) {
          body.classList.remove(LARGE_CLASS);  
      } else {
          body.classList.remove(SMALL_CLASS);
      }
      body.classList.add(DEFAULT_CLASS);  
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

function defaultSetting(){
    body.classList.add(DEFAULT_CLASS);
    addHello();
}

function init() {
  defaultSetting();
  window.addEventListener("resize", eventHandler.getInnerWidth);
}

init();

