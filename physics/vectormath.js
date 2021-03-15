// Scalar to vector arithmetic

// Example: multiplication
// DO NOT MODIFY THIS FUNCTION
function scalarMultiply(scalar, vector) {
    let ret =
    {
        x: vector.x, 
        y: vector.y
    }
    ret.x *= scalar;
    ret.y *= scalar;
    return ret;
}

// You can implement these functions
function scalarDivide(scalar, vector) {
    // Try using the previous multiply function to implement this!
    ret = scalarMultiply(scalar, ret); // How can you turn division into multiplication?
    return ret;
}

function vectorAdd(vector1, vector2) {
    let ret = 
    { 
        x: vector1.x,
        y: vector1.y
    }
    // What to do here?
    ret.x = 0;
    ret.y = 0;
    return ret;
}

function vectorSubtract(vector1, vector2) {

}

function vectorMagnitude(vector) {
    // Remember, the magnitude of a vector is the same as it's "distance" as if it was graphed as a line.
    return 0;
}