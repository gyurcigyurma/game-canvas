import * as helpers from './helpers';

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

const clearArea = document.getElementById("Cleararea");
const stopDraw = document.getElementById("Stopdraw");


var intervals = [];

let degree= 0;

context.strokeText("CLICK ME", 20,20);
let width = document.getElementById("rectanglewidth").value;
let height = document.getElementById("rectangleheight").value;

function drawRectanle(x, y) { 

    const withAlpha = document.getElementById("Withalpha").checked;
    const lineWidth = document.getElementById("linewidth").value;
    width = document.getElementById("rectanglewidth").value;
    height = document.getElementById("rectangleheight").value;
    const rotatonAnlgle = document.getElementById("rotation").value;
    
    const center = getCenter(x, y, width, height);
    
    
    
    degree = (degree + 6) % 360;    
    
    context.save();
    context.strokeStyle = helpers.randomColor(withAlpha);
    context.lineWidth = lineWidth;

    context.translate(center.xpos, center.ypos);
    context.rotate( degree*Math.PI/180 ); 
    context.translate(-center.xpos, -center.ypos);

    context.beginPath();
    context.strokeRect(x, y, width, height);

    context.restore();
}

function getCenter (x, y, width, height) {
    return {
        xpos: x + width/2,
        ypos: y + height/2
    }
}

//function drawLines(){
//    context.beginPath();
//    context.lineWidth = Math.random()*5;
//    context.moveTo(Math.floor(Math.random()*context.context.canvas.width), Math.floor(Math.random()*context.context.canvas.height));
//    context.lineTo(Math.floor(Math.random()*context.context.canvas.width), Math.floor(Math.random()*context.context.canvas.height))
//    
//    context.strokeStyle = randomColor();
//    context.stroke();
//}


canvas.addEventListener('click', function(){
    const frameRate = document.getElementById("framerate").value;
    const cursorPos = helpers.getCursorPosition(this);
    
    var e = setInterval(drawRectanle.bind(null, cursorPos.xpos - width/2, cursorPos.ypos - height/2), frameRate);
    intervals.push(e);

});


clearArea.addEventListener('click', function(){
    intervals.forEach(function(inter){
       clearInterval(inter);
    })
    
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.strokeText("CLICK ME", 20,20);
});

stopDraw.addEventListener('click', function(){
        intervals.forEach(function(inter){
       clearInterval(inter);
    })
})


window.requestAnimationFrame(drawRectanle);




//drawRectanle();




