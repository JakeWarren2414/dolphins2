<body>
    <h1 id="foodtitle">Nutrition Help</h1>

<p>Your daily calories are below, input the amount of calories you have eaten and click enter to see how much you have left</p>
    <!-- Calorie will be paired with your profile-->

<p> Your daily amount of calories is (2000 is a placeholder for now): <p id="C1">2000</p></p>
   <input type="number" id="C2">
   <button onclick="calc()">=</button>
   <div id="result"></div>
    <script>
       function calc() {
           var a = Number(document.getElementById("C1").innerHTML);
           var b = Number(document.getElementById("C2").value);
           var result = a - b;
           document.getElementById("result").innerHTML = result;
       }
   </script>
</body>