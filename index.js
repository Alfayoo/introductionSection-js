var arrow1 = document.querySelector(".arrow-1");

arrow1.addEventListener("click", function () {
    if (arrow1.getAttribute("src") === 'images/icon-arrow-down.svg') {
        document.querySelector(".submenu-1").style.opacity = "1";
        arrow1.setAttribute("src", "images/icon-arrow-up.svg");
    } else if (arrow1.getAttribute("src") === 'images/icon-arrow-up.svg') {
        document.querySelector(".submenu-1").style.opacity = "0";
        arrow1.setAttribute("src", "images/icon-arrow-down.svg");
    }

});

var arrow2 = document.querySelector(".arrow-2");

arrow2.addEventListener("click", function () {
    if (arrow2.getAttribute("src") === 'images/icon-arrow-down.svg') {
        document.querySelector(".submenu-2").style.opacity = "1";
        arrow2.setAttribute("src", "images/icon-arrow-up.svg");
    } else if (arrow2.getAttribute("src") === 'images/icon-arrow-up.svg') {
        document.querySelector(".submenu-2").style.opacity = "0";
        arrow2.setAttribute("src", "images/icon-arrow-down.svg");
    }

});


// sidebar



var sideArrow1 = document.querySelector(".sidebar .arrow-1");

var sideArrow2 = document.querySelector(".sidebar .arrow-2");

sideArrow1.addEventListener("click", function () {
    if (sideArrow1.getAttribute("src") === 'images/icon-arrow-down.svg') {
        document.querySelector(".sidebar-1").style.display = "grid";
        sideArrow1.setAttribute("src", "images/icon-arrow-up.svg");
    } else if (sideArrow1.getAttribute("src") === 'images/icon-arrow-up.svg') {
        document.querySelector(".sidebar-1").style.display = "none";
        sideArrow1.setAttribute("src", "images/icon-arrow-down.svg");
    }
});

sideArrow2.addEventListener("click", function () {
    if (sideArrow2.getAttribute("src") === 'images/icon-arrow-down.svg') {
        document.querySelector(".sidebar-2").style.display = "grid";
        sideArrow2.setAttribute("src", "images/icon-arrow-up.svg");
    } else if (sideArrow2.getAttribute("src") === 'images/icon-arrow-up.svg') {
        document.querySelector(".sidebar-2").style.display = "none";
        sideArrow2.setAttribute("src", "images/icon-arrow-down.svg");
    }
})



// SIDEBAR APPEAR AND DISAPPEAR
document.querySelector(".show").addEventListener("click", function () {
    document.querySelector(".sidebar").style.display = "flex";

});

document.querySelector(".hide").addEventListener("click",function(){
 document.querySelector(".sidebar").style.display = "none";
});