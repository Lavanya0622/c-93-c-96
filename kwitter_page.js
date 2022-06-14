//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyDN5NmqifleGb6EsFUFXB3y59BWzy-6TPI",
    authDomain: "kwitter-app-44cc7.firebaseapp.com",
    databaseURL: "https://kwitter-app-44cc7-default-rtdb.firebaseio.com",
    projectId: "kwitter-app-44cc7",
    storageBucket: "kwitter-app-44cc7.appspot.com",
    messagingSenderId: "1004734054448",
    appId: "1:1004734054448:web:8a56e3b68c2c19ef8dadf5"
  };

  // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();

function send()
{
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name , 
          message:msg , 
          like : 0
    });
    document.getElementById("msg").value="";
}
