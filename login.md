
<body>
    <script src="{{ '/assets/js/login.js' | relative_url }}"></script>
<body>
<div style="padding: 200px;"></div>
<div class="page-header" style="padding: 350px height: 20%; border-radius: 50px;">

<!--Login Frontmatter-->
<h1 style="color: black;" id="L">Login</h1><br>
<input type="text" placeholder="Username" id = "username" style="color: black; padding: 10px;"><br>
<input type="password" placeholder="Password" id = "password" style="color: black; padding: 10px;"><br>
<p></p>
<p id="message"></p>
<button style="padding: 5px; color: black; flex: 50%" onclick="login()">Login</button>
<button style="padding: 5px; color: black; flex: 50%" onclick="location.href='https://jakewarren2414.github.io/dolphins2/signup'">Signup</button>
<button style="padding: 5px; color: black; flex: 50%" onclick="location.href='https://jakewarren2414.github.io/dolphins2/#Title'">Next</button>
</div>
<div style="padding: 200px;"></div>
{% endblock contents %}