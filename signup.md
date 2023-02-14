
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
            <input id="calories" type="number">
        </div>
        <div style="">
            <label class="signupL">BMI</label>
            <input id="bmi" type="text">
        </div>
        <div style="">
            <label class="signupL">Sport</label>
            <input id="sport" type="text">
        </div>
    </div>
    <!-- <div class="signup2">
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
    </div> -->
</div>
    <div style="padding: 10px">
        <button id = "signUPbutton" type="submit" class="signupbtn" onclick = "signup()">sign up</button>
    </div>
<script>
    const url = "http://dolphin.nighthawkcodingsociety.com/api/users";
    const create_fetch = url + '/create';
    function signup() {
        const body = {
            username: document.getElementById("username").value,
            password: document.getElementById("password").value,
            bmi: document.getElementById("bmi").value,
            calories: document.getElementById("calories").value,
            sport: document.getElementById("sport").value,
            monday: "A",
            tuesday: "A",
            wednesday: "A",
            thursday: "A",
            friday: "A",
            saturday: "A",
            sunday: "A"
        };
        const requestOptions = {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                "content-type": "application/json",
            },
        };
        fetch(create_fetch, requestOptions)
            .then(response => {
                // trap error response from Web API
                if (response.status !== 200) {
                const errorMsg = 'Database create error: ' + response.status;
                console.log(errorMsg);
                return;
                }
                // response contains valid result
                response.json().then(data => {
                    console.log(data);
                    //add a table row for the new/created userid
                })
            })
    }
</script>
<!--input id='name' type = "text"/>
<button id = "press" onclick = "printName()">
<div id='result'></div>
<script src="{{ '/assets/js/signup.js' | relative_url }}"></script>-->

