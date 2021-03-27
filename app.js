const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 700;
canvas.height = 700;

ctx.strokeStyle = "#2c2c2c"; 
ctx.lineWidth = 2.5;

let painting = false;

function stopPainting() {
    painting = false;
}

function startPainting() {
    painting = true;
}

function onMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;
    console.log(x, y);
    if(!painting) {
        console.log("creating path in ", x, y);
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else {
        console.log("creating line in ", x, y);
        ctx.lineTo(x, y);
        ctx.stroke();
    }    
}

function onMouseDown(event) {
    painting = true;
}

function onMouseUp(event) {
    stopPainting;
}


if(canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}