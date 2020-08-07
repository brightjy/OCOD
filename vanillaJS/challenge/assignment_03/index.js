const body = document.querySelector("body");
    clockTitle = body.querySelector("h3");

// You're gonna need this
const NINE_HOURS_MILLISECONDS = 32400000;

function getTime() {
  // Don't delete this.
  const xmasDay = new Date("2020-12-24:00:00:00+0900");
  const now = new Date() + NINE_HOURS_MILLISECONDS;
  const remainTimes = xmasDay - now;
  const days = Math.floor(remainTimes / (1000 * 60 * 60 * 24));
  let hours = Math.floor(
    (remainTimes % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((remainTimes % (1000 * 60)) / (1000 * 60));
  let seconds = Math.floor((remainTimes % (1000 * 60)) / 1000);

  clockTitle.innerText= `${days}d
                    ${hours < 10 ? `0${hours}` : hours}h
                    ${minutes < 10 ? `0${minutes}` : minutes}m
                    ${seconds < 10 ? `0${seconds}` : seconds}s`;
}

function setText() {
  body.innerHTML = "<h1>Time Until Christmas</h1>";
}

function init() {
  setText();
  getTime();
  setInterval(getTime, 1000);
}
init();
