async function apiFetch(url, options = {}) {
    const token = localStorage.getItem('token');
    console.log("using apiFetch")
    options.headers = {
      ...(options.headers || {}),
      'Authorization': 'Bearer ' + token,
      'Content-Type': 'application/json'
    };
}





// Listener for the page upon load
document.addEventListener("DOMContentLoaded", function () {
    const accountID = 1;
    const postDate = new Date().toDateString();
    console.log(postDate)
    document.getElementById("accountID").value = accountID;
    document.getElementById("postDate").value = postDate;

    const homePgBtn = document.getElementById("homePgBtn");
    const createPstBtn = document.getElementById("createPstBtn");
    const fllwLstBtn = document.getElementById("fllwLstBtn");

    function switchScreen(targetBtn) {
        homePgBtn.classList.remove("active");
        createPstBtn.classList.remove("active");
        fllwLstBtn.classList.remove("active");

        targetBtn.classList.add("active");
    }
    /*document.getElementById("postForm").addEventListener("submit", function (event) {
    
        const title = document.getElementById("postTitle").value;
        console.log(title);
        const body = document.getElementById("postBody").value;
        const link = document.getElementById("postLink").value;
        const image = document.getElementById("postImage").files[0];
        const video = document.getElementById("postVideo").files[0];
        const postDate = new Date().toDateString();

        //window.location.href = "/pages/mainpage.html"
      });*/

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