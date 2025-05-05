
import {Post, generateRandomPosts} from './post.js';

// Listener for the page upon load

document.addEventListener("DOMContentLoaded", async function () {
    const mainBtn = document.getElementById("mainBtn");
    const followingBtn = document.getElementById("followingBtn");
    const scrollView = document.getElementById("scrollView");

    const homePgBtn = document.getElementById("homePgBtn");
    const createPstBtn = document.getElementById("createPstBtn");
    const fllwLstBtn = document.getElementById("fllwLstBtn");

    const settBtn = document.getElementById("settingsButton");
    const acctBtn = document.getElementById("acctButton");

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
                    <h3>${post.title}</h3>
                    <p>${post.text}</p>
                    <p>${post.link}</p>
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
    let postList = [];

    try {
        const res = await fetch('/api/posts');
        if (!res.ok) throw new Error("Failed to fetch posts");
    
        const postData = await res.json();
        console.log(postData);
        
        postList = postData.map(post => {
            return new Post(
                post.accountID,
                post.postID,
                post.postDate,
                post.Title,
                post.postDescription,
                post.image,
                post.video,
                post.link
            );
          });

          console.log(postList[0].text)
        
      } catch (err) {
        console.error("Error fetching posts:", err);
      }

    // Example of list of users that the current user follows
    let followingList = [];
    for(let i = 0; i < 25; i++){
        if(i % 2 != 0){
            followingList.push(i)
        }
    }

    // Filters all posts in postList to a few posts and returns followingPostList
    function filterPosts(postList, followingList) {
        return postList.filter(post => followingList.includes(post.account_id));
    }

    let followingPostList = filterPosts(postList, followingList);

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
    settBtn.addEventListener("click", () => {
        window.location.href = "/pages/settings.html"
    });
    acctBtn.addEventListener("click", () => {
        window.location.href = "/pages/userprofile.html"
    });

    // Load default content on page load
    switchView(mainBtn, postList);
    switchScreen(homePgBtn)
})
