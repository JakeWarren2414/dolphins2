function Delete_account() {
    const login_url = "https://dolphin.nighthawkcodingsociety.com/api/users/username";
    const delete_url = "https://dolphin.nighthawkcodingsociety.com/api/users/delete_user";
    const password = document.getElementById("password").value;
    const username = document.getElementById("username").value;
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
                        const body = {
                            username: document.getElementById("username").value,
                            password: document.getElementById("password").value
                        };
                        const requestOptions = {
                            method: 'POST',
                            body: JSON.stringify(body),
                            headers: {
                                "content-type": "application/json",
                            },
                        };
                        fetch(delete_url, requestOptions)
                        .then(response => {
                            // trap error response from Web API
                            if (response.status !== 200) {
                            const errorMsg = 'Database create error: ' + response.status;
                            console.log(errorMsg);
                            return;
                            }
                            // response contains valid result
                            response.json().then(data => {
                                if (sessionStorage.getItem("uid") == null) {
                                    location.href = "https://jakewarren2414.github.io/dolphins2/";
                                }
                                else {
                                    location.href = "https://jakewarren2414.github.io/dolphins2/logout";
                                }
                            })
                        })
                        break;
                    }
                    else {
                        i += 1;
                    }
                }
            })
}