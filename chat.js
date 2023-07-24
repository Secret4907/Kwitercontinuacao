const firebaseConfig = {
    apiKey: "AIzaSyDmZ6P23Q5SkSElKRXT_5vUTfppiEc5KdM",
    authDomain: "twitersigma.firebaseapp.com",
    databaseURL: "https://twitersigma-default-rtdb.firebaseio.com",
    projectId: "twitersigma",
    storageBucket: "twitersigma.appspot.com",
    messagingSenderId: "649357729249",
    appId: "1:649357729249:web:0bae3bec1489b0d8e1c6a0",
    measurementId: "G-XVE7Q59LNX"
  };
firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    /*
    Armazene o nome de usuário em localStorage

    Programe window.location para que o usuário possa navegar até a página chat_room.html.
    */
}



