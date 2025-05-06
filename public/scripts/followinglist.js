// Listener for the page upon load

    document.addEventListener("DOMContentLoaded", function () {
        const followingListContainer = document.getElementById("followingListContainer");
        const followPgBtn = document.getElementById("followPgBtn");
        const homePgBtn = document.getElementById("homePgBtn");
        const createPstBtn = document.getElementById("createPstBtn");
        const fllwLstBtn = document.getElementById("fllwLstBtn");

        // Search bar
        const searchBar = document.getElementById("searchBar")

        const allUsers = [
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
            { username: "hello", fullName: "HelloIAmMe", profilePic: "../assets/images/blank_pfp.png" },
            { username: "Rando123", fullName: "randomMan1238", profilePic: "../assets/images/blank_pfp.png" },
            { username: "abcde", fullName: "abcde", profilePic: "../assets/images/blank_pfp.png" },
            { username: "eaglesLover408", fullName: "Eagles Lover", profilePic: "../assets/images/blank_pfp.png" },
            { username: "username", fullName: "Full Name", profilePic: "../assets/images/blank_pfp.png" },
            { username: "ursinusStudent12", fullName: "Mr Student12", profilePic: "../assets/images/blank_pfp.png" },
            { username: "bobPerson", fullName: "Bob Person", profilePic: "../assets/images/blank_pfp.png" },
            { username: "billyIII", fullName: "Billy the 3rd", profilePic: "../assets/images/blank_pfp.png" },
        ];
        
        const followedUsernames = JSON.parse(localStorage.getItem("followedUsers")) || [];
        
        const followedUsers = allUsers.filter(user => followedUsernames.includes(user.username));
        

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
                <li class="user-card">
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
                user.username.toLowerCase().includes(query) ||
                user.fullName.toLowerCase().includes(query)
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

        // Event listener for the "Find People to Follow" button
        if (findPeopleButton) {
            findPeopleButton.addEventListener("click", () => {
                window.location.href = "/pages/follow.html"; // Navigate to the follow.html page
            });
        }

        // Initial rendering of followed users
        renderFollowingList();
    });