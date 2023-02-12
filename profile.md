<h1>Welcome Back<h1 id="name"></h1></h1>
<div class="profile">Your BMI is <div id="BMI"></div></div>
<div class="profile">Your MaxCalories is <div id="MAXCAL"></div></div>
<div class="profile">Current Sport: <div id="currentsport"></div></div>

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

<script src="{{ '/assets/js/profilecalender.js' | relative_url }}"></script>


<!--TO DO -->

<!--Takes the data from your acount and puts it into each div -->
<!-- Make the code for it-->
<script>
    function profile() {
        fetch("");
        // PLAN FOR CODE
        // After Correct login we will assign the user var to the username to get the key for the JSON
        // Then it will take the the data from the JSON and assign it to the proper id
        // EX: document.getElementById("BMI").value; = datafromJSON (not real code)
    }
</script>