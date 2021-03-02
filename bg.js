const body = document.querySelector("body");

const IMG_NUMBER = 5


function paintImage(imgNumber){
    const image = new Image(); // Create Img element
    image.src = `images/rv${imgNumber+1}.jpg`
    image.classList.add("bgImage")
    body.prepend(image); // prepend : append element to the start of child
    // Show image after image file ends loading.
    image.onload = function(){
        image.classList.add("show")
    }

}

function genRandom(){
    // Generate random number 0~imgs_length
    const number = Math.floor(Math.random()*IMG_NUMBER);
    return number;
}

function init() {
    const randomNumber = genRandom(); 
    paintImage(randomNumber);
}
init();