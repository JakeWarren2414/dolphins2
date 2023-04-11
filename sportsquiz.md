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
<h3>Which sport will you like to remove?</h3>
<div data-aos="fade-right">
 <h3>Which sport will you like to remove?</h3>
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
 <button id="remove-button">Remove</button>
 <p>Your removed sports are <span id="removed-sport"></span></p>
</div>


<script>
 // JavaScript code that listens to a click on the "Remove" button and removes the selected sport from the list
 const removeButton = document.getElementById('remove-button');
 const sportSelect = document.getElementById('sport-select');
 const removedSportElement = document.getElementById('removed-sport');


 removeButton.addEventListener('click', function() {
   const selectedSport = sportSelect.value;
   removeSport(selectedSport);
 });


 // JavaScript code that removes the selected sport from the list
 function removeSport(selectedSport) {
   const optionToRemove = sportSelect.querySelector(`option[value="${selectedSport}"]`);
   if (optionToRemove) {
     sportSelect.remove(optionToRemove.index);
     removedSportElement.textContent = selectedSport;
   }
 }
</script>





