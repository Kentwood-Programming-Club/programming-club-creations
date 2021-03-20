/*
    Simple Calculator
    Copyright (C) 2021 Kentwood Programming Club

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

function addHandler(element) {

    element.addEventListener(
        "click",

        // WRITE CODE HERE
        function() {
            let elementContents = element.innerText;
            // is the button a number button or an operation?

            if (parseInt(elementContents) >= 0 && parseInt(elementContents) <= 9) {

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