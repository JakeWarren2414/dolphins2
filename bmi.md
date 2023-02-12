<!--Login Frontmatter-->
<body>
    <script src="{{ '/assets/js/bmi.js' | relative_url }}"></script>
    <h1 id="calc">BMI Calculator</h1>
    <div style="padding:5px">
        <label for="feet">feet</label>
        <label for="inches">(inches)</label>
        <input id="feet" type="text">
        <input id = "inches" type="text">
    </div>
    <div style="padding:5px">
        <label for="weight">Your Weight(pound)</label>
        <input id="weight" type="text">
    </div>
    <div>
        <input type="button" value ="compute BMI" onclick = "bmi()">
    </div>
    <div id="result"></div>
<table id="bmiDisplay">
  <tr>
    <th>BMI</th>
  </tr>
</table>
<script>
  function create_User(){
    // extract data from inputs
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const phone = document.getElementById("phone").value;
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer my-token',
        },
    };
    //url for Create API
    const url='/crud_api/create/' + name + '/' + email+ '/' + password + '/' + phone;
    //Async fetch API call to the database to create a new user
    fetch(url, requestOptions).then(response => {
        // prepare HTML search result container for new output
        const resultContainer = document.getElementById("result");
        // trap error response from Web API
        if (response.status !== 200) {
            const errorMsg = 'Database response error: ' + response.status;
            console.log(errorMsg);
            // Email must be unique, no duplicates allowed
            document.getElementById("pswError").innerHTML =
                "Email already exists in the table";
            return;
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
const weightHeightData = [
  { weight: 150, height: 68 },
  { weight: 175, height: 72 },
  { weight: 200, height: 76 }
];
function calculateBMI(weight, height) {
  const bmi = weight / (height * height);
  return bmi;
}
const BMIs = weightHeightData.map(data => {
  const bmi = calculateBMI(data.weight, data.height);
  return bmi.toFixed(1);
});
const table = document.createElement("table");
const headerRow = document.createElement("tr");
const headerCell = document.createElement("th");
headerCell.innerText = "BMI";
headerRow.appendChild(headerCell);
table.appendChild(headerRow);
BMIs.forEach(bmi => {
  const row = document.createElement("tr");
  const cell = document.createElement("td");
  cell.innerText = bmi;
  row.appendChild(cell);
  table.appendChild(row);
});
document.body.appendChild(table);
</html>
</script>
</body>

## BMI Overview
> General Overview of BMI
- Knowing your BMI range is the first step in your journey toward a heathier life
- BMI stands for body mass index
- The aim of the BMI calculator is to find out if a person is overweight, underweight or have a good weight.

## First Steps
> Good fitness advice
- Without data about your body your weight loss journey will be exponential harder
- You might have anxiety/insecurity about certain aspect about yourself, which is very normal, and hard to face
- But I promise the feeling of improvement and success will far out way the feelings of insecurity you will have currently

## BMI Calculator
> Information
- A great informational tool to find your BMI along with more info about the topic is this [website](https://www.calculator.net/bmi-calculator.html)

## Next steps
> What to do with this info
- With this data you just found make a goal for a obtainable range that you will be able to reach in 6-12 months
- And head to the next part of your fitness journey: [Nutrition](https://jakewarren2414.github.io/dolphins2/food)
<div style="padding: 150px;">
</div>
