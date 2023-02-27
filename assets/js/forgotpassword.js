function update() {
    const login_url = "https://dolphin.nighthawkcodingsociety.com/api/users/username";
    const forgot_url = "https://dolphin.nighthawkcodingsociety.com/api/users/update_password";
    const password = document.getElementById("password").value;
    const username = document.getElementById("username").value;
    var dob = document.getElementById("birth").value;
    dob = dob.replace('-', '').replace('-', '');
    var birthdayy = dob.substr(0, 4);
    var birthdaymd = dob.substr(4, 4);
    var birthmonth = birthdaymd.substr(0,2);
    var birthday = birthdaymd.substr(2,4)
    var new_dob = birthmonth +"-" + birthday + "-" + birthdayy;
    console.log(new_dob)
    const check_password = document.getElementById("check_password").value;
    fetch(login_url)
        .then(response => response.json())
            .then(data => {
                var i = 0;
                while (true) {
                    if (i >= data.length) {
                        alert("username is incorrect");
                        break;
                    }
                    if (data[i]["username"] === username) {
                        if (data[i]["dob"] === new_dob) {
                            break;
                        }
                        else {
                            alert("birthday is incorrect")
                            break;
                        }
                    }
                    else {
                        i += 1;
                    }
                }
            })
    const body = {
        password: document.getElementById("password").value,
        username: document.getElementById("username").value,
        dob: new_dob
    };
    const requestOptions = {
        method: 'POST',
        cache: 'no-cache', 
        body: JSON.stringify(body),
        headers: {
            "content-type": "application/json",
        },
    };
    if (password === check_password) {
        fetch(forgot_url, requestOptions)
        .then(response => {
            if (response.status == 400) {
                alert("Password don't match")
                const message = 'Login error: ' + response.status + " " + response.statusText;
                document.getElementById("message").innerHTML = message;
            }
            response.json().then(data => {
                if (sessionStorage.getItem("uid") == null) {
                    sessionStorage.setItem("uid", username);
                }
                location.href = "https://jakewarren2414.github.io/dolphins2/";
            })
        })
    }
    else {
        alert("password didn't match");
    }
}