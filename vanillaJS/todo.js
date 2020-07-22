/* 
투두 리스트 
2020.07.21
*/

const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

/* 
toDo 리스트는 배열로 선언 
삭제 후 새로운 toDo를 다시 셋팅해줘야 하니까
const -> let
*/
let toDos = [];

/*delteToDo 함수: toDo 지우는 함수*/
function deleteToDo(event){
    const btn = event.target; // 누른 버튼 값
    const li = btn.parentNode; // 누른 버튼의 li 값
    toDoList.removeChild(li); // 누른 버튼의 li 지우기
    const cleanToDos = toDos.filter(function(toDo){ // 남긴다
        return toDo.id !== parseInt(li.id); // toDo.id 와 li.id가 같지 않은 것 만
    });
    toDos = cleanToDos; // 남겨진 toDos로 다시 셋팅
    saveToDos(); // 다시 저장
}

/* localStorage에 저장하는 함수*/
function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos)); // localStorage에는 string으로 저장해야 한다. JSON -> JSON.stringify
}

/* 보여주는(?) 함수 */
function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    
    delBtn.innerHTML="V";
    delBtn.addEventListener("click", deleteToDo); // delBtn을 클릭하면, deleteToDo 함수 호출

    span.innerText = text; // span에 json 데이터의 text 넣어주기
    li.appendChild(delBtn); // li 밑에 버튼만들고
    li.appendChild(span); // 버튼 뒤 하나 띄고
    li.id = newId; // li에는 아이디를 주고
    toDoList.appendChild(li); // 투두리스트에 li 추가
    const toDoObj = { // 할일은 json 데이터로
        text: text,
        id: newId 
    };
    toDos.push(toDoObj); // toDos 배열에 데이터 넣기
    saveToDos(); // 저장하기
}

/* submit 이벤트 핸들러 함수*/
function handleSubmit(event){
    event.preventDefault(); // submit 안되게 하고
    const currentValue = toDoInput.value; // input value 받아와서
    paintToDo(currentValue); // 받아온 값을 매개변수로 보여주는 함수 호출
    toDoInput.value = ""; // input form value는 다시 초기화
}

/* localStorage에서 투두리스트 가져오는 함수 */
function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS); // localStorage에서 TODOS_LS 가져오기
    if(loadedToDos !== null){ // 있으면,
        const parsedToDos = JSON.parse(loadedToDos); // string으로 저장된 투두리스트를 다시 json으로
        parsedToDos.forEach(function(toDo){ // 각각의 데이터에 대해 'forEach'
            paintToDo(toDo.text); // 보여주기 함수 호출
        });
    }
}

/* 처음에 바로 보여주는 함수 */
function init(){
    loadToDos(); // 투두리스트 보여주기
    toDoForm.addEventListener("submit", handleSubmit); // submit 이벤트 핸들링하기
}

/* 페이지 로딩되면 시~작 */
init();
