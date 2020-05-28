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

function signUp(){
if(document.getElementById("Username").value=="" || document.getElementById("Username").value==" ")
{alert("Invalid Username");}

else{



  signOut();
  showload();
  document.getElementById("mbtn").value="Loading..";
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var nay=document.getElementById("Username").value;

    firebase.auth().createUserWithEmailAndPassword(email.value, password.value).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  password.value="";
  document.getElementById("mbtn").value="Sign Up";
  hideload();
  alert(errorMessage);
  // ...
});

   
//alert("done");
//datae();


firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    
var db = firebase.firestore();

db.collection("users").add({
  email : email.value,
  name : nay
})
.then(function(docRef) {
  document.getElementById("mbtn").value="Sign Up";
  hideload();
  alert("Sign Up Successful.Redirecting to Login Page");
  window.location.replace("http://jfiddle.epizy.com/login/index.html");
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});
  } 


  else {
    //alert("Np");
  }
});

  }}


	


	function signOut(){

		auth.signOut();
		//localStorage.setItem("id", "alien");
		//alert("Signed Out");


	}



window.onload=func1();
function func1(){
   
signOut();
hideload();
}




function showload()
{
document.getElementById("lg").style.visibility = "visible";

}

function hideload()
{
document.getElementById("lg").style.visibility = "hidden";

}