let calorieList = [];
let maxcal;
let sex;
let age;
let weight;
let height;
let active;

function calculateMaximumCalories() {
    sex = document.getElementById("sex").value;
    age = parseInt(document.getElementById("age").value);
    weight = parseInt(document.getElementById("weight").value);
    height = parseInt(document.getElementById("height").value);
    active = parseInt(document.getElementById("active").value);

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
    
    result.innerHTML = "You burn " + maxcal + " calories per day. This is your maximum calorie "
    + "limit for each day. It will refresh when you refresh the page, as that is assumed to be a "
    + "new day. Do not go over this limit."
    console.log(maxcal);
}

function addFood() {
    let food = document.querySelector("#foodName").value;
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

const result = document.querySelector("#result");
const url = "https://dolphin.nighthawkcodingsociety.com/api/users";
const age_fetch = url + '/age';
const sex_fetch = url + '/sex';
const weight_fetch = url + '/weight';
const height_fetch = url + '/height';

const body = {
  username: sessionStorage.getItem("uid")
};
const requestOptions = {
  method: 'POST',
  body: JSON.stringify(body),
  headers: {
    "content-type": "application/json",
    "Access-Control-Allow-Origin: https://jakewarren2414.github.io"
  },
};

fetch(sex_fetch, requestOptions)
  .then(response => {
    if (response.status !== 200) {
      const errorMsg = 'Database create error: ' + response.status;
      console.log(errorMsg);
      return;
    }
    response.json().then(data => {
      document.getElementById("sex").innerHTML = data.sex;
      document.getElementById("age").innerHTML = data.age;
      document.getElementById("weight").innerHTML = data.weight;
      document.getElementById("height").innerHTML = data.height;
    })
  })