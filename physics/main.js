/*

Let's use the following definition of a vector:

{
    x: 0.0,
    y: 0.0
}

*/


resizeCanvas();

function drawLoop() { 

    context.clearRect(0,0,context.canvas.width, context.canvas.height);
    
    // draw ground
    let groundGradient = context.createLinearGradient(0,2*context.canvas.height/3, 0,  context.canvas.height);
    groundGradient.addColorStop(0.5, "#22ef7f");
    groundGradient.addColorStop(1, "white");
    context.fillStyle = groundGradient;
    context.fillRect(0,2* context.canvas.height/3, context.canvas.width,  context.canvas.height);

    // grid
    context.strokeStyle="rgba(0,0,0,0.2)";
    if (state.gridEnabled) {
        for (let i = 0; i < context.canvas.width / state.pixelsPerMeter; i++) {
            context.beginPath();
            context.moveTo(i * state.pixelsPerMeter, 0);
            context.lineTo(i * state.pixelsPerMeter, 2*context.canvas.height/3);
            context.stroke();
        }
        for (let i = 0; i < (2*context.canvas.height/3) / state.pixelsPerMeter; i++) {
            context.beginPath();
            context.moveTo(0, (2*context.canvas.height/3) - (i * state.pixelsPerMeter));
            context.lineTo(context.canvas.width,  (2*context.canvas.height/3) - (i * state.pixelsPerMeter));
            context.stroke();
        }
    }

}

setInterval(drawLoop, delay);
