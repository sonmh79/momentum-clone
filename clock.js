const clockContainer = document.querySelector(".js-clock"),
clockTitle = clockContainer.querySelector("h1");
const dateTitle = clockContainer.querySelector("h2")

function getTime(){
    const date = new Date();
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const year = date.getFullYear();
    const month = date.getMonth()+1;
    const day = date.getDate();
    dateTitle.innerText = `${year} / ${month < 10 ? `0${month}`:month} / ${day < 10 ? `0${day}` : day}`;
    clockTitle.innerText = `${hour < 10 ? `0${hour}` : hour}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds }`;
}


function init(){
    getTime()
    setInterval(getTime,1000)
}
init();