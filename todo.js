// Make initial variables
const toDoForm = document.querySelector(".js-toDoForm"),
toDoInput = toDoForm.querySelector("input"),
toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';
function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos!==null) {
        const paresdToDos = JSON.parse(loadedToDos); //string >> object
        // Take out each element from array and execute function.
        paresdToDos.forEach(function(todo){
            paintToDo(todo.text);
        })
    }
}
let toDos = [];
function deleteToDo(event) {
    const btn = event.target // Find "clicked" element
    const li = btn.parentNode;
    toDoList.removeChild(li);
    toDos = toDos.filter(function(todo){
        return todo.id !== parseInt(li.id);
    });
    saveToDos();
}
function saveToDos(){
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos)) // Save the data in string. Object >> string
}
// Make a list on screen and save to localStorage.
function paintToDo(text){
    // Create tags
    const li = document.createElement("li"),
    span = document.createElement("span"),
    newId = toDos.length + 1
    span.innerText = text+" "; // Set span's innerText
    // li << button , span
    li.appendChild(span);
    li.id = newId;
    // ui << li
    toDoList.appendChild(li)
    const toDoObj={
        text: text,
        id:newId
    };
    toDos.push(toDoObj);
    saveToDos()
    // make delete button 1.5s
    li.addEventListener("mouseenter",function(event){
        if (li.querySelector("button")===null) {
            const delBtn = document.createElement("button")
            li.appendChild(delBtn);
            delBtn.innerText = "❌"; // Let button's value
            delBtn.addEventListener("click",deleteToDo);
            setTimeout(function(){
                li.removeChild(delBtn);
            },1500)
        }
    }) 
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = ""

}
function init() {
    loadToDos();
    toDoForm.addEventListener("submit",handleSubmit)
}
init()