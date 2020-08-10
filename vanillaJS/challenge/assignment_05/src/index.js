const addTaskForm = document.querySelector(".js-form"),
    taskInput = addTaskForm.querySelector("input"),
    pendingList = document.querySelector(".js-pending"),
    finishedList = document.querySelector(".js-finished");

const PENDING_LS = "pendingTasks";


/* pending tasks, finished tasks 배열 선언 
*  tasks 는 계속 변하니까 const 말고 let 선언
*/

let pendingTasks = [];


/* LocalStorage에 저장하는 함수 */
function savePendingsTask(){
    localStorage.setItem(PENDING_LS, JSON.stringify(pendingTasks));
}

/* 삭제하는 함수 */
function deleteTasks(event) {
    const button = event.target;
    const li = button.parentNode;
    pendingList.removeChild(li);
    const cleanTasks = pendingTasks.filter(function(task){
        return task.id !== parseInt(li.id);
    });
    pendingTasks = cleanTasks;
    savePendingsTask();
}


/* 리스트 보여주는 함수 */
function paintPendingTasks(text) {
    const li = document.createElement("li");
    const deleteButton = document.createElement("button");
    const finishedButton = document.createElement("button");
    const span = document.createElement("span");
    const newId = pendingTasks.length + 1;

    deleteButton.innerHTML = "X";
    deleteButton.addEventListener("click", deleteTasks);

    finishedButton.innerHTML = "V";
    finishedButton.addEventListener("click", addFinishedTasks);

    span.innerText = text;
    li.appendChild(deleteButton);
    li.appendChild(finishedButton);
    li.id = newId;
    pendingList.appendChild(li);
    const taskObj = {
        text: text,
        id: newId
    };

    pendingTasks.push(taskObj);
    savePendingsTask();
}

/* submit 이벤트 핸들러 함수 */
function handleSubmit(event) {
    event.preventDefault();
    const currentValue = taskInput.value;
    paintTasks(currentValue);
    taskInput.value = "";
}

/* Pending 리스트 로드 함수 */
function loadPendingList() {
    
    const pendingTasks = localStorage.getItem(PENDING_LS);

    if (pendingTasks !== null) {
        // LocalStorage에 String 형태로 저장된 값을 JSON으로
        const parsedPendingTasks = JSON.parse(pendingTasks);
        parsedPendingTasks.forEach(function(tasks){
           paintPendingTasks(tasks.text); 
        });

    }

}    

function init() {

    loadPendingList();
    addTaskForm.addEventListener("submit", handleSubmit);

}

init();
