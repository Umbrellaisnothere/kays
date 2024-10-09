document.addEventListener("DOMContentLoaded", function() {
    const welcomeMessage = document.getElementById("welcome-message");
    
    setTimeout(() => {
        welcomeMessage.style.opacity = 0;
        setTimeout(() => {
            welcomeMessage.style.display = "none";
        }, 1000);
    }, 3000);
});