const menuBtn=document.getElementById("menuBtn");
const sidebar=document.getElementById("sidebar");
const closeSidebar=document.getElementById("closeSidebar");
const overlay=document.querySelector(".overlay");
const currentUser = JSON.parse(localStorage.getItem("currentUser") || "null");

document.addEventListener("click", (event) => {

    const actionButton = event.target.closest(
        ".client-view, .client-edit, .project-view, .project-edit, .report-view, .report-download, .meeting-view, .meeting-edit, .advisor-view, .advisor-edit"
    );

    if(actionButton){

        event.preventDefault();
        event.stopImmediatePropagation();
        window.location.href = "404-admin.html";

    }

}, true);


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

/*==================================================
CLIENT VIEW BUTTON
==================================================*/

document.querySelectorAll(".client-view").forEach(function(button){

    button.addEventListener("click",function(e){

        e.preventDefault();

        let row = this.closest("tr");

        let id = row.children[0].innerText;
        let name = row.children[1].innerText;
        let email = row.children[2].innerText;
        let company = row.children[3].innerText;
        let service = row.children[4].innerText;
        let status = row.children[5].innerText;


        alert(
            "CLIENT DETAILS\n\n"+
            "ID : "+id+"\n"+
            "Name : "+name+"\n"+
            "Email : "+email+"\n"+
            "Company : "+company+"\n"+
            "Service : "+service+"\n"+
            "Status : "+status
        );

    });

});



/*==================================================
CLIENT EDIT BUTTON
==================================================*/

document.querySelectorAll(".client-edit").forEach(function(button){

    button.addEventListener("click",function(e){

        e.preventDefault();


        let row = this.closest("tr");

        let nameCell = row.children[1];


        let oldName = nameCell.innerText;


        let newName = prompt(
            "Update Client Name",
            oldName
        );


        if(newName && newName.trim() !== ""){

            nameCell.innerText = newName.trim();

            alert("Client Updated Successfully");

        }


    });


});

/*==================================================
PROJECT VIEW BUTTON
==================================================*/

document.querySelectorAll(".project-view").forEach(function(button){


    button.addEventListener("click",function(){


        let row = this.closest("tr");


        let id = row.children[0].innerText;
        let projectName = row.children[1].innerText;
        let client = row.children[2].innerText;
        let category = row.children[3].innerText;
        let deadline = row.children[4].innerText;
        let status = row.children[5].innerText;



        alert(

            "PROJECT DETAILS\n\n"+

            "Project ID : "+id+"\n"+

            "Project Name : "+projectName+"\n"+

            "Client : "+client+"\n"+

            "Category : "+category+"\n"+

            "Deadline : "+deadline+"\n"+

            "Status : "+status

        );


    });


});






/*==================================================
PROJECT EDIT BUTTON
==================================================*/


document.querySelectorAll(".project-edit").forEach(function(button){


    button.addEventListener("click",function(){


        let row = this.closest("tr");


        let projectNameCell = row.children[1];


        let clientCell = row.children[2];


        let oldProjectName = projectNameCell.innerText;



        let newProjectName = prompt(

            "Edit Project Name:",

            oldProjectName

        );



        if(newProjectName !== null && newProjectName.trim() !== ""){


            projectNameCell.innerText = newProjectName.trim();


            alert("Project Updated Successfully");


        }



    });


});

/*==================================================
REPORT VIEW BUTTON
==================================================*/


const reportViewButtons = document.querySelectorAll(".report-view");


reportViewButtons.forEach(function(button){


    button.addEventListener("click",function(){


        const row = this.closest("tr");

        const data = row.querySelectorAll("td");


        alert(

            "REPORT DETAILS\n\n" +

            "Report ID : " + data[0].innerText + "\n" +

            "Report Name : " + data[1].innerText + "\n" +

            "Category : " + data[2].innerText + "\n" +

            "Created Date : " + data[3].innerText + "\n" +

            "Status : " + data[4].innerText


        );


    });


});






/*==================================================
REPORT DOWNLOAD BUTTON
==================================================*/


const reportDownloadButtons = document.querySelectorAll(".report-download");


