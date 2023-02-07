const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];


function Remove() {
    var week = document.getElementById("week").value;
    document.getElementById(week.toLowerCase()).innerText = "";
  }
// When the screen reloads this function happens that cycles through each day and uses the local storage for it
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
// Goes through each day and saves it
function Save() {
  days.forEach(day => {
    const elementId = day.toLowerCase();
    localStorage.setItem(day, document.getElementById(elementId).innerText);
  });
  tasks();
  location.href="#workout-calender";
}
// The function to add workouts to your calender
function Add() {
  const input = document.getElementById("input").value;
  const week = document.getElementById("week").value;
  const dayId = week.toLowerCase();
  const newDiv = document.createElement("div");
  newDiv.innerText = input;
  document.getElementById(dayId).appendChild(newDiv);
}
