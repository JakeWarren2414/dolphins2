let height;
let weight;
let yourbmi;

function bmi() {
    /* Getting input from user into height variable.
    Input is string so typecasting is necessary. */
    let feet = parseInt(document
            .querySelector("#feet").value);
    let inches = parseInt(document
            .querySelector("#inches").value);
    height = 12*feet + inches;
    /* Getting input from user into weight variable.
    Input is string so typecasting is neessary.*/
    let weight = parseInt(document
            .querySelector("#weight").value);
    yourbmi = (weight/(12*feet+inches)/(12*feet+inches)*703).toFixed(2);
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

function createUser(){
    // extract data from inputs
    const finalHeight = height;
    const finalWeight = weight;
    const finalBMI = bmi;
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer my-token',
        },
    };
    //url for Create API
    const url='/crud_api/create/' + finalHeight + '/' + finalWeight + '/' + finalBMI;
    //Async fetch API call to the database to create a new user
    fetch(url, requestOptions).then(response => {
        // prepare HTML search result container for new output
        const resultContainer = document.getElementById("result");
        // trap error response from Web API
        if (response.status !== 200) {
            const errorMsg = 'Database response error: ' + response.status;
            console.log(errorMsg);
        }
        // response contains valid result
        response.json().then(data => {
            console.log(data);
            //add a table row for the new/created userId
            const tr = document.createElement("tr");
            for (let key in data) {
                if (key !== 'query') {
                    //create a DOM element for the data(cells) in table rows
                    const td = document.createElement("td");
                    console.log(data[key]);
                    //truncate the displayed password to length 20
                    if (key === 'password'){
                        td.innerHTML = data[key].substring(0,17)+"...";
                    }
                    else{
                        td.innerHTML = data[key];}
                    //add the DOM data element to the row
                    tr.appendChild(td);
                }
            }
            //append the DOM row to the table
            table.appendChild(tr);
        })
    })
}
