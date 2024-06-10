const b = document.querySelector(".joinButton");
if (b)
    b.addEventListener("click", () => {
        window.location.href = 'index2.html';
    });

    
const y = document.querySelector('#yellow')
if(y)
y.addEventListener('click',()=>{
    context.strokeStyle = "green";
});

const r = document.querySelector('#blue')
if(r)
r.addEventListener('click',()=>{
    context.strokeStyle = "blue";
});

const bl = document.querySelector('#black')
if(bl)
r.addEventListener('click',()=>{
    context.strokeStyle = "blue";
});



var canvas = document.querySelector(".canvas");
var context = canvas.getContext('2d');

var isDrawing = false;
var lastX = 0;
var lastY = 0;

function drawLine(x1, y1, x2, y2) {
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
    context.closePath();
}

// Mouse events
canvas.addEventListener('mousedown', function (e) {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mousemove', function (e) {
    if (isDrawing) {
        drawLine(lastX, lastY, e.offsetX, e.offsetY);
        [lastX, lastY] = [e.offsetX, e.offsetY];
    }
});

canvas.addEventListener('mouseup', function () {
    isDrawing = false;
});

canvas.addEventListener('mouseleave', function () {
    isDrawing = false;
});

// Touch events
canvas.addEventListener('touchstart', function (e) {
    e.preventDefault();
    isDrawing = true;
    var touch = e.touches[0];
    var rect = canvas.getBoundingClientRect();
    lastX = touch.clientX - rect.left;
    lastY = touch.clientY - rect.top;
});

canvas.addEventListener('touchmove', function (e) {
    e.preventDefault();
    if (isDrawing) {
        var touch = e.touches[0];
        var rect = canvas.getBoundingClientRect();
        var offsetX = touch.clientX - rect.left;
        var offsetY = touch.clientY - rect.top;
        drawLine(lastX, lastY, offsetX, offsetY);
        [lastX, lastY] = [offsetX, offsetY];
    }
});

canvas.addEventListener('touchend', function (e) {
    e.preventDefault();
    isDrawing = false;
});

canvas.addEventListener('touchcancel', function (e) {
    e.preventDefault();
    isDrawing = false;
});

document.getElementById('clearCanvas').addEventListener('click', function () {
    context.clearRect(0, 0, canvas.width, canvas.height);
});


