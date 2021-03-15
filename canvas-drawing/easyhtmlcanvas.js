/*
    EasyHTMLCanvas -- a small HTML5 canvas library to make drawing simple shapes easier
    Copyright (C) 2021 Nathaniel D'Rozario

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/
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