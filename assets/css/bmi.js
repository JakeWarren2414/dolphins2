let finalHeight;
let finalWeight;
let yourbmi;

function bmi() {
    /* Getting input from user into height variable.
    Input is string so typecasting is necessary. */
    let feet = parseInt(document
            .querySelector("#feet").value);
    let inches = parseInt(document
            .querySelector("#inches").value);
    finalHeight = 12*feet + inches;
    /* Getting input from user into weight variable.
    Input is string so typecasting is neessary.*/
    finalWeight = parseInt(document
            .querySelector("#weight").value);
    yourbmi = (finalWeight/(12*feet+inches)/(12*feet+inches)*703).toFixed(2);
    let result = document.querySelector("#result");
    console.log(feet);
    console.log(inches);
    console.log(finalWeight);
    // Checking the user providing a proper
    // value or not
    if (feet === "" || isNaN(feet))
        result.innerHTML = "Provide a valid Height!";
    if (inches === "" || isNaN(inches))
        result.innerHTML = "Provide a valid Height!";
    else if (finalWeight === "" || isNaN(finalWeight))
        result.innerHTML = "Provide a valid Weight!";
    // If both input is valid, calculate the bmi
    else {
        // Fixing upto 2 decimal places
        // Dividing as per the bmi conditions
        if (yourbmi < 18.6) result.innerHTML =
            `Under Weight : <span>${yourbmi}</span>`;
        else if (yourbmi >= 18.6 && yourbmi < 24.9)
            result.innerHTML =
                `Normal : <span>${yourbmi}</span>`;
        else result.innerHTML =
            `Over Weight : <span>${yourbmi}</span>`;
    }
    console.log(yourbmi);
    const table = document.getElementById("bmiDisplay");
    const row = table.insertRow(-1);
    const cell1 = row.insertCell(0);
    cell1.innerHTML = yourbmi;
}

function updateUser(){ 
    const updateUser = async (userId, weight, height, bmi) => {
        const url = `http://dolphin.nighthawkcodingsociety.com/api/users/${userId}`;
        const data = {
          weight: finalWeight,
          height: finalHeight,
          bmi: yourbmi
        };
      
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });
      
        if (response.ok) {
          const updatedUser = await response.json();
          console.log(updatedUser); // do something with updated user
        } else {
          console.log('Failed to update user');
        }
      };
      
      // Example usage: updateUser('123', 150, 170, 25);
      
}
function backend() {
   // Select the input elements
const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');
const calculateButton = document.getElementById('calculate');

// Add an event listener to the calculate button
calculateButton.addEventListener('click', function() {
  // Get the input values and convert them to numbers
  const weight = parseFloat(weightInput.value);
  const height = parseFloat(heightInput.value);

  // Calculate the BMI
  const bmi = weight / (height * height);

  // Display the result
  const result = document.getElementById('result');
  result.innerHTML = `Your BMI is ${bmi.toFixed(2)}.`;
});
}