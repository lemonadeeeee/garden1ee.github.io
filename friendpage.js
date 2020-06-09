var btn = document.getElementById("friends");
var check = document.getElementById("check");

$('#friends').on( 'click',  function() {
    if (check.className === "fa fa-check"){
        btn.className = "btn btn-primary btn-sm";
        btn.innerHTML = "Send Friend Request";
        check.className = "";
    }
    else{
        btn.className = "btn btn-success btn-sm";
        check.className = "fa fa-check";
        btn.innerText = "Friend Request Sent";
    }
});