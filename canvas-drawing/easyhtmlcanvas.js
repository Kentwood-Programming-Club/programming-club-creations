const EasyHTMLCanvas = {
    createCanvas: function(id) {
       const canvas = document.createElement("canvas");
       canvas.id = id;
       
       // default values
       canvas.width = 800;
       canvas.height = 600;

       document.body.appendChild(canvas);
       return canvas.getContext("2d");
    },
    drawSquare: function(ctx, posX, posY, sizeX, sizeY, color) {
        ctx.fillStyle = color;
        ctx.fillRect(posX, posY, sizeX, sizeY);
    },
    drawCircle: function(ctx, posX, posY, radius, color) {
        ctx.fillStyle = color;
        ctx.fillCircle(posX, posY, radius);
    },
    clear: function(ctx) {
        ctx.clearRect(0,0, ctx.canvas.clientWidth,ctx.canvas.clientHeight);
    },
    genColorHSL: (h,s,l) => "hsl(" + h + ", " + s + "%, " + l + "%)",
    genColorRGB: (r,g,b) => "rgb(" + r + ", " + g + ", " + b + ")",
    getDelayValue: (fps) => 1000 / fps, // i think this works
}