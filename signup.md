<body>
    <script src="{{ '/assets/js/signup.js' | relative_url }}"></script>
<body>
<div class="signup">
    <div style="">
        <label class="signupL">Username</label>
        <input id = "username" type="text"/>
    </div>
    <div style="">
        <label class="signupL">Password</label>
        <input id = "password" type="password">
    </div>
    <div style="">
        <label class="signupL">Confirm Password</label>
        <input id = "confirm_password" type="password">
    </div>
    <div style="">
        <label class="signupL">Calories Per Day</label>
        <input type="number">
    </div>
    <div style="">
        <label class="signupL">BMI</label>
        <input type="text">
    </div>
    <div style="">
        <label class="signupL">Sport</label>
        <input type="text">
    </div>
</div>
    <div style="padding: 10px">
        <button id = "signUPbutton" type="submit" class="signupbtn" onclick = "signup()">sign up</button>
    </div>
<!--input id='name' type = "text"/>
<button id = "press" onclick = "printName()">
<div id='result'></div>
<script src="{{ '/assets/js/signup.js' | relative_url }}"></script>-->
