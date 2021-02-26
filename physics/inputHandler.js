// Look in globalVars.js to see how you can change the state of the app according to the input.

function resizeCanvas() {
    context.canvas.width = window.innerWidth;
    context.canvas.height = window.innerHeight;
}

function handleKeyboardInput(key) {
    switch(key.keyCode) {
        case 32:
            state.gridEnabled = !state.gridEnabled;
        break;
    }
}

function mouseDown() {
    
}

window.onresize = resizeCanvas;
canvas.addEventListener("keypress", handleKeyboardInput);