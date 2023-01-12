alert("connect");
let index = {
    init: function () {
        $("signUPbutton").on("click", ()=>{
            alert("execute");
            this.save();
        })
    },
    save: function () {
        alert("connected")
        let data = {
            username: $("username").val(),
            password: $("password").val()
        };
        $.ajax({
            type: "POST",
            url: "/user/",
            data: JSON.stringify(data),
            contentType: "application/json",
            dataType: "json"
        }).done(function (answer) {
            alert("success on sign up");
            location.href = "https://jakewarren2414.github.io/FirstFastpages/";
        }).fail(function (error) {
            alert("you failed");
            alert(JSON.stringify(error))
        })
    }
}
index.init();