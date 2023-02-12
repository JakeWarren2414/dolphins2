window.onload = function() {
    fetch("https://jakewarren2414.github.io/dolphins2/assets/json/userdata.json")
    .then(response => response.json())
    .then(data => {
      const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
      const table = document.getElementById("table");
      data.Users.forEach(user => {
        const row = table.insertRow();
        for (let i = 0; i < 7; i++) {
          const cell = row.insertCell(i);
          cell.innerHTML = user[days[i]];
          cell.setAttribute("id", days[i]);
        }
      });
    });
    days.forEach(day => {
      const elementId = day.toLowerCase();
      document.getElementById(elementId).innerText = localStorage.getItem(day);
    });
    tasks();
  };