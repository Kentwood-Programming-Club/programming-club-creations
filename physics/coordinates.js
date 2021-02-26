// IMPLEMENT THIS
function worldCoordsToScreenCoords(context, vecPosition) {
    /* 
        Remember, the canvas's y axis is inverted, so a higher y-value moves downwards. 
        However, we calculate things in physics with y upwards. How can we find the screen position 
        using the height of the canvas in pixels?
    */
    let screenHeight = context.canvas.height;  
    
    let ret = {
        x: vecPosition.x,
        y: vecPosition.y
    }

    // You need to modify the vector 'ret' accordingly.


    return ret;
}