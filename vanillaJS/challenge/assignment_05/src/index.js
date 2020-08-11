const toDoForm = document.querySelector(".js-form"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList"),
    finishList = document.querySelector(".js-doneList");

const TODOS_LS = "toDos";
const DONES_LS = "dones";

let toDos = [];
let dones = [];

function deleteToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo) {
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintDones(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const doneBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;

    delBtn.innerHTML = "X";
    delBtn.addEventListener("click", deleteDones);

    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(doneBtn);
    li.appendChild(span);
    li.id = newId;
    finishList.appendChild(li);
    const done = {
        text: text,
        id: newId
    };
    dones.push(done);
    saveDones();

}

function doneToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo) {
        return toDo.id !== parseInt(li.id);
    });
    const donedToDos = toDos.filter(function(toDo) {
        return toDo.id == parseInt(li.id);
    });
    toDos = cleanToDos;
    dones = donedToDos;
    paintDones(dones.text);
    saveToDos();
}

function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const doneBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;

    delBtn.innerHTML = "X";
    delBtn.addEventListener("click", deleteToDo);

    doneBtn.innerHTML = "V";
    doneBtn.addEventListener("click", doneToDo);

    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(doneBtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);
    const toDo = {
        text: text,
        id: newId
    };
    toDos.push(toDo);
    saveToDos();

}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        });
    }
}

function loadDones() {
    const loadedDones = localStorage.getItem(DONES_LS);
    if (loadDones !== null) {
        const parsedDones = JSON.parse(loadedDones);
        parsedDones.forEach(function(done) {
            paintDones(dones.text);
        });
    }
}

function init() {

    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);

}

init();
