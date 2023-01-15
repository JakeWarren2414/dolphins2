function setCookie(cookieName, value, exdays){
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var cookieValue = escape(value) + ((exdays==null) ? "" : "; expires=" + exdate.toGMTString());
    document.cookie = cookieName + "=" + cookieValue;
}
 
function deleteCookie(cookieName){
    var expireDate = new Date();
    expireDate.setDate(expireDate.getDate() - 1); //어제날짜를 쿠키 소멸날짜로 설정
    document.cookie = cookieName + "= " + "; expires=" + expireDate.toGMTString();
}
 
function getCookie(cookieName) {
    cookieName = cookieName + '=';
    var cookieData = document.cookie;
    var start = cookieData.indexOf(cookieName);
    var cookieValue = '';
    if(start != -1){
        start += cookieName.length;
        var end = cookieData.indexOf(';', start);
        if(end == -1)end = cookieData.length;
        cookieValue = cookieData.substring(start, end);
    }
    return unescape(cookieValue);
}

$(document).ready(function() {
    //Id 쿠키 저장
    var userInputId = getCookie("userInputId");
    $("input[name='userId']").val(userInputId); 
     
    if($("input[name='userId']").val() != ""){ 
        $("#idSaveCheck").attr("checked", true); 
        $("#pwdSaveCheck").removeAttr("disabled");
    }
     
    $("#idSaveCheck").change(function(){ 
        if($("#idSaveCheck").is(":checked")){                     
               //id 저장 클릭시 pwd 저장 체크박스 활성화
               $("#pwdSaveCheck").removeAttr("disabled");
               $("#pwdSaveCheck").removeClass('no_act');
            var userInputId = $("input[name='userId']").val();
            setCookie("userInputId", userInputId, 365);
        }else{ 
            deleteCookie("userInputId");
            $("#pwdSaveCheck").attr("checked", false); 
            deleteCookie("userInputPwd");
            $("#pwdSaveCheck").attr("disabled", true);
            $("#pwdSaveCheck").addClass('no_act');
        }
    });
     
  
    $("input[name='userId']").keyup(function(){ 
        if($("#idSaveCheck").is(":checked")){ 
            var userInputId = $("input[name='userId']").val();
            setCookie("userInputId", userInputId, 365);
        }
    });
    
    //Pwd 쿠키 저장 
    var userInputPwd = getCookie("userInputPwd");
    $("input[name='userPwd']").val(userInputPwd); 
     
    if($("input[name='userPwd']").val() != ""){ 
        $("#pwdSaveCheck").attr("checked", true);
        $("#pwdSaveCheck").removeClass('no_act');
    }
     
    $("#pwdSaveCheck").change(function(){ 
        if($("#pwdSaveCheck").is(":checked")){ 
            var userInputPwd = $("input[name='userPwd']").val();
            setCookie("userInputPwd", userInputPwd, 365);
        }else{ 
            deleteCookie("userInputPwd");
        }
    });
     
  
    $("input[name='userPwd']").keyup(function(){ 
        if($("#pwdSaveCheck").is(":checked")){ 
            var userInputPwd = $("input[name='userPwd']").val();
            setCookie("userInputPwd", userInputPwd, 365);
        }
    });
});