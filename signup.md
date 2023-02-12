<body>
    <script src="{{ '/assets/js/signup.js' | relative_url }}"></script>
<body>

<h1> Sign Up Page</h1>

<div class="signcontain">
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
    <div class="signup2">
        <label class="signupL">Monday</label>
        <input type="text" id = "id" style="color: black; padding: 10px;"><br>
        <label class="signupL">Tuesday</label>
        <input type="text" id = "id" style="color: black; padding: 10px;"><br>
        <label class="signupL">Wednesday</label>
        <input type="text" id = "id" style="color: black; padding: 10px;"><br>
        <label class="signupL">Thursday</label>
        <input type="text" id = "id" style="color: black; padding: 10px;"><br>
        <label class="signupL">Friday</label>
        <input type="text" id = "id" style="color: black; padding: 10px;"><br>
        <label class="signupL">Saturday</label>
        <input type="text" id = "id" style="color: black; padding: 10px;"><br>
        <label class="signupL">Sunday</label>
        <input type="text" id = "id" style="color: black; padding: 10px;"><br>
    </div>
</div>
    <div style="padding: 10px">
        <button id = "signUPbutton" type="submit" class="signupbtn" onclick = "signup()">sign up</button>
    </div>

<!--input id='name' type = "text"/>
<button id = "press" onclick = "printName()">
<div id='result'></div>
<script src="{{ '/assets/js/signup.js' | relative_url }}"></script>-->
