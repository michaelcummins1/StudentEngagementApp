// Listener for the page upon load

// Simulate loading user's data (this later should come from database)
const userData = {
    username: "exampleUser",
    firstName: "Example",
    lastName: "User",
    profilePicture: "/assets/images/blank_pfp.png"
};

document.addEventListener("DOMContentLoaded", function () {

    // Populate the form fields with user data
    document.getElementById('username').value = userData.username;
    document.getElementById('firstName').value = userData.firstName;
    document.getElementById('lastName').value = userData.lastName;

    // Update profile image if user has one
    if (userData.profilePicture) {
        document.getElementById('profileImage').src = userData.profilePicture;
    }

    const viewPostsBtn = document.getElementById("viewPostsBtn");

    const homePgBtn = document.getElementById("homePgBtn");
    const createPstBtn = document.getElementById("createPstBtn");
    const fllwLstBtn = document.getElementById("fllwLstBtn");
    const logOutBtn = document.getElementById("logOutBtn");
    //Load created Posts
    viewPostsBtn.addEventListener("click", () => {
        window.location.href = "/pages/createdposts.html"
    });
    //Load Main Page
    homePgBtn.addEventListener("click", () => {
        window.location.href = "/pages/mainpage.html"
    });
    //Load post Creation Window
    createPstBtn.addEventListener("click", () => {
        window.location.href = "/pages/postcreation.html"
    });
    //Load Followers List
    fllwLstBtn.addEventListener("click", () => {
        window.location.href = "/pages/followinglist.html";
    });
   //Log out
   logOutBtn.addEventListener("click", () => {
    localStorage.removeItem('jwt');
    window.location.href = '/pages/login.html';
});
})
