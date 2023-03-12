<!--Login Frontmatter-->
<input type="button" value="Get Your Stats" onclick="getVariables()">
<script> AOS.init();</script>
<body>
    <script src="{{ '/assets/js/food.js' | relative_url }}"></script>
    <img src="{{ '/images/dolphin.png' | relative_url }}">
    <h1 id="food">Calorie Management</h1>
    <div style="padding:5px">
        <label for="sex">Sex</label>
        <select id="sex" name="sex">
            <option value="male">Male</option>
            <option value="female">Female</option>
        </select>
        <label for="age">Age</label>
        <input id="age" value="" type="text">
        <label for="weight">Weight</label>
        <input id = "weight" type="text">
        <label for="height">Height</label>
        <input id = "height" type="text">
        <label for="active">How Active Are You?</label>
        <select id="active" name="active">
            <option value="1.2">Exercise 1 Or Less Days A Week</option>
            <option value="1.375">Exercise 1-3 Days A Week</option>
            <option value="1.55">Exercise 3-5 Days A Week</option>
            <option value="1.725">Exercise 6-7 Days A Week</option>
            <option value="1.9">Exercise All The Time</option>
        </select>
    </div>
    <div>
        <input type="button" value="Calculate Your Maximum Calorie Consumption Per Day" onclick="calculateMaximumCalories()">
    </div>
    <div style="padding: 15px;"></div>
    <div id="result">You burn 0 calories per day. This is your maximum calorie limit for each day. It will refresh when you refresh the page, as that is assumed to be a new day. Do not go over this limit.</div>
    <div style="padding: 15px;"></div>  
    <input type="button" value="Save Maximum Calories To Your Account" onclick="update()">
</body>

---

<body>
    <div style="padding:5px">
        <label for="foodName">Name of Food</label>
        <input id="foodName" type="text">
        <label for="calamnt">Amount of Calories (Check Nutrition Label)</label>
        <input id = "calamnt" type="text">
    </div>
    <table id="foodTable">
        <tr>
            <th>Food Name</th>
            <th>Calories</th>
        </tr>
    </table>
    <div style="padding: 15px;"></div>
    <input type="button" value="Add Food To Your Daily List" onclick="addFood()">
</body>

## Next steps
> Continue your journey
- Now you know how to diet properly
- This is one of if not the most important parts of your journey
- However a diet is nothing without exercise: [Sports](https://jakewarren2414.github.io/dolphins2/sportsquiz)
<div style="padding: 150px;">
</div>