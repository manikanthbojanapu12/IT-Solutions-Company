/*==========================================
TAB SWITCH
==========================================*/

const loginTab = document.getElementById("loginTab");
const signupTab = document.getElementById("signupTab");

const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

const showSignup = document.getElementById("showSignup");
const showLogin = document.getElementById("showLogin");

loginTab.onclick = () => {

    loginTab.classList.add("active");
    signupTab.classList.remove("active");

    loginForm.classList.add("active");
    signupForm.classList.remove("active");

}

signupTab.onclick = () => {

    signupTab.classList.add("active");
    loginTab.classList.remove("active");

    signupForm.classList.add("active");
    loginForm.classList.remove("active");

}

showSignup.onclick = (e)=>{

    e.preventDefault();
    signupTab.click();

}

showLogin.onclick = (e)=>{

    e.preventDefault();
    loginTab.click();

}

/*==========================================
PASSWORD SHOW HIDE
==========================================*/

document.querySelectorAll(".toggle-password").forEach(icon=>{

    icon.onclick=function(){

        let input=document.getElementById(this.dataset.target);

        if(input.type==="password"){

            input.type="text";
            this.classList.replace("fa-eye","fa-eye-slash");

        }

        else{

            input.type="password";
            this.classList.replace("fa-eye-slash","fa-eye");

        }

    }

});

/*==========================================
CUSTOM DROPDOWN
==========================================*/

function dropdown(btnId,menuId,textId,inputId){

    const btn=document.getElementById(btnId);

    const menu=document.getElementById(menuId);

    const text=document.getElementById(textId);

    const hidden=document.getElementById(inputId);

    btn.onclick=function(){

        menu.classList.toggle("show");
        btn.classList.toggle("active");

    }

    menu.querySelectorAll(".dropdown-item").forEach(item=>{

        item.onclick=function(){

            text.innerHTML=this.innerHTML;

            hidden.value=this.dataset.role;

            menu.classList.remove("show");

            btn.classList.remove("active");

        }

    });

}

dropdown("loginRoleBtn","loginDropdown","loginRoleText","loginRole");

dropdown("signupRoleBtn","signupDropdown","signupRoleText","signupRole");

/*==========================================
CLICK OUTSIDE CLOSE
==========================================*/

document.addEventListener("click",function(e){

    document.querySelectorAll(".role-dropdown").forEach(drop=>{

        if(!drop.contains(e.target)){

            drop.querySelector(".dropdown-menu").classList.remove("show");

            drop.querySelector(".dropdown-btn").classList.remove("active");

        }

    });

});

/*==========================================
REGEX
==========================================*/

const nameRegex=/^[A-Za-z ]+$/;

const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const phoneRegex=/^[0-9]\d{9}$/;

const signupNameInput = document.getElementById("signupName");
const signupPhoneInput = document.getElementById("signupPhone");
const rememberMe = document.getElementById("rememberMe");

if(signupNameInput){
    signupNameInput.addEventListener("input", () => {
        signupNameInput.value = signupNameInput.value.replace(/[^A-Za-z\s]/g, "");
    });
}

if(signupPhoneInput){
    signupPhoneInput.addEventListener("input", () => {
        signupPhoneInput.value = signupPhoneInput.value.replace(/\D/g, "").slice(0, 10);
    });
}

/*==========================================
SIGNUP
==========================================*/

/*==========================================
SIGNUP
==========================================*/

signupForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = this.querySelector("input[type='text']").value.trim();

    const role = document.getElementById("signupRole").value;

    const email = this.querySelector("input[type='email']").value.trim();

    const phone = this.querySelector("input[type='tel']").value.trim();

    const password = document.getElementById("signupPassword").value;

    const confirm = document.getElementById("confirmPassword").value;

    if (name === "") {

        alert("Please enter your name.");
        return;

    }

    if (!nameRegex.test(name)) {

        alert("Name should contain only alphabets.");
        return;

    }

    if (role === "") {

        alert("Please select your role.");
        return;

    }

    if (!emailRegex.test(email)) {

        alert("Enter a valid email address.");
        return;

    }

    if (!phoneRegex.test(phone)) {

        alert("Phone number must contain exactly 10 digits.");
        return;

    }

    if (password.length < 6) {

        alert("Password must be at least 6 characters.");
        return;

    }

    if (password !== confirm) {

        alert("Passwords do not match.");
        return;

    }

    if (!termsCheckbox.checked) {

        alert("Please accept the Terms & Privacy Policy.");
        return;

    }

    alert("Registration Successful.");

    signupForm.reset();

    termsCheckbox.checked = false;

    document.getElementById("signupRole").value = "";

    document.getElementById("signupRoleText").innerHTML = "Choose Role";

    loginTab.click();

});

/*==========================================
LOGIN
==========================================*/

loginForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const role = document.getElementById("loginRole").value;

    const email = this.querySelector("input[type='email']").value.trim();

    const password = document.getElementById("loginPassword").value;

    if (role === "") {

        alert("Please select your role.");
        return;

    }

    if (!emailRegex.test(email)) {

        alert("Enter a valid email address.");
        return;

    }

    if (password.length < 6) {

        alert("Password must be at least 6 characters.");
        return;

    }

    if (!rememberMe.checked) {

        alert("Please select Remember Me.");
        return;

    }

    // Store login details
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userRole", role);

    alert("Login Successful");

    // Role-based redirect
    if (role === "Admin") {

        window.location.href = "admin-dashboard.html";

    } else {

        window.location.href = "client-dashboard.html";

    }

});





