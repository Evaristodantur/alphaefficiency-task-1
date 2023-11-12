document.addEventListener("DOMContentLoaded", function() {
    
    // Get a reference to the "hamburger" and "hamburger-menu" elements
    const hamburgerOpener = document.getElementById("hamburger-opener");
    const hamburgerMenu = document.getElementById("hamburger-menu");
    const hamburgerClose = document.getElementById("hamburger-close");

    // Add a click event listener to the "hamburger" element
    hamburgerClose.addEventListener("click", function() {
        hamburgerMenu.style.right = "-500px";
    })

    // Add a click event listener to the "hamburger" element
    hamburgerOpener.addEventListener("click", function() {
        hamburgerMenu.style.right = "0px";
    })
});