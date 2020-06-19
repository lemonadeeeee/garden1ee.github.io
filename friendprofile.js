//var msgBtn = document.getElementById("Msg");

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

firebase.initializeApp(firebaseConfig);

function newChatToDB() {
  newChat = {};
  var existing = false;
  firebase.database().ref('/profiles/').once('value', function(snapshot) {
    var myValue = snapshot.val();
    var keyList = Object.keys(myValue);
    console.log(keyList);
    console.log(existing);

    for(var i=0;i<keyList.length;i++) {
      var myKey = keyList[i];
      if (myKey.dog_name === "Baekho"){
        existing = true;
        break;
      }
    }

    if (!existing){
        newChat.pic = "img/jindo.jpg";
        newChat.dog_name= "Baekho";
        newChat.owner_name= "Yungmi";
        newChat.time = "10:10";
        newChat.lastText = "";
        newChat.texts = [];
        newChat.message = "Let's meet and play!";
    }
});

  if (!existing){
      var newKey = firebase.database().ref('/profiles/').push();
      newKey.push("Hi???");
  }
  newKey.push("Hello There??");
}