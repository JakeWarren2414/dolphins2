<body>
    <script src="{{ '/assets/css/signup.js' | relative_url }}"></script>
<body>
<div class="signup">
    <div style="padding:10px">
        <p class="signup">Username</p>
        <input id = "username" type="text">
    </div>
    <img src="https://jakewarren2414.github.io/dolphins2/favicon.ico" style="float: right; height: 400px">
    <div style="padding:10px">
        <p class="signup">Password</p>
        <input id = "password" type="text">
    </div>
    <div style="padding:10px">
        <p class="signup">Birthday</p>
        <input type="date" id="birthday" name="birthday">
    </div>
    <div style="padding:10px">
        <p class="signup">Weight</p>
        <input type="number">
    </div>
    <div style="padding:10px">
        <p class="signup">Height (in inches)</p>
        <input type="number">
    </div>
    <div style="padding:10px">
        <p class="signup">Calories Per Day</p>
        <input type="number">
    </div>
    <div>
        <button id = "signUPbutton" class="signup">sign up</button>
    </div>
</div>