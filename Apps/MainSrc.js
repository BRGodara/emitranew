document.addEventListener("DOMContentLoaded", function () {

    var p = document.getElementsByTagName("p");


    for (var i = 0; i < p.length; i++) {

        if (p[i].textContent.trim() === "Active") {
            p[i].style.color = "#009700";
            p[i].style.fontWeight = "900";
        }
    }
});

document.addEventListener("DOMContentLoaded", function () {

    var p = document.getElementsByTagName("p");


    for (var i = 0; i < p.length; i++) {

        if (p[i].textContent.trim() === "Reject") {
            p[i].style.color = "#ff0000";
            p[i].style.fontWeight = "900";
        }
    }
});

document.addEventListener("DOMContentLoaded", function () {

    var p = document.getElementsByTagName("p");


    for (var i = 0; i < p.length; i++) {

        if (p[i].textContent.trim() === "Pending") {
            p[i].style.color = "#dbd801";
            p[i].style.fontWeight = "900";
        }
    }
});

document.addEventListener("DOMContentLoaded", function () {

    var p = document.getElementsByTagName("p");


    for (var i = 0; i < p.length; i++) {

        if (p[i].textContent.trim() === "Not Applied") {
            p[i].style.color = "#3001db";
            p[i].style.fontWeight = "900";
        }
    }
});