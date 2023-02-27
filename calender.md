<script> AOS.init();</script>
<div data-aos="fade-right"><h1>Other Peoples Tables</h1></div>
<div data-aos="fade-up">
  <table class="profile">
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


<script> AOS.init();</script>
<div data-aos="fade-right"><h1>Other Peoples Calenders</h1></div>
<div data-aos="fade-up">
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
</div>

<script>
const tableBody = document.querySelector('#table');

fetch('https://dolphin.nighthawkcodingsociety.com/api/users/')
  .then(response => response.json())
  .then(data => {
    data.forEach(user => {
      const newRow = document.createElement('tr');
      newRow.innerHTML = `
        <td>${user.monday}</td>
        <td>${user.tuesday}</td>
        <td>${user.wednesday}</td>
        <td>${user.thursday}</td>
        <td>${user.friday}</td>
        <td>${user.saturday}</td>
        <td>${user.sunday}</td>
      `;
      tableBody.appendChild(newRow);
    });
  });

</script>
