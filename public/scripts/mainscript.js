
import {Post, generateRandomPosts} from './post.js';

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

        // Function to change between multiple screens
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

        homePgBtn.addEventListener("click", () => switchScreen(homePgBtn));
        createPstBtn.addEventListener("click", () => switchScreen(createPstBtn));
        fllwLstBtn.addEventListener("click", () => {
            window.location.href = "/pages/followinglist.html";
        });

        // Load default content on page load
        switchView(mainBtn, postList);

        
    })
