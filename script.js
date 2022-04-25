"use strict";
///////////////////////////////////////LOGIN///////////////////////////////////////////////////////



// function logInValidate() {
//     let userName2 = document.getElementById('username-login').value;
//     let password2 = document.getElementById('password-login').value;
//     // let btnLogIn=document.getElementById('btnLog').innerText;
//     // console.log(btnLogIn);

//     // if (userName2 == userDetail1 && password2 == userPassword1) {
//     //     alert('login Successful')
//     //     location.href = "/result.html";   
//     // }else {
//     //     alert('Your Username and Password is incorrect')
//     //     return false;
//     // };
//     if (userName2 == userDetail1 && password2 == userPassword1) {
//         // alert('login Successful')
//         location.href = "/result.html";  
//         // document.getElementById("demo").innerHTML = "Hello World"; 
//     }else if(userName2 == ''){
//         alert("please enter your user name")
//     }else if (password2 == ''){
//         alert ("Please enter Password");
//     }else {
//         alert('Your Username and Password is incorrect')
//         return false;
//     }

// };
// logInValidate();






///////////////////////////////////////SignUp//////////////////////////////////////////////////////////
/////////////////////////////////////Validation///////////////////////////////////////////////////////

/////////////////////Frist Name//////////////////////////////////
const name_frist=document.getElementById('name-frist');
name_frist.addEventListener('blur',()=>{
    // console.log("name is bullerd")
    let regex=/^[A-Z]([a-zA-Z])/;
    let str=name_frist.value;
    if(regex.test(str)){
        // console.log("is valid")
        name_frist.classList.remove('is-invalid');
        name_frist.classList.add('is-valid');
    }else{
        // console.log("is invalid")
        name_frist.classList.add('is-invalid');
    }
});

/////Email validation///////////////////////////////////////////////
const email_Id=document.getElementById('email');
email_Id.addEventListener('blur',()=>{
    // console.log("name is bullerd")
    let newRege=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let newSt=email_Id.value;
    if(newRege.test(newSt)){
        // console.log("is valid")
        email_Id.classList.remove('is-invalid');
        email_Id.classList.add('is-valid');
    }else{
        // console.log("is invalid")
        email_Id.classList.add('is-invalid');
    }
});


////////////////////Password validation///////////////////

const passwordVali=document.getElementById('password-signup');
passwordVali.addEventListener('blur',()=>{
    // console.log("name is bullerd")
    const newPass=/^(?=.*\d)(?=.*[a-z])(?=.*[^a-zA-Z0-9])(?!.*\s).{7,15}$/;
    const newOutput=passwordVali.value;
    if(newPass.test(newOutput)){
        // console.log("is valid")
        passwordVali.classList.remove('is-invalid');
        passwordVali.classList.add('is-valid');
    }else{
        // console.log("is invalid")
        passwordVali.classList.add('is-invalid');
    }
});

////////////////////////////////////Password Confrim///////////////////////////

const passwordConf=document.getElementById('password-confrom');
passwordConf.addEventListener('blur',()=>{
    const newOutput=passwordConf.value;
    if(passwordVali.value==newOutput){
        // console.log("is valid")
        passwordConf.classList.remove('is-invalid');
        passwordConf.classList.add('is-valid');
    }else{
        // console.log("is invalid")
        passwordConf.classList.add('is-invalid');
    }
});






////////////////////////////////////////////////////////////////////////////


/////////////////////////////Signup/////////////////////////////////////////

function validate() {
    let userName1 = document.getElementById('username-signup').value;
    let password1 = document.getElementById('password-signup').value;
    let password2 = document.getElementById('password-confrom').value;
    let naMe=document.getElementById('name-frist').value;
    let lastName=document.getElementById('name-last').value;
    const fristLastName=naMe+" "+lastName;
    let emailId=document.getElementById('email').value;
    let dateOfBirth=document.getElementById('dateofbirth').value;
    let countryCode=document.getElementById('cuntry').value;
    console.log(countryCode);
    let mobileNo=document.getElementById('mobileno').value;
    console.log(mobileNo);
    const cuntryMobile=`${countryCode}${mobileNo}`;
    // console.log(dateOfBirth);
    // console.log(emailId);
    // console.log(fristLastName)
    if(userName1 == ''){
        alert("please enter your user name")
    }else if (password1 == ''){
        alert ("Please enter Password");
    }else if (password2 == ''){
        alert ("Please enter confirm password");
    }else if (password1 != password2) {
        alert("\nPassword did not match: Please try again...")
        return false;
    }else{
        function setCookie(cname, cvalue, exdays) {
            const d = new Date();
            d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
            let expires = "expires=" + d.toUTCString();
            document.cookie = cname + "=" + cvalue + ";" + expires;
        }
        setCookie("username", `${userName1}`, "1");
        setCookie("password", `${password1}`, "1");
        localStorage.setItem("UserFormData",JSON.stringify({"FullName":`${fristLastName}`,"Email":`${emailId}`,"DateofBirth":`${dateOfBirth}`,"User":`${userName1}`,Mobile:`${cuntryMobile}`}));
        confirm("Signup Successfully and Your Username,password seved in cookie please Login Now");
        location.href = "/home.html";
    };
};









// function getCookies() {
//     const detail = document.cookie
//     if (!detail) return
//     const userDetail = JSON.parse(detail.split("=")[1])
//     console.log(userDetail);
// }
// getCookies();


