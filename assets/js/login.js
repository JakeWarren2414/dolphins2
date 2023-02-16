var user = "A";
function login() {
    const login_url = 'https://dolphin.nighthawkcodingsociety.com/api/users/match';
    const body = {
        password: document.getElementById("password").value,
        username: document.getElementById("username").value
    };

    // Set Headers to support cross origin
    const requestOptions = {
        method: 'POST',
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        // credentials: 'include', // include, *same-origin, omit
        body: JSON.stringify(body),
        headers: {
            "content-type": "application/json",
        },
    };

    // Fetch JWT
    fetch(login_url, requestOptions)
    .then(response => {
        // trap error response from Web API
        if (response.status !== 200) {
            const message = 'Login error: ' + response.status + " " + response.statusText;
            document.getElementById("message").innerHTML = message;
        }
        response.json().then(data => {
            const message = 'Login success: ' + data.username;
            document.getElementById("message").innerHTML = message
            user = data.username
        })
        .catch((err) => {
            alert("username or password is not correct")
        })
    })

}