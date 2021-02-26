let frameRate = 60;

let canvas = document.getElementById("simulationCanvas");
let context = canvas.getContext("2d");
let delay = 1000/frameRate;

let state = 
{
    gridEnabled: true,
    pixelsPerMeter: 75
}
