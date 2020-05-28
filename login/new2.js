  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCKtyxFI3RaraOFRFGpYwCPco1LJnhxKcg",
    authDomain: "jfiddle-9dfef.firebaseapp.com",
    databaseURL: "https://jfiddle-9dfef.firebaseio.com",
    projectId: "jfiddle-9dfef",
    storageBucket: "jfiddle-9dfef.appspot.com",
    messagingSenderId: "528273465313",
    appId: "1:528273465313:web:c285738311f07784743ca0",
    measurementId: "G-74BS20YG7H"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  const auth = firebase.auth();



  var gotopage="http://jfiddle.epizy.com";

	function signIn(){
    showload();
    document.getElementById("myBtn").style.color = "red";
    document.getElementById("myBtn").disabled = true;
    

		var email = document.getElementById("email");

		var password = document.getElementById("password");

		firebase.auth().signInWithEmailAndPassword(email.value, password.value).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  hideload();
  alert(errorMessage);
      document.getElementById("myBtn").disabled = false;
  // ...
  
});

verify();

	}


	function signOut(){

		auth.signOut();
		localStorage.setItem("sessionname", "alien");
		//alert("Signed Out");


	}


function verify(){
	firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var temail = user.email;
    //alert(email);
    //alert("Sign In Sucessful");

//geetting username

var db = firebase.firestore();
var temp="ghjgj";

db.collection("users").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
       //alert(doc.data().email);
       if(doc.data().email==temail){

      localStorage.setItem('sessionname', doc.data().name);
       window.location.replace(localStorage.getItem('target'));
      }
    });
});

//got it


//alert(temp);




    
    document.getElementById("myBtn").disabled = false;
    //alert(localStorage.getItem("sessionname"));
   
    // ...
  } else {
    // User is signe

    document.getElementById("myBtn").disabled = false;
  
    // ...
  }
});

}




window.onload=func1();
function func1(){
  // alert(localStorage.getItem('target'));
signOut();
hideload();
   if(!localStorage.getItem('sessionname')) {

  }
  else{
    if(localStorage.getItem("sessionname")!="alien")
    {
     // alert("Already signed in . Sign Out?");
      signOut();

    }

    }


   if(!localStorage.getItem('target')) {

  }
  else{
      gotopage=target;

    }
}



function navig(){
  window.location.replace("http://jfiddle.epizy.com/Signup/");
}



function showload()
{
document.getElementById("lg").style.visibility = "visible";

}

function hideload()
{
document.getElementById("lg").style.visibility = "hidden";

}