AOS.init({
    duration:1200,
    once:true,
    offset:120,
    easing:"ease-in-out"
});

/*=========================
    HAMBURGER MENU
=========================*/

const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");
const mobileMenu = document.querySelector(".mobile-menu");

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.add("active");
    document.body.style.overflow = "hidden";
});

closeBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    document.body.style.overflow = "auto";
});

/* Close menu when clicking menu links */

document.querySelectorAll(".mobile-menu a").forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
        document.body.style.overflow = "auto";
    });
});


/*=========================
      STICKY NAVBAR
=========================*/

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 60){
        navbar.classList.add("sticky");
    }else{
        navbar.classList.remove("sticky");
    }

});




/*=========================
   HERO TEXT ANIMATION
=========================*/

window.addEventListener("load",()=>{

    const hero = document.querySelector(".hero-content");

    if(hero){
        hero.classList.add("show");
    }

});


/*=========================
     SCROLL REVEAL
=========================*/

const revealElements = document.querySelectorAll(
".card,.hero-bottom div,.hero-content,.quote-btn");

function reveal(){

    let windowHeight = window.innerHeight;

    revealElements.forEach(el=>{

        let top = el.getBoundingClientRect().top;

        if(top < windowHeight-120){

            el.classList.add("show");

        }

    });

}

window.addEventListener("scroll",reveal);

reveal();


/*=========================
    SMOOTH SCROLL
=========================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


/*=========================
      BUTTON RIPPLE
=========================*/

const buttons = document.querySelectorAll(".btn,.quote-btn");

buttons.forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform="translateY(-4px) scale(1.03)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform="translateY(0) scale(1)";

    });

});


/*=========================
   PARALLAX HERO EFFECT
=========================*/

window.addEventListener("scroll",()=>{

    const hero=document.querySelector(".hero");

    let offset=window.pageYOffset;

    if(hero){
        hero.style.backgroundPositionY=offset*0.5+"px";
    }

});


/*=========================
   CARD HOVER ANIMATION
=========================*/

document.querySelectorAll(".card").forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect=card.getBoundingClientRect();

        const x=e.clientX-rect.left;

        const y=e.clientY-rect.top;

        card.style.setProperty("--x",x+"px");

        card.style.setProperty("--y",y+"px");

    });

});


/*=========================
     PRELOADER (Optional)
=========================*/

window.addEventListener("load",()=>{

    const loader=document.querySelector("#loader");

    if(loader){

        loader.style.opacity="0";

        setTimeout(()=>{

            loader.style.display="none";

        },600);

    }

});

AOS.init({
    duration:1200,
    once:true,
    offset:120,
    easing:"ease-in-out"
});


/*==================================================
        PAGE LOADER SCRIPT
==================================================*/


window.addEventListener("load", function(){


    const loader = document.querySelector(".page-loader");


    if(loader){


        setTimeout(()=>{


            loader.classList.add("hide");


            document.body.style.overflow = "auto";


        },1200);


    }


});



const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".nav-links a, .mobile-menu a").forEach(link => {
    const linkPage = link.getAttribute("href");

    if (
        linkPage === currentPage ||
        (currentPage === "" && linkPage === "index.html")
    ) {
        link.classList.add("active");
    }
});


/*=========================
      FAQ ACCORDION
=========================*/

document.querySelectorAll(".faq-item").forEach(item => {
    const question = item.querySelector(".faq-question");

    if(question){
        question.addEventListener("click", () => {
            item.classList.toggle("active");
        });
    }
});

const phoneInput = document.getElementById("phone");
const nameInput = document.getElementById("fullName");

if(nameInput){
    nameInput.addEventListener("input", () => {
        nameInput.value = nameInput.value.replace(/[^A-Za-z\s]/g, "");
    });
}

if(phoneInput){
    phoneInput.addEventListener("input", () => {
        phoneInput.value = phoneInput.value.replace(/\D/g, "").slice(0, 10);
    });
}
// ===============================
// Contact Form Validation
// ===============================

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const name = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    // Regular Expressions
    const namePattern = /^[A-Za-z\s]+$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[0-9]{10}$/;
    const subjectPattern = /^[A-Za-z\s]+$/;

    // Name Validation
    if(name === ""){
        alert("Please enter your full name.");
        return;
    }

    if(!namePattern.test(name)){
        alert("Name should contain only alphabets.");
        return;
    }

    // Email Validation
    if(email === ""){
        alert("Please enter your email address.");
        return;
    }

    if(!emailPattern.test(email)){
        alert("Please enter a valid email address.");
        return;
    }

    // Phone Validation
    if(phone === ""){
        alert("Please enter your phone number.");
        return;
    }

    if(!phonePattern.test(phone)){
        alert("Phone number must contain exactly 10 digits.");
        return;
    }

    // Subject Validation
    if(subject === ""){
        alert("Please enter the subject.");
        return;
    }

    if(!subjectPattern.test(subject)){
        alert("Subject should contain only letters.");
        return;
    }

    // Message Validation
    if(message === ""){
        alert("Please enter your message.");
        return;
    }

    if(message.length < 10){
        alert("Message should contain at least 10 characters.");
        return;
    }

    // Success
    alert("Message sent successfully!");

    // Clear Form
    form.reset();

    // Redirect after 1 second
    setTimeout(function(){

        window.location.href = "404.html";

    },500);

});





