<!--Login Frontmatter-->
<div style="padding: 5px;">
    <h3>Login</h3>
</div>
<div style="padding:5px">
    <label for="username">Username</label>
    <input type="text">
</div>
<div style="padding:5px">
    <label for="password">Password</label>
    <input type="text">
</div>
<div style="padding:5px">
    <p> Dont have an account? <a href="https://jakewarren2414.github.io/dolphins2/">Sign Up</a></p>
</div>

<h1>Nutrition Help</h1>

<h3>Your daily calories are below, input the amount of calories you have eaten and click enter to see how much you have left</h3>
<!-- Calorie will be paired with your profile-->
<h3 id="C1">2000</h>
<input type="number" id="C2">
<button onclick="calc()">=</button>
<div id="result"></div>


<h3> Nutrition Tips </h3>
<p>blah blah blah</p>

<script>
    function calc() {
        var a = Number(document.getElementById("C1").innerHTML);
        var b = Number(document.getElementById("C2").value);
        var result = a - b;
        document.getElementById("result").innerHTML = result;
    }
</script>
