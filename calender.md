<!--Login Frontmatter-->

## Workout Calender
  - Helps you stay on top of your workouts
  - Gets you organized
  - Tracks your progress
<br>

## Editor Table
<!-- Editor table-->
<table width="500px">
  <tr>
    <th><label for="workout">Type in Workout:</label></th>
    <th><label for="weeks">Choose a Day:</label></th>
    <th>Apply</th>
    <th>Save</th>
  </tr>
  <tr>
    <td><input id="input"></td>
    <td>
      <select name="week" id="week">
        <option>Monday</option>
        <option>Tuesday</option>
        <option>Wednesday</option>
        <option>Thursday</option>
        <option>Friday</option>
        <option>Saturday</option>
        <option>Sunday</option>
      </select>
    </td>
    <td><button onclick="Add()">Apply</button></td>
    <td><button>Save</button></td>
  </tr>
</table>

<br>

<!-- Calender table-->
<table>
  <tr>
    <th>Monday</th>
    <th>Tuesday</th>
    <th>Wednesday</th>
    <th>Thursday</th>
    <th>Friday</th>
    <th>Saturday</th>
    <th>Sunday</th>
  </tr>
    <tr>
    <td><div id="monday"></div></td>
    <td><div id="tuesday"></div></td>
    <td><div id="wednesday"></div></td>
    <td><div id="thursday"></div></td>
    <td><div id="friday"></div></td>
    <td><div id="saturday"></div></td>
    <td><div id="sunday"></div></td>
  </tr>
</table>

<br>

<div id="days"></div>
<div id="tasks"></div>



<script>
  function Add(){
    var input = document.getElementById("input").value;
    var week = document.getElementById("week").value;
    if (week === "Monday") {
      document.getElementById("monday").innerText = input + " " + document.getElementById("monday").innerText
    }
    if (week === "Tuesday") {
      document.getElementById("tuesday").innerText = input + " " + document.getElementById("tuesday").innerText
    }
    if (week === "Wednesday") {
      document.getElementById("wednesday").innerText = input + " " + document.getElementById("wednesday").innerText
    }
    if (week === "Thursday") {
      document.getElementById("thursday").innerText = input + " " + document.getElementById("thursday").innerText
    }
    if (week === "Friday") {
      document.getElementById("friday").innerText = input + " " + document.getElementById("friday").innerText
    }
    if (week === "Saturday") {
      document.getElementById("saturday").innerText = input + " " + document.getElementById("saturday").innerText
    }
    if (week === "Sunday") {
      document.getElementById("sunday").innerText = input + " " + document.getElementById("sunday").innerText
    }
  }

  function displayDayOfWeek() {
    var d = new Date();
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var day = days[d.getDay()];
    document.getElementById("days").innerHTML = "Today is " + day + " these are your tasks:";
  }
  setInterval(displayDayOfWeek, 1000);
</script>