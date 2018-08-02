import { randomColor, randomNum } from './helpers';

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const text ='Nándi bácsi';


function drawLines(){
    context.beginPath();
    context.lineWidth = Math.random()*5;
    context.moveTo(Math.floor(Math.random()*context.canvas.width), Math.floor(Math.random()*context.canvas.height));
    context.lineTo(Math.floor(Math.random()*context.canvas.width), Math.floor(Math.random()*context.canvas.height))
    
    context.strokeStyle = randomColor();
    context.stroke();
}


setInterval(drawLines.bind(this), 40)

drawLines()




