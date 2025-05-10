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
    //Button Defs
    const logOutBtn = document.getElementById("logOutBtn");
    const viewPostsBtn = document.getElementById("viewPostsBtn");
    const homePgBtn = document.getElementById("homePgBtn");
    const createPstBtn = document.getElementById("createPstBtn");
    const fllwLstBtn = document.getElementById("fllwLstBtn");
    
    //Logout
    logOutBtn.addEventListener("click", () => {
        localStorage.removeItem('jwt')
        window.location.href = '/pages/login.html'
    });
    //Load MyPosts Page
    viewPostsBtn.addEventListener("click", () => {
        window.location.href = "/pages/createdposts.html"
    });
    //Load Main Page
    homePgBtn.addEventListener("click", () => {
        window.location.href = "/pages/mainpage.html"
    });
    //Load Post Creator
    createPstBtn.addEventListener("click", () => {
        window.location.href = "/pages/postcreation.html"
    });
    //Load Following List
    fllwLstBtn.addEventListener("click", () => {
        window.location.href = "/pages/followinglist.html";
    });
})
