const menuBtn=document.getElementById("menuBtn");
const sidebar=document.getElementById("sidebar");
const closeSidebar=document.getElementById("closeSidebar");
const overlay=document.querySelector(".overlay");


menuBtn.onclick=()=>{

    sidebar.classList.add("active");
    overlay.classList.add("show");

}


closeSidebar.onclick=()=>{

    sidebar.classList.remove("active");
    overlay.classList.remove("show");

}


overlay.onclick=()=>{

    sidebar.classList.remove("active");
    overlay.classList.remove("show");

}

/*=========================================
DISPLAY USER EMAIL
=========================================*/

const email = localStorage.getItem("userEmail");

if (email) {

    document.getElementById("adminEmail").textContent = email;

}

/*=========================================
LOGOUT
=========================================*/

const logout = document.querySelector(".fa-right-from-bracket");

if(logout){

    logout.parentElement.addEventListener("click",function(){

        localStorage.removeItem("currentUser");

        window.location.href="login.html";

    });

}

/*=========================================
ACTIVE SIDEBAR MENU
=========================================*/

const menuItems = document.querySelectorAll(".sidebar ul li");

menuItems.forEach(item=>{

    item.addEventListener("click",function(){

        menuItems.forEach(i=>i.classList.remove("active"));

        this.classList.add("active");

    });

});

/*=========================================
CARD ANIMATION
=========================================*/

const cards=document.querySelectorAll(".card");

cards.forEach((card,index)=>{

    card.style.opacity="0";

    card.style.transform="translateY(40px)";

    setTimeout(()=>{

        card.style.transition=".6s ease";

        card.style.opacity="1";

        card.style.transform="translateY(0)";

    },index*180);

});

/*=========================================
WELCOME MESSAGE
=========================================*/

const heading=document.querySelector(".dashboard h1");

if(currentUser){

    heading.innerHTML="Welcome Back, "+currentUser.name+" ";

}

/*=========================================
CURRENT DATE
=========================================*/

const today=new Date();

const options={

    weekday:"long",

    day:"numeric",

    month:"long",

    year:"numeric"

};

console.log(today.toLocaleDateString("en-IN",options));


/*=====================================
ACTIVE SIDEBAR MENU
=====================================*/

const currentPage = window.location.pathname.split("/").pop();

const sidebarLinks = document.querySelectorAll(".sidebar ul li a");

sidebarLinks.forEach(link => {

    const page = link.getAttribute("href");

    if (page === currentPage) {

        link.parentElement.classList.add("active");

    }

});





