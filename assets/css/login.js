assert("success")
function login() {
    var id = document.querySelector("#id");
    var pw = document.querySelector("#pw");
    if(id.value == "" || pw.value == "") {
        alert("Please write your Id or password")
    }
    else {
        location.href = "https://jakewarren2414.github.io/FirstFastpages/"
    }
}