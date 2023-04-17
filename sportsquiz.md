<script> AOS.init();</script>
<div data-aos="fade-right">
<h2>Sports quiz</h2>
<div id="question1">
<p>Are you competitive?</p>
<button onclick="answer(true)">Yes</button>
<button onclick="answer(false)">No</button>
</div>
<div id="question2" style="display: none">
<p>Do you want to play with a ball?</p>
<button onclick="answer(true)">Yes</button>
<button onclick="answer(false)">No</button>
</div>
<div id="question3" style="display: none">
<p>Do you like contact sports?</p>
<button onclick="answer(true)">Yes</button>
<button onclick="answer(false)">No</button>
</div>
<div id="question4" style="display: none">
<p>Do you want to play outside?</p>
<button onclick="answer(true)">Yes</button>
<button onclick="answer(false)">No</button>
</div>
<div id="question5" style="display: none">
<p>Do you want to play on a team?</p>
<button onclick="answer(true)">Yes</button>
<button onclick="answer(false)">No</button>
</div>
<div id="question6" style="display: none">
<p>Do you want your sport to involve running?</p>
<button onclick="answer(true)">Yes</button>
<button onclick="answer(false)">No</button>
</div>
<div id="result" style="display: none"></div>
</div>


<div style="padding: 10px;"></div>






<div data-aos="fade-right">
<h3>Which sport will you like to pursue?</h3>
<select id="sport-select">
  <option>Basketball</option>
  <option>Soccer</option>
  <option>Baseball</option>
  <option>Football</option>
  <option>Volleyball</option>
  <option>Running</option>
  <option>Swimming</option>
  <option>Gymnastics</option>
  <option>Tennis</option>
  <option>Track and Field</option>
  <option>Golf</option>
  <option>Bowling</option>
  <option>Frisbee</option>
  <option>Hiking</option>
  <option>Yoga</option>
  <option>Meditation</option>
  <option>Ultimate Frisbee</option>
  <option>Beach Volleyball</option>
  <option>Indoor Soccer</option>
  <option>Indoor Volleyball</option>
  <option>Indoor Track and Field</option>
  <option>Rock Climbing</option>
  <option>Camping</option>
  <option>Rugby</option>
  <option>Hockey</option>
  <option>Lacrosse</option>
  <option>Wresling</option>
  <option>Flag Football</option>
  <option>Touch Football</option>
</select>
<button id="save-button">Save</button>
<p>Your current sport is <span id="saved-sport"></span></p>
</div>

<script>
// JavaScript code that listens to a click on the "Save" button and saves the selected value to local storage
const saveButton = document.getElementById('save-button');
const sportSelect = document.getElementById('sport-select');


saveButton.addEventListener('click', function() {
 const selectedSport = sportSelect.value;
 localStorage.setItem('selectedSport', selectedSport);
 displaySavedSport(selectedSport);
});


// JavaScript code that displays the saved value on the website
function displaySavedSport(selectedSport) {
 const savedSportElement = document.getElementById('saved-sport');
 savedSportElement.textContent = selectedSport;
}


// JavaScript code that retrieves and displays the saved value when the page is loaded
const savedSport = localStorage.getItem('selectedSport');
if (savedSport) {
 displaySavedSport(savedSport);
}
</script>





