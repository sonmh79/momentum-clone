const form = document.querySelector(".form"); //querySelctor -> class(.), form(#), tags ...
const input = form.querySelector(".input");  // Make variables using father(form)

function loadName() {
    const currentUser = localStorage.getItem("currentUser") //Get item("currentUser") from localStorage
    if (currentUser === null) { //Ask if "currentUser" is in the localStorage.
        askForName()
    } else {     
        form.innerText = `Greeting! ${currentUser}` // Maintain the information which saved before.
    }
}
function askForName() {
    form.addEventListener("submit",Handle) // addEventListener -> if form "submit" a data, excute Function(Handle)
}
function Handle(event) {
    event.preventDefault(); // Prevent default event
    input.classList.add("block") // Add class
    const inputValue = input.value  // Assign the value from input.
    greeting(inputValue)
    saveName(inputValue)
}

function greeting(text){
    form.innerText = `Greeting! ${text}`
}
function saveName(text) {
    localStorage.setItem("currentUser",text) // Save to lacalStorage, currentUser : text
}

function init(){
    loadName()
}
init()