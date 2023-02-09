<!--Login Frontmatter-->
<body>
    <script></script>
    <h1 id="foodtitle">Calorie Management</h1>
    <div style="padding:5px">
        <label for="sex">Sex</label>
        <select name="sex" id="sex">
          <option value="female">Female</option>
          <option value="male">Male</option>
        </select>
    </div>
    <div style="padding:5px">
        <label for="age">Age</label>
        <input id="age" type="text">
    </div>
    <div style="padding:5px">
        <label for="height">Height (cm)</label>
        <input id="height" type="text">
    </div>
    <div style="padding:5px">
        <label for="weight">Weight (kg)</label>
        <input id="weight" type="text">
    </div>
    <div style="padding:5px">
        <label for="active">How Active Are You?</label>
        <select name="active" id="active">
          <option value="1.2">Very Little</option>
          <option value="1.375">Light</option>
          <option value="1.55">Moderate</option>
          <option value="1.725">Very</option>
          <option value="1.9">Almost Completely</option>
        </select>
    </div>
    <div style="padding:5px">
      <button>
    </div>
    <p id="calResult">You burn 0 calories a day. This is the maximum amount of calories you can consume. Do not go over this.</p>
    <script>
      let basalMetabolicRate;
      function calorie() {
        let sex = document.getElementById("sex").value;
        let age = document.getElementById("age").value;
        let height = document.getElementById("height").value;
        let weight = document.getElementById("weight").value;
        let activeness = document.getElementById("active").value;
        if (sex == "female") {
          basalMetabolicRate = 655.1 + (9.563 * weight) + (1.850 * height) - (4.676 * age)
        }
        else if (sex == "male") {
          basalMetabolicRate = 66.47 + (13.75 * weight) + (5.003 * height) - (6.755 * age)
          basalMetabolicRate *= activeness;
        }
        document.getElementById("calResult").innerHTML = basalMetabolicRate;
      }
    </script>
</body>