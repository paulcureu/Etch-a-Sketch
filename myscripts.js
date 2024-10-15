let color = "black";
document.addEventListener("DOMContentLoaded", function() {
    createBoard(16);
    let showSize = document.querySelector("#sizeshow");
    let btn_popup = document.querySelector("#popup");
    btn_popup.addEventListener("click", function() {
        let size = getSize();
        if (size) {
            createBoard(size);
            showSize.innerHTML = `Size: ${size}x${size}`;
        }
    })
});
function createBoard(size){
    let board = document.querySelector(".board");
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    let numDivs = size * size;

    for (let i = 0; i < numDivs; i++) {
        let div = document.createElement("div");
        div.addEventListener("mouseover", colorDiv)
        board.insertAdjacentElement("beforeend", div);
    }
}
function getSize() {
    let input = prompt("Enter the size");
    let message = document.querySelector("#message");
    if(input == null){
        message.innerHTML = "Please enter a number";
    }else if(input < 1 || input > 100){
        message.innerHTML = "Please enter a number between 1 and 100";
    }
    else{
        message.innerHTML = "Now you play";
        return input;
    }
}
function colorDiv() {
    if (color === "random") {
        this.style.backgroundColor = `hsl(${Math.random()*360}, 100%,50%`;
    }
    else
    {
        this.style.backgroundColor = 'black';
    }
}
function setColor(colorChoice){
    color = colorChoice;
}

function resetBoard(){
    let divs = document.querySelectorAll("div");
    divs.forEach(div => div.style.backgroundColor = "white");
}