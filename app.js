function registrar(){
    var email = document.getElementById('email').value;
    var password = document.getElementById('contrasena').value;
    
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
}
function acceso(){

  var mail = document.getElementById('mail').value;
  var contra = document.getElementById('contra').value;

  firebase.auth().signInWithEmailAndPassword(mail, contra)
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorCode);
    // ...
  });
}



  