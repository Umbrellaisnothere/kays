document.addEventListener("DOMContentLoaded", function() {
    const welcomeMessage = document.getElementById("welcome-message");
    const mainContent = document.getElementById('main-content');
    
    setTimeout(() => {
        welcomeMessage.style.opacity = 0;
        // setTimeout(() => {
            welcomeMessage.style.display = "none";
        // }, 1000);
            mainContent.classList.remove('hidden');
            mainContent.classList.add('show-content');
    }, 5000);
});
