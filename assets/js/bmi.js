function bmi() {
  
    /* Getting input from user into height variable.
    Input is string so typecasting is necessary. */
    let feet = parseInt(document
            .querySelector("#feet").value);

    let inches = parseInt(document
            .querySelector("#inches").value);
    /* Getting input from user into weight variable. 
    Input is string so typecasting is neessary.*/
    let weight = parseInt(document
            .querySelector("#weight").value);
    let yourbmi = (weight/(12*feet+inches)/(12*feet+inches)*703).toFixed(2);
    let result = document.querySelector("#result");
    console.log(feet);
    console.log(inches);
    console.log(weight);
    // Checking the user providing a proper
    // value or not
    
    if (feet === "" || isNaN(feet)) 
        result.innerHTML = "Provide a valid Height!";
    if (inches === "" || isNaN(inches)) 
        result.innerHTML = "Provide a valid Height!";
    else if (weight === "" || isNaN(weight)) 
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

function saveBMI() {
    window.onload = function() {
        days.forEach(day => {
          const elementId = day.toLowerCase();
          document.getElementById(elementId).innerText = localStorage.getItem(day);
        });
      };
      // Goes through each day and saves it
      function Save() {
        days.forEach(day => {
          const elementId = day.toLowerCase();
          localStorage.setItem(day, document.getElementById(elementId).innerText);
        });
        location.href="#workout-calender";
      }
}