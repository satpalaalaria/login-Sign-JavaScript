"use strict";
/////////////////////Login page////////////////////////////

const btnLogIn=document.getElementById('btnLog');
        // console.log(btnLogIn);
const getCookies=document.cookie;
// console.log(getCookies);
const userDetail = getCookies.split(";")[0];
// console.log(userDetail);
const userDetail1=userDetail.split("=")[1];
// console.log(userDetail1);
///////////////////////////////////////
const userPassword = getCookies.split(";")[1];
// console.log(userPassword);
const userPassword1=userPassword.split("=")[1];
// console.log(userPassword1);
btnLogIn.addEventListener('click',()=>{
    let userName2 = document.getElementById('username-login').value;
    let password2 = document.getElementById('password-login').value; 
    if (userName2 == userDetail1 && password2 == userPassword1) {
        // alert('login Successful')
        location.href = "/result.html";  
        // document.getElementById("demo").innerHTML = "Hello World"; 
    }else if(userName2 == ''){
        alert("please enter your user name")
    }else if (password2 == ''){
        alert ("Please enter Password");
    }else {
        alert('Your Username and Password is incorrect')
        // return false;
    }
 });
