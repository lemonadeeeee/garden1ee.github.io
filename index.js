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

function signup() {
    var inputs = $("#signup input");
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