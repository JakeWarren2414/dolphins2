<!--Login Frontmatter-->

## Workout Calender
  - Helps you stay on top of your workouts
  - Gets you organized
  - Tracks your progress
<br>

## Editor Table
<!-- Editor table-->
<table width="500px" class="profile">
  <tr class="profile">
    <th class="profile"><label for="workout">Type in Workout:</label></th>
    <th class="profile"><label for="weeks">Choose a Day:</label></th>
    <th class="profile">Apply</th>
    <th class="profile">Remove</th>
  </tr>
  <tr>
    <td><input id="input" class="profile"></td>
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
    <td><button onclick="Add()" class="profile">Apply</button></td>
    <td><button onclick="Remove()" class="profile">Remove</button></td>
  </tr>
</table>

<br>

<!-- Calender table-->
<table class="profile">
  <tr class="profile">
    <th class="profile">Monday</th>
    <th class="profile">Tuesday</th>
    <th class="profile">Wednesday</th>
    <th class="profile">Thursday</th>
    <th class="profile">Friday</th>
    <th class="profile">Saturday</th>
    <th class="profile">Sunday</th>
  </tr>
  <tbody id="table" class="profile">
  </tbody>
</table>

<script src="{{ '/assets/js/calender.js' | relative_url }}"></script>

## Next steps
> You have finally finished your journey:
- This calendar will help keep you organized
- Make sure to use this every workout
- You can signup and save all the steps to your fitness journey: [Signup](https://jakewarren2414.github.io/dolphins2/signup)
<div style="padding: 150px;">
</div>