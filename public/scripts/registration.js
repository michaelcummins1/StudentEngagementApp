// Listener for the page upon load

document.addEventListener("DOMContentLoaded", function () {
    const backToLoginBtn = document.getElementById("backToLoginBtn");


    backToLoginBtn.addEventListener("click", () => {
        window.location.href = "/pages/login.html";
    })

});