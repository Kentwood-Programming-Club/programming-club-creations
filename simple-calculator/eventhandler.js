let elements = document.getElementsByClassName("calc-button");

function addHandler (element) {

    element.addEventListener(
        "click", 

        // WRITE CODE HERE
        function() {
            let elementContents = element.innerText;
            // is the button a number button or an operation?
            console.log(elementContents)
            if (parseInt(elementContents) >= 0 && parseInt(elementContents) <= 9){
                document.getElementById("calc").value += elementContents;  // innerHTML doesn't edit <input>'s contents
                
                if (isEditingFirst) {
                    // update firstOperand
                } else {
                    // update secondOperand
                }
            } else if (false) {
            } else if (false) {
            } // use 'else if' to handle what to do for the other possible inputs (you can chain else ifs together like so) 
        },

    false);

}

for (let i = 0; i < elements.length; i++) {
    addHandler(elements[i]);
}
