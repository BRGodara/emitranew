var UsernameI = document.getElementById("Username");
var PasswordI = document.getElementById("Password");

function Login(){
    if(UsernameI.value == "0" && PasswordI.value == "0"){
        window.location = "Home.html";
    }else if(UsernameI.value == "" && PasswordI.value == ""){
        return;
    }else{
        alert("Please enter correct Username or Password");
        location.reload();
    }
}












