<!--Login Frontmatter-->
<body>
    <script></script>
    <h1 id="foodtitle">Calorie Management</h1>
    <div style="padding:5px">
        <label for="sex">Sex</label>
        <select name="sex" id="sex">
          <option value="655.1">Female</option>
          <option value="66.47">Male</option>
        </select>
    </div>
    <div style="padding:5px">
        <label for="age">Age</label>
        <input id="age" type="text">
    </div>
    <div style="padding:5px">
        <label for="height">Height (in)</label>
        <input id="height" type="text">
    </div>
    <div style="padding:5px">
        <label for="weight">Weight (lbs.)</label>
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
      <input type="submit" value="Submit">
    </div>
    <p id="calResult">You burn 0 calories a day. This is the maximum amount of calories you can consume. Do not go over this.</p>
    <script>
      function calorie(age, height, weight, gender) {
        
      }
    </script>
</body>