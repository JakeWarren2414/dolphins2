<!--Login Frontmatter-->
<div style="padding: 5px;">
    <h3>Login</h3>
</div>
<div style="padding:5px">
    <label for="username">Username</label>
    <input type="text">
</div>
<div style="padding:5px">
    <label for="password">Password</label>
    <input type="text">
</div>
<div style="padding:5px">
    <p> Dont have an account? <a href="https://jakewarren2414.github.io/dolphins2/">Sign Up</a></p>
</div>


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
        <option value="monday">Monday</option>
        <option value="tuesday">Tuesday</option>
        <option value="wednesday">Wednesday</option>
        <option value="thursday">Thursday</option>
        <option value="friday">Friday</option>
        <option value="saturday">Saturday</option>
        <option value="sunday">Sunday</option>
      </select>
    </td>
    <td><button>Apply</button></td>
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
    <td id="monday"></td>
    <td id="tuesday"></td>
    <td id="wednesday"></td>
    <td id="thursday"></td>
    <td id="friday"></td>
    <td id="saturday"></td>
    <td id="sunday"></td>
  </tr>
</table>