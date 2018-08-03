import { randomColor, randomNum } from './helpers';

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const text ='Nándi bácsi';

let degree= 0;
function drawRectanle() {
    
//    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
//    
//    context.translate(context.canvas.width/2, context.canvas.height/2);
//    context.rotate(degree * Math.PI * 180);
//    
//    context.translate(-context.canvas.width/2, -context.canvas.height/2);
//    
//    context.strokeRect(100,100,200,100);
//    
 degree = (degree + 1) % 360;
    context.clearRect(0, 0, canvas.width, canvas.height);

    context.save();
    context.fillStyle = "#FF0000";

    context.translate(200,150);
    context.rotate( degree*Math.PI/180 ); 
    context.translate(-200,-150);

    context.beginPath();
    context.strokeRect(100,100,200,100)

    context.restore();

    



}

function drawLines(){
    context.beginPath();
    context.lineWidth = Math.random()*5;
    context.moveTo(Math.floor(Math.random()*context.context.canvas.width), Math.floor(Math.random()*context.context.canvas.height));
    context.lineTo(Math.floor(Math.random()*context.context.canvas.width), Math.floor(Math.random()*context.context.canvas.height))
    
    context.strokeStyle = randomColor();
    context.stroke();
}


setInterval(drawRectanle, 30)



//drawRectanle();




