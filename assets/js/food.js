let calorieList = [];
function getVariables() {
  const result = document.querySelector("#result");
  const url = "https://dolphin.nighthawkcodingsociety.com/api/users";
  const maxcal_fetch = url + '/maxcal';
  const age_fetch = url + '/age';
  const sex_fetch = url + '/sex';
  const weight_fetch = url + '/weight';
  const height_fetch = url + '/height';

  const body = {
    username: sessionStorage.getItem("uid"),
    sex: document.getElementById("sex")
  };
  const requestOptions = {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      "content-type": "application/json",
    },
  };
}
  fetch(sex_fetch, requestOptions)
    .then(response => {
      if (response.status !== 400) {
        const errorMsg = 'Database create error: ' + response.status;
        console.log(errorMsg);
        return;
      }
      response.json().then(data => {
        console.log(data);
      })
    })

function calculateMaximumCalories() {
    sex = document.querySelector("#sex").value;
    age = parseInt(document.querySelector("#age").value);
    weight = parseInt(document.querySelector("#weight").value);
    height = parseInt(document.querySelector("#height").value);
    active = parseInt(document.querySelector("#active").value);

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

function update() {
    fetch('https://dolphin.nighthawkcodingsociety.com/api/users', {
      method: 'POST',
      // mode: 'cors',
      cache: 'default',
      credentials: 'include', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        age: age,
        sex: sex,
        weight: weight,
        height: height,
        maxcal: maxcal
      })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
}  

function getVars() {
  fetch('https://dolphin.nighthawkcodingsociety.com/api/users/')
  .then(response => response.json())
  .then(data => {
    let aget = data.age;
    console.log(aget);
    document.getElementById("dataFetched").innerHTML = aget;
  })
  .catch(error => console.error(error));

  fetch('https://dolphin.nighthawkcodingsociety.com/api/users/')
  .then(response => response.json())
  .then(data => {
    sex = data.sex;
    console.log(sex);
    document.getElementById("dataFetched").innerHTML = sex;
  })
  .catch(error => console.error(error));

  fetch('https://dolphin.nighthawkcodingsociety.com/api/users/')
  .then(response => response.json())
  .then(data => {
    weight = data.weight;
    console.log(weight);
    document.getElementById("dataFetched").innerHTML = weight;
  })
  .catch(error => console.error(error));

  fetch('https://dolphin.nighthawkcodingsociety.com/api/users/')
  .then(response => response.json())
  .then(data => {
    height = data.height;
    console.log(height);
    document.getElementById("dataFetched").innerHTML = height;
  })
  .catch(error => console.error(error));

  fetch('https://dolphin.nighthawkcodingsociety.com/api/users/')
  .then(response => response.json())
  .then(data => {
    maxcal = data.maxcal;
    console.log(maxcal);
    document.getElementById("dataFetched").innerHTML = maxcal;
  })
  .catch(error => console.error(error));
}