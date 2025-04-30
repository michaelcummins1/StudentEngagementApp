document.addEventListener("DOMContentLoaded", function () {
    const followingListContainer = document.getElementById("followingListContainer");
    const homePgBtn = document.getElementById("homePgBtn");
    const createPstBtn = document.getElementById("createPstBtn");
    const fllwLstBtn = document.getElementById("fllwLstBtn");
    const searchBar = document.getElementById("searchBar");
    const findPeopleButton = document.getElementById("findPeopleButton"); // Get the "Find People to Follow" button

    // Testing/Example users
    const followedUsers = [
        { username: "RussAbeJr", fullName: "Russell Abraham", profilePic: "../assets/images/blank_pfp.png" },
        { username: "MichaelCummins1", fullName: "Michael Cummins", profilePic: "../assets/images/blank_pfp.png" },
        { username: "tyhouser89", fullName: "Tyler Houser", profilePic: "../assets/images/blank_pfp.png" },
        { username: "DevinPF", fullName: "Devin Franchino", profilePic: "../assets/images/blank_pfp.png" },
        { username: "JaheimOates", fullName: "Jaheim Oates", profilePic: "../assets/images/blank_pfp.png" },
        { username: "JohnDoe1", fullName: "John Doe", profilePic: "../assets/images/blank_pfp.png" },
        { username: "JaneDoe2025", fullName: "Jane Doe", profilePic: "../assets/images/blank_pfp.png" },
        { username: "mrTesting", fullName: "Test Person", profilePic: "../assets/images/blank_pfp.png" },
        { username: "missExample", fullName: "Miss Example", profilePic: "../assets/images/blank_pfp.png" },
        { username: "idk", fullName: "Isaiah Doesnt Know", profilePic: "../assets/images/blank_pfp.png" },
        { username: "ihaveareallyreallyreallylongnamewhywouldieverevereverdothis", fullName: "Why Did My Parents Give Me Such A Long Name", profilePic: "../assets/images/blank_pfp.png" },
        { username: "a", fullName: "a", profilePic: "../assets/images/blank_pfp.png" }
    ];

    // Function to render the followed users list
    function renderFollowingList(usersToRender = followedUsers) {
        followingListContainer.innerHTML = ""; // Clear the container
        if (usersToRender.length === 0) {
            followingListContainer.innerHTML = "<p>No followed accounts yet.</p>";
            return;
        }

        // Create the unordered list
        const ul = document.createElement("ul");
        ul.id = "followingList";

        // Populate list items.  The map function is efficient for creating the list items.
        ul.innerHTML = usersToRender.map(user => `
            <li class="followed-user">
                <a href="#" class="user-link">
                    <img src="${user.profilePic}" alt="${user.fullName}" class="profile-pic">
                    <div class="user-info">
                        <h3>${user.fullName}</h3>
                        <p>@${user.username}</p>
                    </div>
                </a>
            </li>
        `).join("");  // Use join to convert the array of strings to a single HTML string

        followingListContainer.appendChild(ul); // Append the list to the container
    }

    // Search filter function
    function filterList() {
        const query = searchBar.value.toLowerCase();
        const filteredUsers = followedUsers.filter(user =>
            user.username.toLowerCase().includes(query) ||
            user.fullName.toLowerCase().includes(query)
        );
        renderFollowingList(filteredUsers); // Re-render the list with the filtered users
    }

    // Search input listener
    searchBar.addEventListener("input", filterList);

    // Prevent form submission (optional, if you're not using server-side search)
    const searchForm = document.querySelector(".search-Bar");
    if (searchForm) {
        searchForm.addEventListener("submit", function (e) {
            e.preventDefault(); // Prevent the default form submission behavior
        });
    }

    // Event listeners for the navigation buttons
    homePgBtn.addEventListener("click", function () {
        window.location.href = "/pages/mainpage.html";
    });

    createPstBtn.addEventListener("click", () => {
        window.location.href = "/pages/postcreation.html";
    });

    fllwLstBtn.addEventListener("click", () => {
        window.location.href = "/pages/followinglist.html";
    });

    // Event listener for the "Find People to Follow" button
    if (findPeopleButton) {
        findPeopleButton.addEventListener("click", () => {
            window.location.href = "/pages/follow.html"; // Navigate to the follow.html page
        });
    }

    // Initial rendering of the followed users
    renderFollowingList();
});
