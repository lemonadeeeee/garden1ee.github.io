$(document).ready(function() {
    AOS.init({
        duration:1200,
    });
    $('#signup button').click(function() {
        signup();
    });
    $('#login button').click(function() {
        signin();
    })
});

var firebaseConfig = {
    apiKey: "AIzaSyBBpPXUc11awDhhp3a1Q58DFnc0pAZVPwI",
    authDomain: "pr3-4ad35.firebaseapp.com",
    databaseURL: "https://pr3-4ad35.firebaseio.com",
    projectId: "pr3-4ad35",
    storageBucket: "pr3-4ad35.appspot.com",
    messagingSenderId: "53566132422",
    appId: "1:53566132422:web:cc20e2593aed493f5307c7"
  };
function signup() {
    var inputs = $("#signup input[type=text]");
    for (var i=0; i< inputs.length; i++){
        var v=0;
        if (!$(inputs[i]).val()) {
            var whichinput = $(inputs[i]).attr("id");
            console.log(whichinput);
            document.getElementById("signup-error").innerHTML = "Please fill up your "+ whichinput +".";
            $("#signup-error").show();
            $(inputs[i]).focus();
            v=1;
            break;
        }
    }
    if (v==0) {
      $("#signup-error").hide();
      //save user info to server
      location.href = "main.html";
    }
}
function signin() {
    if (!$('#login-email').val()) {
        document.getElementById("login-error").innerHTML = "Please fill up your email address.";
        $("#login-error").show();
        $("#login-email").focus();
    }
    else if (!$('#login-pw').val()) {
        document.getElementById("login-error").innerHTML = "Please fill up your password.";
        $("#login-error").show();
        $("#login-pw").focus();
    }
    else {
        location.href = "main.html";
    }
}