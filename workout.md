## Workout Routine
> Here are steps to improve your workouts
- Workout 3 days in a row and take one rest day
- Make sure to start out easy then go harder
- Progressive overload is important and it essentially means to make the workout a little bit harder every time
- Warm-ups are very important
- The different types of workout days are Push, Pull, Legs, and Cardio
<br>
<br>


## Which workout day do you want to learn about?


<table>
 <tr>
   <th><button onclick="revPush()">Push</button></th>
   <th><button onclick="revPull()">Pull</button></th>
   <th><button onclick="revLeg()">Legs</button></th>
   <th><button onclick="revCard()">Cardio</button></th>
 </tr>
</table>


<script>
   function revPush() {
   var x = document.getElementById("push");
   if (x.style.display === "none") {
     x.style.display = "table-row";
   } else {
     x.style.display = "none";
   }
 }
function revPull() {
   var x = document.getElementById("pull");
   if (x.style.display === "none") {
     x.style.display = "table-row";
   } else {
     x.style.display = "none";
   }
 }
function revLeg() {
   var x = document.getElementById("leg");
   if (x.style.display === "none") {
     x.style.display = "table-row";
   } else {
     x.style.display = "none";
   }
 }
function revCard() {
   var x = document.getElementById("cardio");
   if (x.style.display === "none") {
     x.style.display = "table";
   } else {
     x.style.display = "none";
   }
 }
</script>
<br>


<table>
<tr>
<th>Lifting Routine</th>
<th>Description</th>
<th>Workout 1</th>
<th>Workout 2</th>
<th>Workout 3</th>
<th>Workout 4</th>
<th>Workout 5</th>
<th>Workout 6</th>
<th>Workout 7</th>
<th>Workout 8</th>
<th>Workout 9</th>
</tr>
<tr id="push" style="display: none;">
 <th>Push Day</th>
 <td>On Push Day you work the chest, shoulders, and triceps.</td>
 <td>Bench Press <img width= "200p" height="100p" src="https://static.strengthlevel.com/images/illustrations/bench-press-1000x1000.jpg"></td>
 <td>Incline Bench Press <img width= "200p" height="100p" src="https://static.strengthlevel.com/images/illustrations/incline-bench-press-1000x1000.jpg"></td>
 <td>Chest Fly <img width= "200p" height="100p" src="https://static.strengthlevel.com/images/illustrations/dumbbell-fly-1000x1000.jpg"></td>
 <td>Shoulder Press <img width= "200p" height="100p" src="https://static.strengthlevel.com/images/illustrations/dumbbell-shoulder-press-1000x1000.jpg"></td>
 <td>Lateral Raise <img width= "200p" height="100p" src="https://static.strengthlevel.com/images/illustrations/dumbbell-lateral-raise-1000x1000.jpg"></td>
 <td>Shoulder Shrug <img width= "200p" height="100p" src="https://cdn.shopify.com/s/files/1/0250/0362/2496/articles/5ee17b445694cd8620bba313_dumbbell-shrug-exercise-anabolic-aliens-p-500.png?v=1644921383"></td>
 <td>Tricep Dips <img width= "200p" height="100p" src="https://fitlifefanatics.com/wp-content/uploads/2019/11/seated-triceps-dip.jpg"></td>
 <td>Skull Crusher <img width= "200p" height="100p" src="https://cdn.shopify.com/s/files/1/0250/0362/2496/articles/5f13429eb890e6c107286be3_barbell-skull-crusher-anabolic-aliens-p-500.png?v=1644918985"></td>
 <td>Cable Tripcep Extension <img width= "200p" height="100p" src="https://static.strengthlevel.com/images/illustrations/cable-overhead-tricep-extension-1000x1000.jpg"></td>
