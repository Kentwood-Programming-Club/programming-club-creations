let elements = document.getElementsByClassName("calc-button");

function select_operation() {
    if (operator == "+") {
        firstOperand = add(parseFloat(firstOperand), parseFloat(secondOperand));
    } else if (operator == "-") {
        firstOperand = subtract(parseFloat(firstOperand), parseFloat(secondOperand));
    } else if (operator == "x") {
        firstOperand = multiply(parseFloat(firstOperand), parseFloat(secondOperand));
    } else if (operator == "÷") {
        firstOperand = divide(parseFloat(firstOperand), parseFloat(secondOperand));
    }
}

function addHandler (element) {

    element.addEventListener(
        "click", 

        // WRITE CODE HERE
        function() {
            let elementContents = element.innerText;
            // is the button a number button or an operation?

            if (parseInt(elementContents) >= 0 && parseInt(elementContents) <= 9){

                if (isEditingFirst) {
                    firstOperand += ("" + elementContents); 
                } else {
                    secondOperand += ("" + elementContents);
                }

            } else if (elementContents == ".") {
                if (isEditingFirst) {
                    if (firstOperand.indexOf(".") == -1) {
                        firstOperand += ".";
                    }
                } else {
                    if (secondOperand.indexOf(".") == -1) {
                        secondOperand += ".";
                    }
                }
            } else if (elementContents != "=") { // other operators
                if (isEditingFirst) {
                    operator = elementContents;
                    isEditingFirst = false;
                } else {
                    if (secondOperand != "") {
                        select_operation();
                        operator = elementContents;
                        secondOperand = "";
                    } else {
                        operator = elementContents;
                    }
                }
            } else { // equal sign
                if (!isEditingFirst && secondOperand != "") {
                    select_operation();
                    operator = "";
                    secondOperand = "";
                }
            } // use 'else if' to handle what to do for the other possible inputs (you can chain else ifs together like so) 

            document.getElementById("calc").value = firstOperand + operator + secondOperand;

        },

    false);

}

for (let i = 0; i < elements.length; i++) {
    addHandler(elements[i]);
}