<div data-aos="fade-right">
  <h3>Choose a sport to remove:</h3>
  <select id="sport-select">
    <option value="Basketball">Basketball</option>
    <option value="Soccer">Soccer</option>
    <option value="Baseball">Baseball</option>
    <option value="Football">Football</option>
    <option value="Volleyball">Volleyball</option>
    <option value="Running">Running</option>
    <option value="Swimming">Swimming</option>
    <option value="Gymnastics">Gymnastics</option>
    <option value="Tennis">Tennis</option>
    <option value="Track and Field">Track and Field</option>
    <option value="Golf">Golf</option>
    <option value="Bowling">Bowling</option>
    <option value="Frisbee">Frisbee</option>
    <option value="Hiking">Hiking</option>
    <option value="Yoga">Yoga</option>
    <option value="Meditation">Meditation</option>
    <option value="Ultimate Frisbee">Ultimate Frisbee</option>
    <option value="Beach Volleyball">Beach Volleyball</option>
    <option value="Indoor Soccer">Indoor Soccer</option>
    <option value="Indoor Volleyball">Indoor Volleyball</option>
    <option value="Indoor Track and Field">Indoor Track and Field</option>
    <option value="Rock Climbing">Rock Climbing</option>
    <option value="Camping">Camping</option>
    <option value="Rugby">Rugby</option>
    <option value="Hockey">Hockey</option>
    <option value="Lacrosse">Lacrosse</option>
    <option value="Wresling">Wresling</option>
    <option value="Flag Football">Flag Football</option>
    <option value="Touch Football">Touch Football</option>
  </select>
  <button id="submit-button">Remove</button>
</div>


<script>
  const submitButton = document.getElementById('submit-button');
  const sportSelect = document.getElementById('sport-select');
  let sportsList = ["Basketball", "Soccer", "Baseball", "Football", "Volleyball", "Running", "Swimming", "Gymnastics", "Tennis", "Track and Field", "Golf", "Bowling", "Frisbee", "Hiking", "Yoga", "Meditation", "Ultimate Frisbee", "Beach Volleyball", "Indoor Soccer", "Indoor Volleyball", "Indoor Track and Field", "Rock Climbing", "Camping", "Rugby", "Hockey", "Lacrosse", "Wresling", "Flag Football", "Touch Football"];

  submitButton.addEventListener('click', function() {
    const selectedSport = sportSelect.value;
    removeSport(selectedSport);
  });

  function removeSport(sport) {
    sportsList = sportsList.filter(item => item !== sport);
    console.log(`Removing sport: ${sport}`);
    console.log(`Updated sports list: ${sportsList}`);
  }
</script>


<script>
// sports list
var sportsList = ["basketball", "soccer", "baseball", "football", "volleyball", "running", "swimming", "gymnastics", "tennis", "track and field", "golf", "bowling", "frisbee", "hiking", "yoga", "meditation", "ultimate frisbee", "beach volleyball", "indoor soccer", "indoor volleyball", "indoor track and field", "rock climbing", "camping", "rugby", "hockey", "lacrosse", "wrestling", "flag football", "touch football"];
// sets what question you are one
var currentQuestion = 1;
// Array for the answer to the questions
var answers = [];
// function for the questions
function answer(response) {
 // finds what answer it is on and hids it or unhides it
 answers[currentQuestion - 1] = response;
 document.getElementById("question" + currentQuestion).style.display = "none";
 currentQuestion++;
 if(currentQuestion <= 6) {
   document.getElementById("question" + currentQuestion).style.display = "block";
 } else {
   removeSports(answers[0], answers[1], answers[2], answers[3], answers[4], answers[5]);
   document.getElementById("result").style.display = "block";
   document.getElementById("result").innerHTML = "Based on your answers, we recommend the following sports: " + sportsList.join(", ");
 }
}








