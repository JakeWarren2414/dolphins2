<body>
    <script src="{{ '/assets/js/forgotpassword.js' | relative_url }}"></script>
<body>
<div id="spacing" style="padding: 200px;"></div>
<!-- <div class="page-header" style="padding: 350px height: 20%; border-radius: 50px;">
<h1 style="color: black;" id="L">Login</h1><br>
<input type="text" placeholder="Username" id = "username" style="color: black; padding: 10px;"><br>
<input type="date" id = "birth" style="color: black; padding: 10px;"><br>
<input type="password" placeholder="Password" id = "password" style="color: black; padding: 10px;"><br>
<input type="password" placeholder="Check password" id = "check_password" style="color: black; padding: 10px;"><br>
<p></p>
<p id="message"></p>
<button style="padding: 5px; color: black; flex: 50%" onclick="update()">Update Password</button> -->
<div class="shadow">
<div id = "loginHead" class="page-header" style="display:none;"><img src="{{ site.url }}/favicon.ico"></div>
<div id="forgotinfo"></div>
<script>
    function forgotPage() {
        username = sessionStorage.getItem("uid");
        const newRow = document.getElementById('forgotinfo');
        var space = document.getElementById("spacing");
        var head = document.getElementById("loginHead");
        if (username == null) {
            newRow.innerHTML = `
                <div class="page-header" style="padding: 350px height: 20%; border-radius: 50px;">
                <h1 style="color: black;" id="L">Login</h1><br>
                <input type="text" placeholder="Username" id = "username" style="color: black; padding: 10px;"><br>
                <input type="date" id = "birth" style="color: black; padding: 10px;"><br>
                <input type="password" placeholder="Password" id = "password" style="color: black; padding: 10px;"><br>
                <input type="password" placeholder="Check password" id = "check_password" style="color: black; padding: 10px;"><br>
                <p></p>
                <p id="message"></p>
                <button style="padding: 5px; color: black; flex: 50%" onclick="update()">Update Password</button>
            `;
        }
        else {
            document.getElementById("spacing").style.padding="50px";
            head = head.style.display = "block";
            newRow.innerHTML = `
            <div>Hello ${username}, You already login</div>
            `;
        }
    }
    forgotPage();
</script>