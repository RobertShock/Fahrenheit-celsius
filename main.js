var temperatures = function(X) {
        var output, userInput, result, opposite;
        userInput = document.getElementById('temp').value;
        if (X === "C") {
            result = 9 / 5 * (userInput) + 32;
            opposite = "F";
        } 
        else {
            result = (userInput - 32) / 9 *5;
            opposite = "C";
        }
        if (result % 1 !== 0) {
            console.log(result % 1);
            result = result.toFixed(2);
        }
        if (userInput || userInput === "0") {
            output = userInput + " \°" + X + " is equal to " + result + " \°" + opposite;
        } 
           if (output > 90){
            (document.getElementById("output").classList.add('redText'));
            }

        document.querySelector('output').innerHTML = output;
    }
document.getElementById('ctof').addEventListener('click', function(){temperatures('C');})
document.getElementById('ctof2').addEventListener('click', function(){temperatures('F');})


function clearForm() {
  document.getElementById("myForm").reset();
}


// Create a block level element that will hold the text of the converted temperature.
// Create a button that, when clicked, displays the converted temperature.
// Create another button that, when clicked, clears any text in the input field.
// Add an event handler to the input field that checks if the user pressed the enter key, and if that happens, perform the conversion.
// If the temperature is greater than 90F/32C the color of the converted temperature should be red.
// If the temperature is less than 32F/0C the color of the converted temperature should be blue.
// For any other temperature, the color should be green.