// function to remove sports from the list
function removeSports(isCompetitive, wantsBall, likesContact, wantsOutside, wantsTeam, wantsRunning) {
if (!isCompetitive) {
 // Using the array that the user has made uses the ! as a sort of not operator and makes a sport function inside the filter to either exlucde or keep sports
 sportsList = sportsList.filter(sport => sport !== "basketball" && sport !== "soccer" && sport !== "baseball" && sport !== "football" && sport !== "volleyball" && sport !== "swimming" && sport !== "gymnastics" && sport !== "tennis" );
}
// Goes through the same process for the rest of the if statments
if (!wantsBall) {
 sportsList = sportsList.filter(sport => sport !== "basketball" && sport !== "soccer" && sport !== "baseball" && sport !== "football" && sport !== "volleyball" && sport !== "golf" && sport !== "bowling" && sport !== "frisbee" );
}
if (!likesContact) {
 sportsList = sportsList.filter(sport => sport !== "football" && sport !== "rugby" && sport !== "hockey" && sport !== "lacrosse" && sport !== "wrestling" );
}
if (!wantsOutside) {
 sportsList = sportsList.filter(sport => sport !== "soccer" && sport !== "baseball" && sport !== "football" && sport !== "ultimate frisbee" && sport !== "beach volleyball" && sport !== "hiking" && sport !== "rock climbing" && sport !== "camping" );
}
if (!wantsTeam) {
 sportsList = sportsList.filter(sport => sport !== "basketball" && sport !== "soccer" && sport !== "baseball" && sport !== "football" && sport !== "frisbee" && sport !== "ultimate frisbee" && sport !== "beach volleyball" && sport !== "indoor soccer" && sport !== "indoor volleyball" && sport !== "rugby" && sport !== "hockey" && sport !== "lacrosse" );
}
if (!wantsRunning) {
 sportsList = sportsList.filter(sport => sport !== "soccer" && sport !== "baseball" && sport !== "football" && sport !== "running" && sport !== "track and field" && sport !== "frisbee" && sport !== "indoor soccer" && sport !== "indoor track and field" && sport !== "rugby" && sport !== "lacrosse" && sport !== "flag football" && sport !== "touch football" );
}
if (isCompetitive) {
 // Using the array that the user has made uses the ! as a sort of not operator and makes a sport function inside the filter to either exlucde or keep sports
 sportsList = sportsList.filter(sport => sport !== "golf" && sport !== "bowling" && sport !== "frisbee" && sport !== "hiking" && sport !== "meditation" && sport !== "ultimate frisbee" && sport !== "indoor volleyball" && sport !== "camping" );
}
// Goes through the same process for the rest of the if statments
if (wantsBall) {
 sportsList = sportsList.filter(sport => sport !== "running" && sport !== "swimming" && sport !== "gymnastics" && sport !== "hiking" && sport !== "track and field" && sport !== "yoga" && sport !== "meditation" && sport !== "indoor track and field" && sport !== "rock climbing" && sport !== "camping" && sport !== "wrestling" );
}
if (likesContact) {
 sportsList = sportsList.filter(sport => sport !== "swimming" && sport !== "running" && sport !== "gymnastics" && sport !== "tennis" && sport !== "track and field" && sport !== "golf" && sport !== "bowling" && sport !== "hiking" && sport !== "yoga" && sport !== "meditation" && sport !== "indoor track and field" );
}
if (wantsOutside) {
 sportsList = sportsList.filter(sport => sport !== "bowling" && sport !== "indoor soccer" && sport !== "indoor volleyball" && sport !== "indoor track and field" && sport !== "hockey" && sport !== "wrestling");
}
if (wantsTeam) {
 sportsList = sportsList.filter(sport => sport !== "golf" && sport !== "hiking" && sport !== "yoga" && sport !== "meditation" && sport !== "rock climbing" && sport !== "camping");
}
if (wantsRunning) {
 sportsList = sportsList.filter(sport => sport !== "swimming" && sport !== "golf" && sport !== "bowling" && sport !== "hiking" && sport !== "yoga" && sport !== "meditation" && sport !== "rock climbing" && sport !== "camping" && sport !== "wrestling" );
}
}
// The result of the function
document.getElementById("result").innerHTML = "Based on your answers, we recommend the following sports: " + sportsList.join(", ");




</script>

<div data-aos="fade-right">
<h2>Next Steps</h2>
<blockquote>
<p>You are almost done with your journey:</p>
<ul>
  <li>Now that you have chosen a fun sport to play you can begin exercising</li>
  <li>This is an integral part of fitness</li>
  <li>You also should start working out to get better at your sport and feel better overall: <a href="https://jakewarren2414.github.io/dolphins2/workout">Workouts</a></li>
</ul>
</blockquote>
</div>
<div style="padding: 150px;">
</div>
