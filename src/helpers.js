function randomColor (withAlpha){
    const colorsGenerated = randomNum(withAlpha);
    let {color1, color2, color3, alpha} = colorsGenerated;
    return `rgba(${color1}, ${color2}, ${color3}, ${alpha})`
}

function randomNum (withAlpha) {
    let obj = {
        color1: (Math.random()*255).toFixed(0),
        color2: (Math.random()*255).toFixed(0),
        color3: (Math.random()*255).toFixed(0)
    }
    
    obj.alpha = (withAlpha === true ? Math.random() : 1);
    return obj;
}

function getCursorPosition(canvas) {
    var rect = canvas.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;
    return {
        xpos: x,
        ypos: y
    }
    console.log("x: " + x + " y: " + y);
}

export { randomColor, randomNum, getCursorPosition };