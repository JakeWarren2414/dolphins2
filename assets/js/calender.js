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
  tasks();
};
// Goes through each day and saves it
function Save() {
  days.forEach(day => {
    const elementId = day.toLowerCase();
    localStorage.setItem(day, document.getElementById(elementId).innerText);
  });
  tasks();
  location.href="#";
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

  

//displays the day for the first part of daily tasks
function displayDayOfWeek() {
    var x = document.getElementById("saver").value;
    var d = new Date();
    var day = days[d.getDay()];
    document.getElementById("days").innerHTML = "Today is " + day + " these are your tasks:";
}
setInterval(displayDayOfWeek, 1000);

// takes the day and then grabs
function tasks() {
  var currentDay = new Date().getDay();
  var day = days[currentDay];

  var tasksDiv = document.createElement("div");
  tasksDiv.classList.add("row2");
  tasksDiv.innerText = document.getElementById(day.toLowerCase()).innerText;

  document.getElementById("tasks").appendChild(tasksDiv);

}
