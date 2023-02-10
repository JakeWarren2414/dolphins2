<!--Login Frontmatter-->

<body>
    <h1 id="foodtitle">Calorie Management</h1>
    <form>
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
        <input type="submit" id="submit">
    </div>
    </form>
    <p id="calResult">You burn 0 calories a day. This is the maximum amount of calories you can consume. Do not go over this.</p>
    <script>
      //655.1 + (9.563 * weight) + (1.850 * height) - (4.676 * age)
      //66.47 + (13.75 * weight) + (5.003 * height) - (6.755 * age)
      //Age post to JSON goes here
      //Gender post to JSON goes here
      //Weight post to JSON goes here
      //Height post to JSON goes here
      //Max Cal post to JSON goes here
    </script>
</body>