const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerText = "❌";
    const span = document.createElement("span");
    span.innerText = text;  // 입력한 값을 span에 넣는다
    li.appendChild(delBtn);
    li.appendChild(span);
    toDoList.appendChild(li);

}

function handleToDo(e){
    e.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value ='';
}

function loadToDos(){
    const toDos = localStorage.getItem(TODOS_LS);
    if(toDos !== null){
        
    } 
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleToDo)
}

init();