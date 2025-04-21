// Listener for the page upon load

document.addEventListener("DOMContentLoaded", function () {
    const homePgBtn = document.getElementById("homePgBtn");

    homePgBtn.addEventListener("click", () => {
        window.location.href = "/pages/mainpage.html";
    });
})