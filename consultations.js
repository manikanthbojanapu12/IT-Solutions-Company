/*=========================================
SIDEBAR TOGGLE
=========================================*/

const menuBtn = document.getElementById("menuBtn");

const closeSidebar = document.getElementById("closeSidebar");

const sidebar = document.getElementById("sidebar");

const overlay = document.getElementById("overlay");

document.addEventListener("click", (event) => {

    const actionButton = event.target.closest(
        ".view-btn, .consult-view-btn, .meeting-view-btn, .client-report-view, .client-report-download"
    );

    if(actionButton){

        event.preventDefault();
        event.stopImmediatePropagation();
        window.location.href = "404-client.html";

    }

}, true);

menuBtn.addEventListener("click", () => {

    sidebar.classList.add("show");

    overlay.classList.add("show");

});

closeSidebar.addEventListener("click", () => {

    sidebar.classList.remove("show");

    overlay.classList.remove("show");

});

overlay.addEventListener("click", () => {

    sidebar.classList.remove("show");

    overlay.classList.remove("show");

});


/*=========================================
SHOW LOGIN EMAIL
=========================================*/

const clientEmail = document.getElementById("clientEmail");

const email = localStorage.getItem("userEmail");

if(email){

    clientEmail.textContent = email;

}


/*=========================================
ACTIVE SIDEBAR MENU
=========================================*/

const currentPage = window.location.pathname.split("/").pop();

const sidebarLinks = document.querySelectorAll(".sidebar ul li a");

sidebarLinks.forEach(link => {

    if(link.getAttribute("href") === currentPage){

        link.parentElement.classList.add("active");

    }

});


/*=========================================
AUTO CLOSE SIDEBAR ON MOBILE
=========================================*/

sidebarLinks.forEach(link => {

    link.addEventListener("click", () => {

        if(window.innerWidth <= 768){

            sidebar.classList.remove("show");

            overlay.classList.remove("show");

        }

    });

});


/*=========================================
CLOSE SIDEBAR WHEN SCREEN RESIZES
=========================================*/

window.addEventListener("resize", () => {

    if(window.innerWidth > 768){

        sidebar.classList.remove("show");

        overlay.classList.remove("show");

    }

});

/*=========================================
VIEW PROJECT DETAILS
=========================================*/

const viewButtons = document.querySelectorAll(".view-btn");

viewButtons.forEach(button => {

    button.addEventListener("click", function () {

        const row = this.closest("tr");

        const projectId = row.cells[0].innerText;
        const projectName = row.cells[1].innerText;
        const engineer = row.cells[2].innerText;
        const category = row.cells[3].innerText;
        const progress = row.cells[4].innerText;
        const status = row.cells[5].innerText;

        alert(
            "PROJECT DETAILS\n\n" +
            "Project ID : " + projectId + "\n" +
            "Project Name : " + projectName + "\n" +
            "Engineer : " + engineer + "\n" +
            "Category : " + category + "\n" +
            "Progress : " + progress + "\n" +
            "Status : " + status
        );

    });

});

/*==========================================
CONSULTATION VIEW BUTTON
==========================================*/

document.querySelectorAll(".consult-view-btn").forEach(function(button){

    button.addEventListener("click", function(){

        const row = this.closest("tr");

        const id = row.cells[0].innerText;
        const engineer = row.cells[1].innerText;
        const department = row.cells[2].innerText;
        const date = row.cells[3].innerText;
        const time = row.cells[4].innerText;
        const status = row.cells[5].innerText;

        alert(
            "CONSULTATION DETAILS\n\n" +
            "Support Session ID : " + id + "\n\n" +
            "Engineer         : " + engineer + "\n" +
            "Department      : " + department + "\n" +
            "Date            : " + date + "\n" +
            "Time            : " + time + "\n" +
            "Status          : " + status + "\n\n" +
            "Thank you for choosing IT Solutions Company Technology Engineery."
        );

    });

});

/*=====================================
MEETING VIEW BUTTON
=====================================*/

const meetingViewButtons = document.querySelectorAll(".meeting-view-btn");

meetingViewButtons.forEach(button => {

    button.addEventListener("click", function () {

        const row = this.closest("tr");

        const meetingId = row.cells[0].innerText;
        const engineer = row.cells[1].innerText;
        const meetingType = row.cells[2].innerText;
        const date = row.cells[3].innerText;
        const time = row.cells[4].innerText;
        const status = row.cells[5].innerText.trim();

        alert(
` Meeting Details

Meeting ID : ${meetingId}

Engineer : ${engineer}

Meeting Type : ${meetingType}

Date : ${date}

Time : ${time}

Status : ${status}`
        );

    });

});

/* ==========================================
   CLIENT REPORT VIEW BUTTON
========================================== */

const reportViewButtons = document.querySelectorAll(".client-report-view");

reportViewButtons.forEach((button) => {

    button.addEventListener("click", function () {

        const row = this.closest("tr");

        const reportId = row.cells[0].innerText;
        const reportName = row.cells[1].innerText;
        const category = row.cells[2].innerText;
        const date = row.cells[3].innerText;
        const status = row.cells[4].innerText;

        alert(
            " Report Details\n\n" +
            "Report ID : " + reportId + "\n" +
            "Report : " + reportName + "\n" +
            "Category : " + category + "\n" +
            "Date : " + date + "\n" +
            "Status : " + status
        );

    });

});


/* ==========================================
   CLIENT REPORT DOWNLOAD BUTTON
========================================== */

const reportDownloadButtons = document.querySelectorAll(".client-report-download");

reportDownloadButtons.forEach((button) => {

    button.addEventListener("click", function () {

        const row = this.closest("tr");

        const reportName = row.cells[1].innerText;

        const reportContent =
`IT Solutions Company IT REPORT

Report Name : ${reportName}

------------------------------------

This is a sample IT report generated for the client.

Thank you for choosing IT Solutions Company IT Solutions.

Generated Successfully.
`;

        const blob = new Blob([reportContent], {
            type: "text/plain"
        });

        const url = URL.createObjectURL(blob);

        const link = document.createElement("a");

        link.href = url;

        link.download = reportName.replace(/\s+/g, "_") + ".txt";

        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);

        URL.revokeObjectURL(url);

    });

});





