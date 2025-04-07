
import {Post, generateRandomPosts} from './post.js';


// Sample content for "Main" and "Following" views
const mainContent = `
    <div class="post"><h3>Main Post</h3><p>This is a main post.</p></div>
    <div class="post"><h3>Main Post</h3><p>Another main feed post.</p></div>
    <div class="post"><h3>Main Post</h3><p>Main feed content goes here.</p></div>
    <div class="post"><h3>Main Post</h3><p>This is a main post.</p></div>
    <div class="post"><h3>Main Post</h3><p>Another main feed post.</p></div>
    <div class="post"><h3>Main Post</h3><p>Main feed content goes here.</p></div>
    <div class="post"><h3>Main Post</h3><p>This is a main post.</p></div>
    <div class="post"><h3>Main Post</h3><p>Another main feed post.</p></div>
    <div class="post"><h3>Main Post</h3><p>Main feed content goes here.</p></div>
    <div class="post"><h3>Main Post</h3><p>This is a main post.</p></div>
    <div class="post"><h3>Main Post</h3><p>Another main feed post.</p></div>
    <div class="post"><h3>Main Post</h3><p>Main feed content goes here.</p></div>
`;

const followingContent = `
    <div class="post"><h3>Following Post</h3><p>Content from followed users.</p></div>
    <div class="post"><h3>Following Post</h3><p>More posts from those you follow.</p></div>
    <div class="post"><h3>Following Post</h3><p>Stay updated with your network.</p></div>
    <div class="post"><h3>Following Post</h3><p>Content from followed users.</p></div>
    <div class="post"><h3>Following Post</h3><p>More posts from those you follow.</p></div>
    <div class="post"><h3>Following Post</h3><p>Stay updated with your network.</p></div>
    <div class="post"><h3>Following Post</h3><p>Content from followed users.</p></div>
    <div class="post"><h3>Following Post</h3><p>More posts from those you follow.</p></div>
    <div class="post"><h3>Following Post</h3><p>Stay updated with your network.</p></div>
    <div class="post"><h3>Following Post</h3><p>Content from followed users.</p></div>
    <div class="post"><h3>Following Post</h3><p>More posts from those you follow.</p></div>
    <div class="post"><h3>Following Post</h3><p>Stay updated with your network.</p></div>
`;

// Listener for the page upon load

document.addEventListener("DOMContentLoaded", function () {
    const mainBtn = document.getElementById("mainBtn");
    const followingBtn = document.getElementById("followingBtn");
    const scrollView = document.getElementById("scrollView");

    const homePgBtn = document.getElementById("homePgBtn");
    const createPstBtn = document.getElementById("createPstBtn");
    const fllwLstBtn = document.getElementById("fllwLstBtn");

    // Function to switch scroll views between main and following
    function switchView(targetBtn, list) {
        // Remove active class from both buttons
        mainBtn.classList.remove("active");
        followingBtn.classList.remove("active");

        // Add active class to clicked button
        targetBtn.classList.add("active");

        // Change content in scrollView
        scrollView.innerHTML = list.map(post => `
            <div class="post">
                <div class="post-info">
                    <h3>${post.user_id}</h3>
                    <h3>${post.title}</h3>
                    <p>${post.text}</p>
                </div>
            </div>
        `).join("");

    }

    function switchScreen(targetBtn) {
        homePgBtn.classList.remove("active");
        createPstBtn.classList.remove("active");
        fllwLstBtn.classList.remove("active");

        targetBtn.classList.add("active");
    }


    // Begin generation/testing of filtering between posts
    let postList = generateRandomPosts(25);

    // Example of list of users that the current user follows
    let followingList = [];
    for(let i = 0; i < 25; i++){
        if(i % 2 == 0){
            followingList.push(i)
        }
    }

    // Filters all posts in postList to a few posts and returns followingPostList
    function filterPosts(postList, followingList) {
        return postList.filter(post => followingList.includes(post.user_id));
    }
    
    let followingPostList = filterPosts(postList, followingList)

    // Event Listeners for buttons
    mainBtn.addEventListener("click", () => switchView(mainBtn, postList));
    followingBtn.addEventListener("click", () => switchView(followingBtn, followingPostList));

    homePgBtn.addEventListener("click", () => {
        window.location.href = "/pages/mainpage.html"

    });
    createPstBtn.addEventListener("click", () => {
        window.location.href = "/pages/postcreation.html"
    });
    fllwLstBtn.addEventListener("click", () => {
        window.location.href = "/pages/followinglist.html";
    });

    // Load default content on page load
    switchView(mainBtn, postList);
    switchScreen(homePgBtn)
})
