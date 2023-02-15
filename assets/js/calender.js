const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];


function Remove() {
    var week = document.getElementById("week").value;
    document.getElementById(week.toLowerCase()).innerText = "";
  }
// When the screen reloads this function happens that cycles through each day and uses the local storage for it
window.onload = function() {
  days.forEach(day => {
    const elementId = day.toLowerCase();
    document.getElementById(elementId).innerText = localStorage.getItem(day);
  });
};
// Goes through each day and saves it
function Save() {
  days.forEach(day => {
    const elementId = day.toLowerCase();
    localStorage.setItem(day, document.getElementById(elementId).innerText);
  });
  location.href="#workout-calender";
}
// The function to add workouts to your calender
function Add() {
  const input = document.getElementById("input").value;
  const week = document.getElementById("week").value;
  const dayId = week.toLowerCase();
  document.getElementById(dayId).innerText = input + ", " + document.getElementById(dayId).innerText;
}
