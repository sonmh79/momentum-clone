const form = document.querySelector(".form"); //querySelctor -> class(.), form(#), tags ...
const input = form.querySelector(".input__name");  // Make variables using father(form)

function loadName() {
    const currentUser = localStorage.getItem("currentUser") //Get item("currentUser") from localStorage
    if (currentUser === null) { //Ask if "currentUser" is in the localStorage.
        askForName()
    } else {     
        const time = document.querySelector("h1")
        if (time.innerText[0]+time.innerText[1] >= 0) {
            form.innerText = `Time to Sleep! ${currentUser}` // Maintain the information which saved before.
        } 
        if (time.innerText[0]+time.innerText[1] >= 6) {
            form.innerText = `Good morning! ${currentUser}`
        } 
        if (time.innerText[0]+time.innerText[1] >= 12) {
            form.innerText = `Good afternoon! ${currentUser}`
        } 
        if (time.innerText[0]+time.innerText[1] >= 18) {
            form.innerText = `Good evening! ${currentUser}`
        }
    }
}
function askForName() {
    // addEventListener -> if form "submit" a data, excute Function(Handle)
    form.addEventListener("submit",Handle)   
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