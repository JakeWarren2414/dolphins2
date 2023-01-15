<body>
    <script src="{{ '/assets/css/signup.js' | relative_url }}"></script>
<body>

<div style="padding: 100px"></div>
<div class="page-header" style="color: black; padding: 350px height: 20%; border-radius: 50px; flex: 20%;">
    <img id="S" src="https://jakewarren2414.github.io/dolphins2/faviconcopy.png" style="height: 201px">
    <div style="flex: 50%; padding:10px;">
        <h1 style="color: black;">Signup</h1>
        <div style="padding:10px">
            <p class="signup">Username</p>
            <input id = "username" type="text">
        </div>
        <div style="padding:10px">
            <p class="signup">Password</p>
            <input id = "password" type="password">
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
</div>