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
  <tbody id="table">
  </tbody>
</table>

<script src="{{ '/assets/js/calender.js' | relative_url }}"></script>