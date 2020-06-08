var view1 = document.getElementById("chat1view");
var view2 = document.getElementById("chat2view");
var view1input = document.getElementById("chat1input");
var view2input = document.getElementById("chat2input");
var panel1 = document.getElementById("panel1");
var panel2 = document.getElementById("panel2");
var profile1 = document.getElementById("profile1");
var profile2 = document.getElementById("profile2");
var send1 = document.getElementById("send1");
var send2 = document.getElementById("send2");

function helper1(){
 var text = view1input.value;
  if (text !== ""){
      view1input.value = "";
      var div1 = document.createElement("div");
      div1.className = "row no-gutters";
      var div2 = document.createElement("div");
      div2.className = "offset-md-9";
      var div3 = document.createElement("div");
      div3.className = "chat-bubble chat-bubble--right";
      div3.innerHTML = text;
      div2.appendChild(div3);
      div1.appendChild(div2);
      panel1.appendChild(div1);
      profile1.innerHTML = text;
}
}

function helper2(){
 var text = view2input.value;
  if (text !== ""){
      view2input.value = "";
      var div1 = document.createElement("div");
      div1.className = "row no-gutters";
      var div2 = document.createElement("div");
      div2.className = "offset-md-9";
      var div3 = document.createElement("div");
      div3.className = "chat-bubble chat-bubble--right";
      div3.innerHTML = text;
      div2.appendChild(div3);
      div1.appendChild(div2);
      panel2.appendChild(div1);
      profile2.innerHTML = text;
}
}

view2.style.display = "none";

$(".friend-drawer--onhover").on('click',  function() {

  $(".chat-bubble").show('slow');

});

send1.onclick = function(){
    helper1();
};

view1input.addEventListener("keyup", function(event) {
  if (view1.style.display !== "none"){
    if (event.keyCode === 13) {
      event.preventDefault();
      send1.click();
      }
    }
});

send2.onclick = function(){
    helper2();
};

view2input.addEventListener("keyup", function(event) {
  if (view2.style.display !== "none"){
    if (event.keyCode === 13) {
      event.preventDefault();
      send2.click();
      }
    }
});

$('#chat1').on( 'click',  function() {
  if (view2.style.display !== "none"){
    view2.style.display = "none";
    view1.style.display = "block";
  }

  /*if (view1.style.display === "none") {
    view1.style.display = "block";
  } else {
    view1.style.display = "none";
  }*/
});

$('#chat2').on( 'click',  function() {
  if (view1.style.display !== "none"){
    view1.style.display = "none";
    view2.style.display = "block";
  }

  /*if (view2.style.display === "none") {
    view2.style.display = "block";
  } else {
    view2.style.display = "none";
  }*/
});