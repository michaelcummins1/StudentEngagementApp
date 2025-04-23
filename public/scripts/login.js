// Listener for the page upon load

document.addEventListener("DOMContentLoaded", function () {
    const homePgBtn = document.getElementById("homePgBtn");
    const createAccountBtn = document.getElementById("createAccountBtn");

    homePgBtn.addEventListener("click", () => {
        window.location.href = "/pages/mainpage.html";
    });
    createAccountBtn.addEventListener("click", () => {
        window.location.href = "/pages/registration.html";
    });
})