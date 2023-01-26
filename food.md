## Nutrition Help
> Your daily calories are below, input the amount of calories you have eaten and click enter to see how much you have left
- Your daily amount of calories is______________
<br>
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

## Next steps
> Implement the correct foods into your diet to see results
- It may be hard but you can find creative ways to combine healthy foods
- However, what is the point of a healthy diet with our a healthy life style? Check out our workouts page:  [Workouts](https://jakewarren2414.github.io/dolphins2/workout)
<div style="padding: 150px;">
</div