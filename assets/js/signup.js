// var data = [];
// var anchor = document.createElement("a");

// function signup()  {
    
//     var username = document.getElementById('username').value
//     var password = document.getElementById('password').value
    
//     //var data = [];
//     data.push(username);
//     data.push(password);
//     var data_string = JSON.stringify(data);
//     var file = new Blob([data_string], {type:"text"});
//     //var anchor = document.createElement("a");
//     anchor.href = URL.createObjectURL(file);
//     anchor.download = "save.txt";
//     anchor.click();
// }
// if (localStorage.getItem('submits') === null) {
//     localStorage.setItem('submits', JSON.stringify([]));
// }
// function signup() {
//     var uid = document.getElementById("username");
//     var pw = document.getElementById("password");
//     var cpw = document.getElementById("confirm_password");

//     if(uid.value.length <4){
//         alert("please enter at least 4 letters for username")
//         uid.focus();
//         return false;
//     }
//     else if(!checkEngNumber(uid.value)){
//         alert("You can only write English and number")
//         uid.focus();
//         return false;
//     }

//     if(pw.value.length <4){
//         alert("please enter at least 4 password")
//         pw.focus();
//         return false;
//     }

//     else if(!checkEngNumber(pw.value)){
//         alert("You can only write English and number")
//         pw.focus();
//         return false;
//     }

//     else if(pw.value == uid.value){
//         alert("you cannot use same password with username")
//         pw.focus();
//         return false;
//     }


//     if(cpw.value !== pw.value){
//         alert("Password is not match")
//         cpw.focus();
//         return false;
//     }
// }
// function checkEngNumber(value){
//     var count = 0;

//     for(var i=0; i<value.length; i++){
//         if((value.charCodeAt(i)>=65 && value.charCodeAt(i)<=90) || (value.charCodeAt(i)>=97 && value.charCodeAt(i)<=122) || (value.charCodeAt(i)>=48 && value.charCodeAt(i)<=57)){
//             count += 1;
//         }
//     }


//     if(count === (value.length)){
//         return true;
//     } else{
//         return false;
//     }
// }

// function checkKorEng(value){
//     var count = 0;

//     for(var i=0; i<value.length; i++){
//         console.log(value.charCodeAt(i));
//         if((value.charCodeAt(i)>=65 && value.charCodeAt(i)<=90) || (value.charCodeAt(i)>=97 && value.charCodeAt(i)<=122) || (value.charCodeAt(i)>=44032 && value.charCodeAt(i)<=55203)){
//             count += 1;
//         }
//     }

//     if(count === (value.length)){
//         return true;
//     } else{
//         return false;
//     }
// }