reportDownloadButtons.forEach(function(button){


    button.addEventListener("click",function(){


        const row = this.closest("tr");


        const reportName = row.children[1].innerText;


        // Create Sample Report File

        const reportContent =

        "REPORT DETAILS\n\n" +

        "Report Name : " + reportName + "\n" +

        "Generated Date : " + new Date().toLocaleDateString() + "\n\n" +

        "This is a generated admin report document.";



        const blob = new Blob(

            [reportContent],

            {type:"text/plain"}

        );



        const link = document.createElement("a");


        link.href = URL.createObjectURL(blob);


        link.download = reportName + ".txt";


        link.click();



        URL.revokeObjectURL(link.href);



        alert(

            reportName + " downloaded successfully!"

        );


    });


});

/*==================================================
MEETING VIEW BUTTON
==================================================*/

const meetingViewButtons = document.querySelectorAll(".meeting-view");


meetingViewButtons.forEach(button => {


    button.addEventListener("click", function(){


        const row = this.closest("tr");

        const data = row.querySelectorAll("td");


        alert(

            "MEETING DETAILS\n\n" +

            "ID : " + data[0].innerText + "\n" +

            "Title : " + data[1].innerText + "\n" +

            "Client : " + data[2].innerText + "\n" +

            "Date : " + data[3].innerText + "\n" +

            "Time : " + data[4].innerText + "\n" +

            "Type : " + data[5].innerText + "\n" +

            "Status : " + data[6].innerText


        );


    });


});





/*==================================================
MEETING EDIT BUTTON
==================================================*/


const meetingEditButtons = document.querySelectorAll(".meeting-edit");


meetingEditButtons.forEach(button => {


    button.addEventListener("click", function(){


        const row = this.closest("tr");


        const titleCell = row.children[1];

        const clientCell = row.children[2];



        let newTitle = prompt(

            "Edit Meeting Title:",

            titleCell.innerText

        );



        if(newTitle !== null && newTitle.trim() !== ""){


            titleCell.innerText = newTitle;


            let newClient = prompt(

                "Edit Client Name:",

                clientCell.innerText

            );


            if(newClient !== null && newClient.trim() !== ""){

                clientCell.innerText = newClient;

            }



            alert("Meeting Details Updated Successfully!");

        }


    });


});

/*=========================================
VIEW & EDIT BUTTONS
=========================================*/

document.addEventListener("DOMContentLoaded", () => {

    // View Buttons
    const viewButtons = document.querySelectorAll(".advisor-view");

    viewButtons.forEach(button => {

        button.addEventListener("click", function () {

            const row = this.closest("tr");

            const id = row.cells[0].innerText;
            const name = row.cells[1].innerText;
            const department = row.cells[2].innerText;
            const experience = row.cells[3].innerText;
            const clients = row.cells[4].innerText;
            const status = row.cells[5].innerText;

            alert(
                "Engineer Details\n\n" +
                "ID : " + id + "\n" +
                "Name : " + name + "\n" +
                "Department : " + department + "\n" +
                "Experience : " + experience + "\n" +
                "Clients : " + clients + "\n" +
                "Status : " + status
            );

        });

    });



    // Edit Buttons
    const editButtons = document.querySelectorAll(".advisor-edit");

    editButtons.forEach(button => {

        button.addEventListener("click", function () {

            const row = this.closest("tr");

            const engineerName = row.cells[1].innerText;

            const newDepartment = prompt(
                "Edit Department for " + engineerName,
                row.cells[2].innerText
            );

            if (newDepartment !== null && newDepartment.trim() !== "") {

                row.cells[2].innerText = newDepartment;

                alert(engineerName + " updated successfully.");

            }

        });

    });

});

/*=========================================
ACTIVE SIDEBAR LINK
=========================================*/

document.addEventListener("DOMContentLoaded", () => {

    const currentPage = window.location.pathname.split("/").pop();

    const menuLinks = document.querySelectorAll(".sidebar ul li a");

    menuLinks.forEach(link => {

        // Remove old active class
        link.parentElement.classList.remove("active");

        // Get file name from href
        const page = link.getAttribute("href").split("/").pop();

        if (page === currentPage) {
            link.parentElement.classList.add("active");
        }

    });

});





