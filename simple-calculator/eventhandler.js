let elements = document.getElementsByClassName("calc-button");

function addHandler (element) {

    element.addEventListener(
        "click", 

        // WRITE CODE HERE
        function() {
            let elementContents = element.innerText;
            // is the button a number button or an operation?
            if (parseInt(elementContents) >= 0 && parseInt(elementContents) <= 9){
                if (true){
                    document.getElementById("calc").innerHTML += elementContents;  
                }
            }
        },

    false);

}

for (let i = 0; i < elements.length; i++) {
    addHandler(elements[i]);
}
