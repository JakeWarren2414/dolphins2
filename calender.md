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
const url = "https://dolphin.nighthawkcodingsociety.com/api/users";
const calender_fetch = url + '/calender';
const monday_fetch = url + '/monday';
const tuesday_fetch = url + '/tuesday';
const wednesday_fetch = url + '/wednesday';
const thursday_fetch = url + '/thursday';
const friday_fetch = url + '/friday';
const saturday_fetch = url + '/saturday';
const sunday_fetch = url + '/sunday';
const monday_delete_site = url + '/delete_monday';
const tuesday_delete_site = url + '/delete_tuesday';
const wednesday_delete_site = url + '/delete_wednesday';
const thursday_delete_site = url + '/delete_thursday';
const friday_delete_site = url + '/delete_friday';
const saturday_delete_site = url + '/delete_saturday';
const sunday_delete_site = url + '/delete_sunday';

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

function Add() {
  const input = document.getElementById("input").value;
  const week = document.getElementById("week").value;
  if (week == "monday") {
    const monday_body = {
      username: sessionStorage.getItem("uid"),
      monday: input
    };
    const monday_request = {
      method: 'POST',
      body: JSON.stringify(monday_body),
      headers: {
        "content-type": "application/json",
      },
    };
     fetch(monday_fetch, monday_request)
    .then(response => {
      if (response.status !== 200) {
        const errorMsg = 'Database create error: ' + response.status;
        console.log(errorMsg);
        return;
      }
      response.json().then(data => {
        document.getElementById("monday").innerHTML = data.monday;
      })
    })
  }
  if (week == "tuesday") {
    const tuesday_body = {
      username: sessionStorage.getItem("uid"),
      tuesday: input
    };
    const tuesday_request = {
      method: 'POST',
      body: JSON.stringify(tuesday_body),
      headers: {
        "content-type": "application/json",
      },
    };
     fetch(tuesday_fetch, tuesday_request)
    .then(response => {
      if (response.status !== 200) {
        const errorMsg = 'Database create error: ' + response.status;
        console.log(errorMsg);
        return;
      }
      response.json().then(data => {
        document.getElementById("tuesday").innerHTML = data.tuesday;
      })
    })
  }
  if (week == "wednesday") {
    const wednesday_body = {
      username: sessionStorage.getItem("uid"),
      wednesday: input
    };
    const wednesday_request = {
      method: 'POST',
      body: JSON.stringify(wednesday_body),
      headers: {
        "content-type": "application/json",
      },
    };
     fetch(wednesday_fetch, wednesday_request)
    .then(response => {
      if (response.status !== 200) {
        const errorMsg = 'Database create error: ' + response.status;
        console.log(errorMsg);
        return;
      }
      response.json().then(data => {
        document.getElementById("wednesday").innerHTML = data.wednesday;
      })
    })
  }
  if (week == "thursday") {
    const thursday_body = {
      username: sessionStorage.getItem("uid"),
      thursday: input
    };
    const thursday_request = {
      method: 'POST',
      body: JSON.stringify(thursday_body),
      headers: {
        "content-type": "application/json",
      },
    };
     fetch(thursday_fetch, thursday_request)
    .then(response => {
      if (response.status !== 200) {
        const errorMsg = 'Database create error: ' + response.status;
        console.log(errorMsg);
        return;
      }
      response.json().then(data => {
        document.getElementById("thursday").innerHTML = data.thursday;
      })
    })
  }
  if (week == "friday") {
    const friday_body = {
      username: sessionStorage.getItem("uid"),
      friday: input
    };
    const friday_request = {
      method: 'POST',
      body: JSON.stringify(friday_body),
      headers: {
        "content-type": "application/json",
      },
    };
     fetch(friday_fetch, friday_request)
    .then(response => {
      if (response.status !== 200) {
        const errorMsg = 'Database create error: ' + response.status;
        console.log(errorMsg);
        return;
      }
      response.json().then(data => {
        document.getElementById("friday").innerHTML = data.friday;
      })
    })
  }
  if (week == "saturday") {
    const saturday_body = {
      username: sessionStorage.getItem("uid"),
      saturday: input
    };
    const saturday_request = {
      method: 'POST',
      body: JSON.stringify(saturday_body),
      headers: {
        "content-type": "application/json",
      },
    };
     fetch(saturday_fetch, saturday_request)
    .then(response => {
      if (response.status !== 200) {
        const errorMsg = 'Database create error: ' + response.status;
        console.log(errorMsg);
        return;
      }
      response.json().then(data => {
        document.getElementById("saturday").innerHTML = data.saturday;
      })
    })
  }
  if (week == "sunday") {
    const sunday_body = {
      username: sessionStorage.getItem("uid"),
      sunday: input
    };
    const sunday_request = {
      method: 'POST',
      body: JSON.stringify(sunday_body),
      headers: {
        "content-type": "application/json",
      },
    };
     fetch(sunday_fetch, sunday_request)
    .then(response => {
      if (response.status !== 200) {
        const errorMsg = 'Database create error: ' + response.status;
        console.log(errorMsg);
        return;
      }
      response.json().then(data => {
        document.getElementById("sunday").innerHTML = data.sunday;
      })
    })
  }

}
function Remove() {
  const week = document.getElementById("week").value;
  const delete_body = {
    username: sessionStorage.getItem("uid"),
  };
  if (week == "monday") {
    const monday_delete = {
      method: 'POST',
      body: JSON.stringify(delete_body),
      headers: {
        "content-type": "application/json",
      },
    };
     fetch(monday_delete_site, monday_delete)
    .then(response => {
      if (response.status !== 200) {
        const errorMsg = 'Database create error: ' + response.status;
        console.log(errorMsg);
        return;
      }
      response.json().then(data => {
        document.getElementById("monday").innerHTML = data.monday;
      })
    })
  }
  if (week == "tuesday") {
    const tuesday_delete = {
      method: 'POST',
      body: JSON.stringify(delete_body),
      headers: {
        "content-type": "application/json",
      },
    };
     fetch(tuesday_delete_site, tuesday_delete)
    .then(response => {
      if (response.status !== 200) {
        const errorMsg = 'Database create error: ' + response.status;
        console.log(errorMsg);
        return;
      }
      response.json().then(data => {
        document.getElementById("tuesday").innerHTML = data.tuesday;
      })
    })
  }
  if (week == "wednesday") {
    const wednesday_delete = {
      method: 'POST',
      body: JSON.stringify(delete_body),
      headers: {
        "content-type": "application/json",
      },
    };
     fetch(wednesday_delete_site, wednesday_delete)
    .then(response => {
      if (response.status !== 200) {
        const errorMsg = 'Database create error: ' + response.status;
        console.log(errorMsg);
        return;
      }
      response.json().then(data => {
        document.getElementById("wednesday").innerHTML = data.wednesday;
      })
    })
  }
  if (week == "thursday") {
    const thursday_delete = {
      method: 'POST',
      body: JSON.stringify(delete_body),
      headers: {
        "content-type": "application/json",
      },
    };
     fetch(thursday_delete_site, thursday_delete)
    .then(response => {
      if (response.status !== 200) {
        const errorMsg = 'Database create error: ' + response.status;
        console.log(errorMsg);
        return;
      }
      response.json().then(data => {
        document.getElementById("thursday").innerHTML = data.thursday;
      })
    })
  }
  if (week == "friday") {
    const friday_delete = {
      method: 'POST',
      body: JSON.stringify(delete_body),
      headers: {
        "content-type": "application/json",
      },
    };
     fetch(friday_delete_site, friday_delete)
    .then(response => {
      if (response.status !== 200) {
        const errorMsg = 'Database create error: ' + response.status;
        console.log(errorMsg);
        return;
      }
      response.json().then(data => {
        document.getElementById("friday").innerHTML = data.friday;
      })
    })
  }
  if (week == "saturday") {
    const saturday_delete = {
      method: 'POST',
      body: JSON.stringify(delete_body),
      headers: {
        "content-type": "application/json",
      },
    };
     fetch(saturday_delete_site, saturday_delete)
    .then(response => {
      if (response.status !== 200) {
        const errorMsg = 'Database create error: ' + response.status;
        console.log(errorMsg);
        return;
      }
      response.json().then(data => {
        document.getElementById("saturday").innerHTML = data.saturday;
      })
    })
  }
  if (week == "sunday") {
    const sunday_delete = {
      method: 'POST',
      body: JSON.stringify(delete_body),
      headers: {
        "content-type": "application/json",
      },
    };
     fetch(sunday_delete_site, sunday_delete)
    .then(response => {
      if (response.status !== 200) {
        const errorMsg = 'Database create error: ' + response.status;
        console.log(errorMsg);
        return;
      }
      response.json().then(data => {
        document.getElementById("sunday").innerHTML = data.sunday;
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