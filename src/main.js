import { randomColor, randomNum } from './helpers';

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const text ='Nándi bácsi';

const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

let degree= 0;
function drawRectanle(x,y,width,height) {
    
  const centerPoint = findCenter(x,y,width,height);    
  //context.clearRect(0, 0, canvasWidth, canvasHeight);
  //context.fillStyle(randomColor());
  context.save();
  context.translate(centerPoint.xpos, centerPoint.ypos);
  context.rotate(degree * Math.PI / 180);
  context.translate(-centerPoint.xpos, -centerPoint.ypos);
  degree++;
  context.strokeRect(x,y, width, height);
  context.restore();


}

function findCenter (x,y,width,height) {
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


//setInterval(drawRectanle.bind(this, 500, 100, 200,100), 55, this);

//setInterval(drawRectanle.bind(this, 100, 200, 100,400), 55);

drawRectanle(10,10,100,120)
//canvas.addEventListener('click', getCursorPosition.bind(null, canvas))


//drawRectanle();




