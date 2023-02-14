let calorieList = [];
let maxcal;

function calculateMaximumCalories() {
    let sex = document.querySelector("#sex").value;
    let age = parseInt(document.querySelector("#age").value);
    let weight = parseInt(document.querySelector("#weight").value);
    let height = parseInt(document.querySelector("#height").value);
    let active = parseInt(document.querySelector("#active").value);

    if (sex == "female") {
        maxcal = 655.1 + (9.563*weight) + (1.850*height) - (4.676*age);
    }
    else if (sex == "male") {
        maxcal = 66.47 + (13.75*weight) + (5.003*height) - (6.755*age)
    }
    let result = document.querySelector("#result");
    console.log(sex);
    console.log(age);
    console.log(weight);
    console.log(height);
    console.log(active);
    
    result.innerHTML = "You burn " + maxcal + " calories per day. This is your maximum calorie limit for each day. It will refresh when you refresh the page, as that is assumed to be a new day. Do not go over this limit.";
    console.log(maxcal);
}

function addFood() {
    let food = document.querySelector("#food").value;
    let calamnt = parseInt(document.querySelector("#calamnt").value);

    calorieList.push(calamnt);

    let sum = calorieList.reduce((a, b) => a + b, 0)

    console.log(calamnt);
    console.log(calorieList);
    console.log(sum)

    if (sum >= maxcal - 200) {
        console.log("going over maxcal")
    }

    const table = document.getElementById("foodTable");
    const row = table.insertRow(-1);
    const name = row.insertCell(0);
    const amount = row.insertCell(1);
    name.innerHTML = food;
    amount.innerHTML = calamnt;
}

