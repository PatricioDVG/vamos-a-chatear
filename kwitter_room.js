var firebaseConfig = {
      apiKey: "AIzaSyBMSx_vL6VGobeZN3g0P0z7rpwfPe47Eb0",
      authDomain: "kwitter-fc51e.firebaseapp.com",
      databaseURL: "https://kwitter-fc51e-default-rtdb.firebaseio.com",
      projectId: "kwitter-fc51e",
      storageBucket: "kwitter-fc51e.appspot.com",
      messagingSenderId: "529527869120",
      appId: "1:529527869120:web:628d6af88fd090dcea2725"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//AÑADE TUS ENLACES DE FIREBASE

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "bienvenido " + user_name + "!";


function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            proposito : "añadir sala"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicio del código
console.log("room name - " + Room_names);
row = "<div class= 'room_name' id="+Room_names+" onclick= 'redirectToRoomName(this.id)'>#"+Room_names + "</div><hr>"
  document.getElementById("output").innerHTML+=row;
//Final del código
      });});}
getData();
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
}
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html"
}

