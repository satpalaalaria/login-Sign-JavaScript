
//Log Out
const signIn = document.querySelector(".btn-log-out");
signIn.addEventListener("click", function (e) {
e.preventDefault();
sessionStorage.setItem("isLoggedIn", JSON.stringify({ loggedIn: false }));
window.location.href = "./home.html";
});


/////For account delete/////////////////////
function deleteAcount(){
    alert("Delete Account");
    localStorage.removeItem('UserFormData');
    document.cookie = "username=null"
    document.cookie = "password=null"
    location.href = "/home.html";
    
};