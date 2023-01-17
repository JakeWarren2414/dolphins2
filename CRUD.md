## Our View and Display
- The view for this project will be a couple pages because of how broad fitness/better health is
    - first view is workout calender that displays the workouts you put in
    - the second is BMI info page which will display your range
    - The third will be the nutrition which will show your CPD (calories per day), and the calories you have eaten today
- The display for this project will fetch JSON data from a API/database which will be used to fill in the view.

## Describing our view
- I feel like describing leaves alot of gray area and unknowns. So if you would like to check out some of our example of Views, view (pun intended) theese three link
    - [One](https://jakewarren2414.github.io/dolphins2/calender)
    - [Two](https://jakewarren2414.github.io/dolphins2/food)
    - [Three](https://jakewarren2414.github.io/dolphins2/bmi#calc)

## Getting Data from personal JSON file

<table>
  <thead>
  <tr>
    <th>ID</th>
    <th>FirstName</th>
    <th>LastName</th>
    <th>CPD</th>
    <th>Birthday</th>
    <th>Height (inches)</th>
    <th>Weight (pounds)</th>
  </tr>
  </thead>
  <tbody id="table">
    <!-- javascript generated data -->
  </tbody>
</table>

<script>
fetch("https://jakewarren2414.github.io/dolphins2/assets/json/userdata.json")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    var table = document.getElementById("table");
    data.Users.forEach(function(user) {
      var row = table.insertRow();
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      var cell6 = row.insertCell(5);
      var cell7 = row.insertCell(6);
      cell1.innerHTML = user.userId;
      cell2.innerHTML = user.firstName;
      cell3.innerHTML = user.lastName;
      cell4.innerHTML = user.CPD;
      cell5.innerHTML = user.Birthdate;
      cell6.innerHTML = user.Height;
      cell7.innerHTML = user.Weight;
    });
  });

</script>

