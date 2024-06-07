const b = document.querySelector(".joinButton");
if(b)
b.addEventListener("click",()=>{
    window.location.href = 'index2.html';
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

    
    canvas.addEventListener('mousedown', function(e) {
        isDrawing = true;
        [lastX, lastY] = [e.offsetX, e.offsetY];
    });

    
    canvas.addEventListener('mousemove', function(e) {
        if (isDrawing) {
            drawLine(lastX, lastY, e.offsetX, e.offsetY);
            [lastX, lastY] = [e.offsetX, e.offsetY];
        }
    });

    
    canvas.addEventListener('mouseup', function() {
        isDrawing = false;
    });

    
    canvas.addEventListener('mouseleave', function() {
        isDrawing = false;
    });

    document.getElementById('clearCanvas').addEventListener('click', function() {
        context.clearRect(0, 0, canvas.width, canvas.height);
    });

    
