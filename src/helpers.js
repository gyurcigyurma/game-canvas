function randomColor(){
    const colorsGenerated = randomNum();
    let {color1, color2, color3, alpha} = colorsGenerated;
    return `rgba(${color1}, ${color2}, ${color3}, ${alpha})`
}

function randomNum () {
    return {
        color1: (Math.random()*255).toFixed(0),
        color2: (Math.random()*255).toFixed(0),
        color3: (Math.random()*255).toFixed(0),
        alpha: Math.random()
    }
}

export { randomColor, randomNum };