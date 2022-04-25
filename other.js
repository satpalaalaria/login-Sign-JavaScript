// import {logInValidate} from './script.js'
// logInValidate();


function logout(){
    location.href = "/home.html";
}
function deleteAcount(){
    alert("Delete Account");
    localStorage.removeItem('UserFormData');
    document.cookie = "username=null"
    document.cookie = "password=null"
    location.href = "/home.html";
    
}