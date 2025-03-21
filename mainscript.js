

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
    function switchView(targetBtn, content) {
        // Remove active class from both buttons
        mainBtn.classList.remove("active");
        followingBtn.classList.remove("active");

        // Add active class to clicked button
        targetBtn.classList.add("active");

        // Change content in scrollView
        scrollView.innerHTML = content;
    }

    function switchScreen(targetBtn){
        homePgBtn.classList.remove("active");
        createPstBtn.classList.remove("active");
        fllwLstBtn.classList.remove("active");

        targetBtn.classList.add("active");
    }

    // Load default content on page load
    switchView(mainBtn, mainContent);


    // Event Listeners for buttons
    mainBtn.addEventListener("click", () => switchView(mainBtn, mainContent));
    followingBtn.addEventListener("click", () => switchView(followingBtn, followingContent));

    homePgBtn.addEventListener("click", () => switchScreen(homePgBtn));
    createPstBtn.addEventListener("click", () => switchScreen(createPstBtn));
    fllwLstBtn.addEventListener("click", () => switchScreen(fllwLstBtn));
})


