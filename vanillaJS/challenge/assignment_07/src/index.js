const input = document.querySelector("input"),
    tmp = document.querySelector("tmp"),
    number = document.querySelector(".js-number"),
    number_7 = document.getElementById("7"),
    number_8 = document.getElementById("8"),
    number_9 = document.getElementById("9"),
    number_4 = document.getElementById("4"),
    number_5 = document.getElementById("5"),
    number_6 = document.getElementById("6"),
    number_1 = document.getElementById("1"),
    number_2 = document.getElementById("2"),
    number_3 = document.getElementById("3"),
    number_0 = document.getElementById("0"),
    reset = document.querySelector(".js-reset"),
    plus = document.querySelector(".js-plus"),
    minus = document.querySelector(".js-minus"),
    multiple = document.querySelector(".js-multiple"),
    divide = document.querySelector(".js-divide"),
    result = document.querySelector(".js-result");

let num1 = "";
let num2 = "";
let intNum = 0;
let temp = 0;
let operator = "";
let calcResult = 0;

function pressBtn9(){
    num = "9";
    intNum = parseInt(num, 10);
    result.innerHTML = num;
}

function pressBtn8(){
    num = "8";
    intNum = parseInt(num, 10);
    result.innerHTML = num;
}

function pressBtn7(){
    num = "7";
    intNum = parseInt(num, 10);
    result.innerHTML = num;
}

function pressBtn6(){
    if (operator === "") {
        num1 = "6";
        intNum = parseInt(num1, 10);
        result.innerHTML = num1;
    } else {
        num2 = "6";
        initNum = parseInt(num2, 10);
        result.innerHTML = num2;
    }
}

function pressBtn5(){
    if (operator === "") {
        num1 = "5";
        intNum = parseInt(num1, 10);
        result.innerHTML = num1;
    } else {
        num2 = "5";
        initNum = parseInt(num2, 10);
        result.innerHTML = num2;
    }
}

function pressBtn4(){
    num = "4";
    intNum = parseInt(num, 10);
    result.innerHTML = num;
}

function pressBtn3(){
    num = "3";
    intNum = parseInt(num, 10);
    result.innerHTML = num;
}

function pressBtn2(){
    num = "2";
    intNum = parseInt(num, 10);
    result.innerHTML = num;
}

function pressBtn1(){
    num = "1";
    intNum = parseInt(num,10);
    result.innerHTML = num;
}

function pressBtn0(){
    num = "0";
    intNum = parseInt(num, 10);
}

function pressDvide(){
    operator = "/";
    result.innerHTML = num + " " + operator;
    temp /= intNum;
    
}

function pressMultiple(){
    operator = "*";
    result.innerHTML = num + " " + operator;
    temp *= intNum;
}

function pressMinus(){
    operator = "-";
    result.innerHTML = num + " " + operator;
    temp -= intNum;
}

function pressPlus() {
    operator = "+";
    result.innerHTML = num1 + " " + operator + num2;
    temp += intNum;
}

function pressReset() {
    num1 = "";
    num2 = "";
    operator = "";
    calcResult = "";
    result.innerHTML = "0";
}

function pressResult() {
    calcResult = temp;
    result.innerHTML = calcResult;
}

function init(){

    number_0.addEventListener("click", pressBtn0);
    number_1.addEventListener("click", pressBtn1);
    number_2.addEventListener("click", pressBtn2);
    number_3.addEventListener("click", pressBtn3);
    number_4.addEventListener("click", pressBtn4);
    number_5.addEventListener("click", pressBtn5);
    number_6.addEventListener("click", pressBtn6);
    number_7.addEventListener("click", pressBtn7);
    number_8.addEventListener("click", pressBtn8);
    number_9.addEventListener("click", pressBtn9);
    reset.addEventListener("click", pressReset);
    plus.addEventListener("click", pressPlus);
    minus.addEventListener("click", pressMinus);
    multiple.addEventListener("click", pressMultiple);
    divide.addEventListener("click", pressDvide);
    result.addEventListener("click", pressResult);

}

init();