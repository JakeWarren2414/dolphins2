
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
            <label class="signupL">Sport</label>
            <input id="sport" type="text">
        </div>
        <div style="">
            <label class="signupL">Birth</label>
            <input id="birth" type="date">
        </div>
    </div>
    <br>
    <div class="signup2">
        <label class="signupL">Monday</label>
        <input type="text" id = "monday" style="color: black; padding: 10px;"><br>
        <label class="signupL">Tuesday</label>
        <input type="text" id = "tuesday" style="color: black; padding: 10px;"><br>
        <label class="signupL">Wednesday</label>
        <input type="text" id = "wednesday" style="color: black; padding: 10px;"><br>
        <label class="signupL">Thursday</label>
        <input type="text" id = "thursday" style="color: black; padding: 10px;"><br>
        <label class="signupL">Friday</label>
        <input type="text" id = "friday" style="color: black; padding: 10px;"><br>
        <label class="signupL">Saturday</label>
        <input type="text" id = "saturday" style="color: black; padding: 10px;"><br>
        <label class="signupL">Sunday</label>
        <input type="text" id = "sunday" style="color: black; padding: 10px;"><br>
    </div>
</div>
<div style="padding: 10px">
    <button id = "signUPbutton" type="submit" class="signupbtn" onclick = "signup()">sign up</button>
    <button class="signupbtn" onclick="location.href='https://jakewarren2414.github.io/dolphins2/delete'">Delete Account</button>
</div>
<div id="john"></div>
<script> 
    function signup() {
        var passwords = document.getElementById("password").value;
        var confirm_password = document.getElementById("confirm_password").value;
        var username = document.getElementById("username").value;
        var birthday = document.getElementById('birth').value
        const login_url = "https://dolphins3.duckdns.org/api/users/username";
        const url = "https://dolphins3.duckdns.org/api/users/";
        const create_fetch = url + '/create'; 
        fetch(login_url)
            .then(response => response.json())
                .then(data => {
                    console.log(data);
                    for (var i = 0; i < data.length; i++) {
                        if (data[i]["username"] === username) {
                            alert("Username is already existed");
                        }
                    }
                })
        if(username.length === 0){
            alert("please enter your username");
        }
        if(password.length === 0){
            alert("please enter your password");
        }
        if (birthday === "") {
            alert("Please write your birth")
        }
        const body = {
            username: document.getElementById("username").value,
            password: document.getElementById("password").value,
            monday: document.getElementById("monday").value,
            tuesday: document.getElementById("tuesday").value,
            wednesday: document.getElementById("wednesday").value,
            thursday: document.getElementById("thursday").value,
            friday: document.getElementById("friday").value,
            saturday: document.getElementById("saturday").value,
            sunday: document.getElementById("sunday").value,
            sex: "",
            weight: "",
            height: "",
            sport: document.getElementById("sport").value,
            maxcal: document.getElementById("calories").value,
            dob: birthday = document.getElementById('birth').value
        };
        const requestOptions = {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                "content-type": "application/json",
            },
        };
        if (passwords == confirm_password) {
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
        } else {
            alert("password is not matched");
        }
    }
</script>

