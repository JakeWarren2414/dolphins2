<script>
  AOS.init();
</script>

<div data-aos="fade-right">
  <h1>Plan your Schedule</h1>
</div>

<div data-aos="fade-up">
  <table class="profile">
    <tr>
      <th><label for="workout">Type in Workout:</label></th>
      <th><label for="weeks">Choose a Day:</label></th>
      <th>Apply</th>
      <th>Remove</th>
      <th>Update</th>
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
      <td><button onclick="Update()" class="profile">Update</button></td>
    </tr>
  </table>

  <br>

  <table class="profile">
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
</div>

<script>
const tableBody = document.querySelector('#table');
const url = "http://dolphins3.duckdns.org/api/users/";
const calender_fetch = url + '/calender';
const weekdays = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
const urls = {};
for (const day of weekdays) {
  urls[day] = `${url}/${day}`;
  urls[`delete_${day}`] = `${url}/delete_${day}`;
  urls[`update_${day}`] = `${url}/update_${day}`;
}
if (sessionStorage.getItem("uid") == null) {
  location.href = "https://jakewarren2414.github.io/dolphins2/login";
}
const body = {
  username: sessionStorage.getItem("uid")
};
const requestOptions = {
  method: 'POST',
  body: JSON.stringify(body),
  headers: {
    "content-type": "application/json",
  },
};
fetch(calender_fetch, requestOptions)
  .then(response => {
    if (response.status !== 200) {
      const errorMsg = 'Database create error: ' + response.status;
      console.log(errorMsg);
      return;
    }
    response.json().then(data => {
      document.getElementById("monday").innerHTML = data.monday;
      document.getElementById("tuesday").innerHTML = data.tuesday;
      document.getElementById("wednesday").innerHTML = data.wednesday;
      document.getElementById("thursday").innerHTML = data.thursday;
      document.getElementById("friday").innerHTML = data.friday;
      document.getElementById("saturday").innerHTML = data.saturday;
      document.getElementById("sunday").innerHTML = data.sunday;
    })
  })
function Update() {
  const input = document.getElementById("input").value;
  const week = document.getElementById("week").value;
  const body = {
    username: sessionStorage.getItem("uid")
  };
  body[week] = input;
  const request = {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      "content-type": "application/json",
    },
  };
  const url = urls[`update_${week}`];
  fetch(url, request)
    .then(response => {
      if (response.status !== 200) {
        const errorMsg = 'Database create error: ' + response.status;
        console.log(errorMsg);
        return;
      }
      response.json().then(data => {
        document.getElementById(week).innerHTML = data[week];
      })
    })
}


function Add() {
  const input = document.getElementById("input").value;
  const week = document.getElementById("week").value;
  const fetchUrl = ${week}_fetch;
  const dayValue = ${week};
  const dayBody = {
    username: sessionStorage.getItem("uid"),
    [dayValue]: input
  };
  const dayRequest = {
    method: 'POST',
    body: JSON.stringify(dayBody),
    headers: {
    "content-type": "application/json",
  },
  };
  fetch(fetchUrl, dayRequest)
  .then(response => {
    if (response.status !== 200) {
      const errorMsg = Database create error: ${response.status};
      console.log(errorMsg);
    return;
  }
  response.json().then(data => {
    document.getElementById(week).innerHTML = data[dayValue];
  })
  })
}

function Remove() {
  const week = document.getElementById("week").value;
  const delete_body = { username: sessionStorage.getItem("uid") };
  const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
  const delete_site = "delete_site_url";

  if (days.includes(week)) {
    const delete_request = {
      method: 'POST',
      body: JSON.stringify(delete_body),
      headers: { "content-type": "application/json" },
    };
    fetch(`${delete_site}/${week}`, delete_request)
      .then(response => {
        if (response.status !== 200) {
          const errorMsg = `Database create error: ${response.status}`;
          console.log(errorMsg);
          return;
        }
        response.json().then(data => {
          document.getElementById(week).innerHTML = data[week];
        })
      })
  }
}
// fetch('https://dolphin.nighthawkcodingsociety.com/api/users/')
//   .then(response => response.json())
//   .then(data => {
//     data.forEach(user => {
//       const newRow = document.createElement('tr');
//       newRow.innerHTML = `
//         <td>${user.monday}</td>
//         <td>${user.tuesday}</td>
//         <td>${user.wednesday}</td>
//         <td>${user.thursday}</td>
//         <td>${user.friday}</td>
//         <td>${user.saturday}</td>
//         <td>${user.sunday}</td>
//       `;
//       tableBody.appendChild(newRow);
//     });
//   });
</script>
## Need Help Deciding
> This link will show you everyone elses workout calenders to help make yours
- [Link](https://jakewarren2414.github.io/dolphins2/calendercool)

## Next steps
> You have finally finished your journey:
- This calendar will help keep you organized
- Make sure to use this every workout
- You can signup and save all the steps to your fitness journey: [Signup](https://jakewarren2414.github.io/dolphins2/signup)
<div style="padding: 150px;">
</div>