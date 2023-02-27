// function signup() {
//     var username = document.getElementById("username");
//     var password = document.getElementById("password");
//     var confirm_password = document.getElementById("confirm_password");
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