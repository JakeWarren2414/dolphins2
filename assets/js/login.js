var sessionData = "uid"
function login() {
    // const login_url = 'https://dolphin.nighthawkcodingsociety.com/api/users/match';
    const login_url = "https://dolphin.nighthawkcodingsociety.com/api/users/username";
    const password = document.getElementById("password").value;
    const username = document.getElementById("username").value;
    // const body = {
    //     password: document.getElementById("password").value,
    //     username: document.getElementById("username").value
    // };
    // const requestOptions = {
    //     method: 'POST',
    //     cache: 'no-cache', 
    //     body: JSON.stringify(body),
    //     headers: {
    //         "content-type": "application/json",
    //     },
    // };

    // Fetch JWT
    // fetch(login_url, requestOptions)
    // .then(response => {
    //     // trap error response from Web API
    //     if (response.status == 400) {
    //         alert("username or password don't match")
    //         const message = 'Login error: ' + response.status + " " + response.statusText;
    //         document.getElementById("message").innerHTML = message;
    //     }
    //     response.json().then(data => {
    //         if (sessionStorage.getItem("uid") == null) {
    //             sessionStorage.setItem("uid", data.username);
    //         }
    //         location.href = "https://jakewarren2414.github.io/dolphins2/";
    //         // const message = 'Login success: ' + sessionStorage.getItem("uid");
    //         // document.getElementById("message").innerHTML = message;

    //     })
    // })
    fetch(login_url)
        .then(response => response.json())
            .then(data => {
                console.log(data);
                var i = 0;
                while (true) {
                    if (i >= data.length) {
                        alert("username or password is incorrect");
                        break;
                    }
                    if (data[i]["username"] === username && data[i]["password"]===password) {
                        if (sessionStorage.getItem("uid") == null) {
                            sessionStorage.setItem("uid", data[i]["username"]);
                        }
                        location.href = "https://jakewarren2414.github.io/dolphins2/";
                        break;
                    }
                    else {
                        i += 1;
                    }
                }
            })
}