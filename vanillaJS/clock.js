const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");

function getTime(){
    const date = new Date(); // 오늘 날짜 객체 생성
    const minutes = date.getMinutes(); // 분
    const hours = date.getHours(); // 시간
    const seconds = date.getSeconds(); // 초
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
        minutes < 10 ? `0${minutes}` : minutes}:${
        seconds < 10 ? `0${seconds}` : seconds
    }`;
}

/**
 * 실행 함수
 */
function init(){
    getTime(); // 시간 보여줘
    setInterval(getTime, 1000); // 1초마다 새로 시작
}

init();