</tr>
<tr id="pull" style="display: none;">
 <th>Pull Day</th>
 <td>On Pull Day you work the back and biceps.</td>
 <td>Barbell Bicep Curls <img width= "200p" height="100p" src="https://static.strengthlevel.com/images/illustrations/barbell-curl-1000x1000.jpg"></td>
 <td>Dumbell Side Curl <img width= "200p" height="100p" src="https://cdn.shopify.com/s/files/1/1876/4703/files/shutterstock_419477203_480x480.jpg?v=1636560233"></td>
 <td>Spider Curls <img width= "200p" height="100p" src="https://www.fitliferegime.com/wp-content/uploads/2022/07/Dumbbell-Reverse-Spider-Curl..webp"></td>
 <td>Deadlift <img width= "200p" height="100p" src="https://www.shutterstock.com/image-illustration/illustration-exercise-hex-bar-deadlift-260nw-2236273291.jpg"></td>
 <td>Barbell Row <img width= "200p" height="100p" src="https://fitnessstars.weebly.com/uploads/5/8/8/7/58879495/6355472_orig.png"></td>
 <td>Pullups <img width= "200p" height="100p" src="https://static.strengthlevel.com/images/illustrations/pull-ups-1000x1000.jpg"></td>
 <td>Landmine Row <img width= "200p" height="100p" src="https://www.pwfitness.ca/wp-content/uploads/2021/03/IMG_3035.jpg"></td>
 <td>Seated Cable Rows <img width= "200p" height="100p" src="https://static.strengthlevel.com/images/illustrations/seated-cable-row-1000x1000.jpg"></td>
 <td>Lateral Pull <img width= "200p" height="100p" src="https://static.strengthlevel.com/images/illustrations/lat-pulldown-1000x1000.jpg"></td>
</tr>
<tr id="leg" style="display: none;">
 <th>Leg Day</th>
 <td>On Leg Day you work the calves, hamstrings, quadriceps, and glutes</td>
 <td>Barbell Squats <img width= "200p" height="100p" src="https://static.strengthlevel.com/images/illustrations/squat-1000x1000.jpg"></td>
 <td>Split Squats <img width= "200p" height="100p" src="https://fuelforwellness.files.wordpress.com/2015/04/alternating-split-squat-jumps.png"></td>
 <td>Step-Ups <img width= "200p" height="100p" src="https://bodybuilding-wizard.com/wp-content/uploads/2015/01/dumbbell-step-up.jpg"></td>
 <td>Leg Curls <img width= "200p" height="100p" src="https://www.burnthefatinnercircle.com/members/images/1255.jpg"></td>
 <td>Single Leg Deadlift <img width= "200p" height="100p" src="https://static.strengthlevel.com/images/illustrations/single-leg-dumbbell-deadlift-1000x1000.jpg"></td>
 <td>Calf Raises <img width= "200p" height="100p" src="https://fitnessvolt.com/wp-content/uploads/2021/02/dumbbell-standing-calf-raise-.jpg"></td>
 <td>Bulgarian Split Squat <img width= "200p" height="100p" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpgXMwpVxSVv2kZCwG_-t_xGmIGvGbBdK8RQ&usqp=CAU"></td>
 <td>Side Lunge <img width= "200p" height="100p" src="https://s3.amazonaws.com/prod.skimble/assets/2286935/image_iphone.jpg"></td>
 <td>Barbell Glute Bridge <img width= "200p" height="100p" src="https://static.strengthlevel.com/images/illustrations/barbell-glute-bridge-1000x1000.jpg"></td>
</tr>
</table>




<br>


<table id="cardio" style="display: none;">
 <tr>
 <th>Cardio Routine</th>
 <th>Time</th>
 <th>Picture</th>
 </tr>
 <tr>
 <th>Running</th>
 <td>20 minutes + 3(number of weeks)</td>
 <td><img width= "200p" height="100p" src="https://www.shutterstock.com/image-vector/running-man-vector-sketch-icon-260nw-467756699.jpg"></td>
 </tr>
 <tr>
 <th>Biking</th>
 <td>30 minutes + 3(number of weeks)</td>
 <td><img width= "200p" height="100p" src="https://media.istockphoto.com/id/478305878/vector/athlete-riding-bycicle-side-view-drawing.jpg?s=612x612&w=0&k=20&c=0vFH5L-Hz_tjPeQ7SpUOfhWj8o8-kjJGWjDeEI1O2pU="></td>
 </tr>
 <tr>
 <th>Swimming</th>
 <td>20 minutes + 2(number of weeks)</td>
 <td><img width= "200p" height="100p" src="https://www.shutterstock.com/image-vector/illustration-swimmer-black-white-drawing-260nw-1863561151.jpg"></td>
 </tr>
</table>


## Next steps
> Finish your journey
- You have to be persistent in the gym even if your don't feel like goind
- Working out won't only improve your physical health but also your mental health
- Now that you have the correct workouts you have to know when to do them:  [Calender](https://jakewarren2414.github.io/dolphins2/calender)
<div style="padding: 150px;">
</div>

