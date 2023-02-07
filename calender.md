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
    <th>Remove</th>
    <th id="saver">Save</th>
  </tr>
  <tr>
    <td><input id="input"></td>
    <td>
      <select name="week" id="week">
        <option>monday</option>
        <option>tuesday</option>
        <option>wednesday</option>
        <option>thursday</option>
        <option>friday</option>
        <option>saturday</option>
        <option>sunday</option>
      </select>
    </td>
    <td><button onclick="Add()">Apply</button></td>
    <td><button onclick="Remove()">Remove</button></td>
    <td><button onclick="Save()">Save</button></td>
  </tr>
</table>

<br>

<div class="row2"></div>
<!-- Daily Tasks are displayed-->
<h2><div id="days"></div></h2>
<h3 style="color: black;"><div id="tasks"></div></h3>

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

<script src="{{ '/assets/js/calender.js' | relative_url }}"></script>