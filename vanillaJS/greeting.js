const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser", 
    SHOWING_CN = "showing";

/*이름을 저장하는 함수*/
function saveName(text){
    localStorage.setItem(USER_LS, text); // 매개변수 값을 localStorage에 USER_LS 로 저장
}

/* submit 이벤트 핸들러 함수*/ 
function handleSubmit(event){
    event.preventDefault(); // sumbit 이벤트 금지
    const currentValue = input.value; // input 값 가져오기
    paintGreeting(currentValue); // input 값을 매개변수로 환영 인사를 보여주는 함수 호출
    saveName(currentValue); // input 값을 매개변수로 이름을 저장하는 함수 호출
}

/*이름을 묻는 함수*/
function askForName(){
    form.classList.add(SHOWING_CN); // 폼 보이게 하고,
    form.addEventListener("submit", handleSubmit); // submit 이벤트 발생하면, submit 이벤트 핸들러 함수 호출해라
}

/* 환영 인사를 보여주는 함수 */
function paintGreeting(text){
    form.classList.remove(SHOWING_CN); // class="js-form form showing" -> class="js-form form" -> .form{ display: none; } 폼 없애고
    greeting.classList.add(SHOWING_CN); // class="js-greetings" -> class="js-greetings showing" -> .showing{ display: block; } 인사 보이게 한다.
    greeting.innerText = `Hello ${text}`; // <h4 class="js-greetins"></h4> 사이에 `Hello ${text}` 넣는다.
}

/* 이름을 로딩하는 함수 */
function loadName(){
    const currentUser = localStorage.getItem(USER_LS); // localStage에서 USER_LS을 가져온다.
    if(currentUser === null){ // 저장된 USER_LS가 없으면,
        askForName(); // 이름을 묻는 함수를 호출
    }else{ // 저장된 USER_LS가 있으면,
        paintGreeting(currentUser); // 환영 인사를 보여주는 함수를 호출
    }
}

/* 실행 함수 */
function init(){
    loadName();
}

/* 실행 */
init();


