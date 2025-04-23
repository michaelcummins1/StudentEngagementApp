// Listener for the page upon load

    document.addEventListener("DOMContentLoaded", function () {
        const followingListContainer = document.getElementById("followingListContainer");
        const homePgBtn = document.getElementById("homePgBtn");
        const createPstBtn = document.getElementById("createPstBtn");
        const fllwLstBtn = document.getElementById("fllwLstBtn");

        // Search bar
        const searchBar = document.getElementById("searchBar")

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
            followingListContainer.innerHTML = "";
            if (followedUsers.length === 0) {
                followingListContainer.innerHTML = "<p>No followed accounts yet.</p>";
                return;
            }

            // Create the unordered list
            const ul = document.createElement("ul");
            ul.id = "followingList";

            // Populate list items
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
            `).join("");

            followingListContainer.appendChild(ul);
        }

        // Search filter function
        function filterList() {
            const query = searchBar.value.toLowerCase();

            const filteredUsers = followedUsers.filter(user =>
                user.username.toLowerCase().includes(query)
            );

            renderFollowingList(filteredUsers);
            
        }

        // Search input listener
        searchBar.addEventListener("input", filterList);

        const searchForm = document.querySelector(".search-Bar");
        if (searchForm) {
            searchForm.addEventListener("submit", function (e) {
                e.preventDefault();
            });
        }
        
        // Back button event listener
        homePgBtn.addEventListener("click", function () {
            window.location.href = "/pages/mainpage.html";
        });
        createPstBtn.addEventListener("click", () => {
            window.location.href = "/pages/postcreation.html"
        });
        fllwLstBtn.addEventListener("click", () => {
            window.location.href = "/pages/followinglist.html";
        });

        // Initial rendering of followed users
        renderFollowingList();
    });