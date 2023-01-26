## Nutrition Help
> Your daily calories are below, input the amount of calories you have eaten and click enter to see how much you have left
- Your daily amount of calories is __________
<br>
   <input type="number" id="C2">
   <button onclick="calc()">=</button>
   <div id="result"></div>

   <button>Add food</button>
   <p>Will add an "alert" function to append foods with calories to lists</p>

   <form>
  <label for="age">Age:</label>
  <input type="number" id="age" name="age"><br><br>
  <label for="sex">Sex:</label>
  <input type="text" id="sex" name="sex"><br><br>
  <label for="height">Height (in inches):</label>
  <input type="number" id="height" name="height"><br><br>
  <label for="weight">Weight (in pounds):</label>
  <input type="number" id="weight" name="weight">
</form>
<button onclick="calculateCalories()">Result</button>
 
 <script>
       function calc() {
           let a = Number(document.getElementById("C1").innerHTML);
           let b = Number(document.getElementById("C2").value);
           let result = a - b;
           document.getElementById("result").innerHTML = result;
       }
       function calculateCalories() {
    let age = document.getElementById("age").value;
    let sex = document.getElementById("sex").value;
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;
    let BMR;
    if (sex === "male") {
      BMR = 66 + (6.23 * weight) + (12.7 * height) - (6.8 * age);
    } else if (sex === "female") {
      BMR = 655 + (4.35 * weight) + (4.7 * height) - (4.7 * age);
    }
    let TDEE = BMR * 1.2;
    document.getElementById("result").innerHTML = "Your daily calorie amount is " + TDEE;
  }
   </script>



## Next steps
> Implement the correct foods into your diet to see results
- It may be hard but you can find creative ways to combine healthy foods
- However, what is the point of a healthy diet with our a healthy life style Check out our workouts page:  [Workouts](https://jakewarren2414.github.io/dolphins2/workout)
<div style="padding: 150px;">
