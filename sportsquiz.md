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
<div id="result" style="display: none"></div>

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
    if(currentQuestion <= 4) {
      document.getElementById("question" + currentQuestion).style.display = "block";
    } else {
      removeSports(answers[0], answers[1], answers[2], answers[3]);
      document.getElementById("result").style.display = "block";
      document.getElementById("result").innerHTML = "Based on your answers, we recommend the following sports: " + sportsList.join(", ");
    }
  }

  // function to remove sports from the list
  function removeSports(isCompetitive, wantsBall, likesContact, wantsOutside) {
  if (!isCompetitive) {
    // Using the array that the user has made uses the ! as a sort of not operator and makes a sport function inside the filter to either exlucde or keep sports
    sportsList = sportsList.filter(sport => sport !== "basketball" && sport !== "soccer" && sport !== "baseball" && sport !== "football" && sport !== "volleyball" && sport !== "running" && sport !== "swimming" && sport !== "gymnastics" && sport !== "tennis" && sport !== "track and field" && sport !== "rugby" && sport !== "hockey" && sport !== "lacrosse" && sport !== "wrestling" );
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
  }
  // The result of the function
  document.getElementById("result").innerHTML = "Based on your answers, we recommend the following sports: " + sportsList.join(", ");
</script>