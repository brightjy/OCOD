
const slider = document.querySelector(".js-slider"),
output = document.querySelector(".js-range"),
form = document.querySelector(".js-form"),
input = form.querySelector("input"),
compareValue = document.querySelector(".js-compareValue"),
result = document.querySelector(".js-result");

function getMachineNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
}

function paintResult(currentValue, maxValue) {
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  const machineNum = getMachineNum(0, maxValue);
  const youChose = "You chose : " + currentValue,
    machineChose = ", the machine Chose : " + machineNum;
  span1.innerText = youChose + machineChose;
  compareValue.appendChild(span1);

  if (currentValue > machineNum) {

      span2.innerText = "You Win!";
      result.appendChild(span2);
  } else {
      span2.innerText = "You Lose!";
      result.appendChild(span2);
  }

}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    const maxValue = output.innerHTML;

    if (currentValue > maxValue || currentValue < 0) {
        alert("You should choose 0 ~ " + maxValue);
        input.focus();
        input.value = "";
        return false;
    }

    paintResult(currentValue, maxValue);
    input.value = "";


}

function init() {
 
  input.focus();
  output.innerHTML = slider.value;

  slider.oninput = function () {
    output.innerHTML = this.value;
  };

  form.addEventListener("submit", handleSubmit);
}

init();