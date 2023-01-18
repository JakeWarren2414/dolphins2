<!--Login Frontmatter-->

## Workout Calender
  - Helps you stay on top of your workouts
  - Gets you organized
  - Tracks your progress
<table>
  <tr>
    <th><label for="workout">Type in Workout:</label></th>
    <th><label for="weeks">Choose a Day:</label></th>
    <th>Apply</th>
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
  </tr>
</table>
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




</script>