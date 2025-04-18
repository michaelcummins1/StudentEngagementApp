
// Listener for the page upon load
document.addEventListener("DOMContentLoaded", function () {


    const homePgBtn = document.getElementById("homePgBtn");
    const createPstBtn = document.getElementById("createPstBtn");
    const fllwLstBtn = document.getElementById("fllwLstBtn");

    function switchScreen(targetBtn) {
        homePgBtn.classList.remove("active");
        createPstBtn.classList.remove("active");
        fllwLstBtn.classList.remove("active");

        targetBtn.classList.add("active");
    }
    document.getElementById("postForm").addEventListener("submit", function (event) {
        event.preventDefault();
    
        const title = document.getElementById("postTitle").value;
        const body = document.getElementById("postBody").value;
        const link = document.getElementById("postLink").value;
        const image = document.getElementById("postImage").files[0];
        const video = document.getElementById("postVideo").files[0];
    
        // Need to send this data to the database as a new Post
        console.log("Title:", title);
        console.log("Body:", body);
        console.log("Link:", link);
        console.log("Image File:", image);
        console.log("Video File:", video);

        window.location.href = "/pages/mainpage.html"
      });

    homePgBtn.addEventListener("click", () => {
        window.location.href = "/pages/mainpage.html"
    });
    createPstBtn.addEventListener("click", () => {
        window.location.href = "/pages/postcreation.html"
    });
    fllwLstBtn.addEventListener("click", () => {
        window.location.href = "/pages/followinglist.html";
    });

    switchScreen(createPstBtn)
})