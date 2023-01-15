<body>
    <script src="{{ '/assets/js/signup.js' | relative_url }}"></script>
<body>
<!--<div class="signup">
    <div style="padding:10px">
        <p class="signup">Username</p>
        <input id = "username" type="text">
    </div>
    <img src="https://jakewarren2414.github.io/dolphins2/faviconcopy.png" style="float: right; height: 400px">
    <div style="padding:10px">
        <p class="signup">Password</p>
        <input id = "password" type="text">
    </div>
    <div>
        <p class="signup">confirm password</p>
        <input type="text" id="cfPassword">
    </div>
    <div style="padding:10px">
        <p class="signup">Birthday</p>
        <input type="date" id="birthday" name="birthday">
    </div>
    <div>
        <button onclick = "signup();return false;" class="signup" >sign up</button>
    </div>
</div>-->
<p><input type="text" name="userId" id="userId" class="form_id" value=""/></p>
<p><input type="password" name="userPwd" id="userPwd" class="form_pw" 
    value="" onkeydown="if(event.keyCode==13) javascript:chkEnter();" /></p>
<p><label><input type="checkbox" id="idSaveCheck"/> id</label></p>
<p><label><input type="checkbox" disabled id="pwdSaveCheck" class="no_act"/>password</label></p>
 
