var view1 = document.getElementById("chat1view");
var view1input = document.getElementById("chat1input");
var panel1 = document.getElementById("panel1");
var profile1 = document.getElementById("profile1");
var send1 = document.getElementById("send1");

var friend_icons = document.getElementById("friend-icons");

var chatImg = document.getElementById("chatImg");
var chatName = document.getElementById("chatName");
var chatMessage = document.getElementById("chatMessage");
var msgContainer = document.getElementById("msgContainer");

var temp = 0;

var iconList = [];
var keyList = [];
var activeChat = 0;
count = 0;

const firebaseConfig = {
  apiKey: "AIzaSyABwbeK56paWMXwsNoMEZl9gaZx-JZ4u4c",
  authDomain: "cs374-b567a.firebaseapp.com",
  databaseURL: "https://cs374-b567a.firebaseio.com",
  projectId: "cs374-b567a",
  storageBucket: "cs374-b567a.appspot.com",
  messagingSenderId: "25442143370",
  appId: "1:25442143370:web:733493cf0d34f2f3d97173",
  measurementId: "G-YGXH7LFSVW"
};

if (!firebase.apps.length) {
   firebase.initializeApp(firebaseConfig);
}

$(document).ready()

function writeToDatabase(comment) {
  var newKey = firebase.database().ref('/profiles/').push();
  newKey.set({
    comment: comment
  });
}

function readFromDatabase() {
  return firebase.database().ref('/profiles/').on('value', function(snapshot) {
    initializeTable();

    var myValue = snapshot.val();
    var keyList = Object.keys(myValue);

    for(var i=0;i<keyList.length;i++) {
      var myKey = keyList[i];
      addRow(myValue[myKey].comment);
    }
});
}

function helper1(){
 var text = view1input.value;
  if (text !== ""){
      view1input.value = "";
      addMessage(text, "r");
      iconList[keyList[activeChat]].lastText = text;
      iconList[keyList[activeChat]].texts.push({Msg:text, Direction:"r"});
      updateDB();
    }
}

function updateDB(){
    var profRef = firebase.database().ref('/profiles/');
    profRef.remove();
    for(var i=0;i<keyList.length;i++) {
             var myKey = keyList[i];
             profRef.push(iconList[myKey]);
   }
   displayIcons();
}

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

$('#chat1').on( 'click',  function() {
  if (view2.style.display !== "none"){
    view2.style.display = "none";
    view1.style.display = "block";
  }
});

function displayIcons(){
   return firebase.database().ref('/profiles/').once('value', function(snapshot) {
       var myValue = snapshot.val();
       var kList = Object.keys(myValue);
       keyList = kList;
       iconList = myValue;

        friend_icons.textContent = '';
        count = 0;

       for(var i=0;i<keyList.length;i++) {
         var myKey = keyList[i];
         addIcon(myValue[myKey]);
       }

       details = iconList[keyList[activeChat]];
       displayChat(details);

       $('#0').on( 'click',  function() {
           console.log("Hi1");
           details = iconList[keyList[0]];
           displayChat(details);
           activeChat = 0;
       });

       $('#1').on( 'click',  function() {
           console.log("Hi2");
           details = iconList[keyList[1]];
           displayChat(details);
           activeChat = 1;
       });
   });
}

function addIcon(icon){
    var span = document.createElement("span");
    span.className = "time text-muted small";
    var spantext = document.createTextNode(icon.time);
    span.appendChild(spantext);

    var p = document.createElement("p");
    p.className = "text-muted overflow";
    var ptext = document.createTextNode(icon.lastText);
    p.appendChild(ptext);

    var h6 = document.createElement("h6");
    var h6text = document.createTextNode(icon.dog_name + " / " + icon.owner_name);
    h6.appendChild(h6text);

    var inDiv = document.createElement("div");
    inDiv.className = "text";
    inDiv.appendChild(h6);
    inDiv.appendChild(p);

    var img = document.createElement("img");
    img.className = "profile-image";
    img.src = icon.pic;

    var outDiv = document.createElement("div");
    outDiv.id = count;
    count++;
    outDiv.className = "friend-drawer friend-drawer--onhover";
    outDiv.appendChild(img);
    outDiv.appendChild(inDiv);
    outDiv.appendChild(span);

    friend_icons.appendChild(outDiv);

    var hr = document.createElement("hr");
    friend_icons.appendChild(hr);
}

function displayChat(details){
    texts = details.texts;
    panel1.removeChild(msgContainer);
    temp = document.createElement("div");
    msgContainer = temp;
    panel1.appendChild(temp);
    chatImg.src = details.pic;
    chatName.innerHTML = details.dog_name + " / " + details.owner_name;
    chatMessage.innerHTML = details.message;
    for(var i=0;i<texts.length;i++) {
        addMessage(texts[i].Msg, texts[i].Direction);
   }
}

function addMessage(Msg, Direction){
    rowDiv = document.createElement("div");
    rowDiv.className = "row no-gutters";

    nextDiv = document.createElement("div");

    chatDiv = document.createElement("div");
    chatDiv.innerHTML = Msg;

    if (Direction === "l"){
        nextDiv.className = "w-auto";
        chatDiv.className = "chat-bubble chat-bubble--left";
    } else {
        nextDiv.className = "offset-md-9";
        chatDiv.className = "chat-bubble chat-bubble--right";
    }

    nextDiv.appendChild(chatDiv);
    rowDiv.appendChild(nextDiv);
    msgContainer.appendChild(rowDiv);
}

displayIcons();