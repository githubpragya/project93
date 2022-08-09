var firebaseConfig = {
      apiKey: "AIzaSyA0-h6zU0qpgUHbn0DK3kbT2r9GbHAabdE",
      authDomain: "kwitter-7182b.firebaseapp.com",
      databaseURL: "https://kwitter-7182b-default-rtdb.firebaseio.com",
      projectId: "kwitter-7182b",
      storageBucket: "kwitter-7182b.appspot.com",
      messagingSenderId: "372478307695",
      appId: "1:372478307695:web:bf7332d95fe6899f38cc9a"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
  
function addRoom()
{
      room_name = document.getElementById("romm_name").value;
      firebase.database().ref("/").child(room_nmae).update({
            purpose : "adding room name"
});
}

localStorage.setItem("room_name", room_name);

window.location ="kwitter_page.html";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class = 'room_name' id= "+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room-names +"</div><hr>";
      document.getElementById("output").innerhtml += row;
      

      //End code
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name". name);
      window.location = "kwitter_page.html";

}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
        window.localStorage = "Kwitter.html";
}