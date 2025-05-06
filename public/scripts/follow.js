document.addEventListener("DOMContentLoaded", function () {
    const findPeopleContainer = document.getElementById("findPeopleContainer");
    const searchBar = document.getElementById("searchBar");

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

    // --- Load followed users from localStorage ---
    let followedUsers = JSON.parse(localStorage.getItem("followedUsers")) || [];

    function saveFollowedUsers() {
        localStorage.setItem("followedUsers", JSON.stringify(followedUsers));
    }

    function isFollowing(username) {
        return followedUsers.includes(username);
    }

    function renderFindPeopleList(usersToRender = allUsers) {
        findPeopleContainer.innerHTML = "";

        if (usersToRender.length === 0) {
            findPeopleContainer.innerHTML = "<p>No users found.</p>";
            return;
        }

        const ul = document.createElement("ul");
        ul.id = "findPeopleList";

        ul.innerHTML = usersToRender.map(user => {
            const following = isFollowing(user.username);
            return `
                <li class="user-card">
                    <a href="#" class="user-link">
                        <img src="${user.profilePic}" alt="${user.fullName}" class="profile-pic">
                        <div class="user-info">
                            <h3>${user.fullName}</h3>
                            <p>@${user.username}</p>
                        </div>
                    </a>
                        <button class="follow-btn ${following ? "following" : "not-following"}" data-username="${user.username}">
                            ${following ? "Unfollow" : "Follow"}
                        </button>
                </li>
            `;
        }).join("");

        findPeopleContainer.appendChild(ul);

        document.querySelectorAll(".follow-btn").forEach(btn => {
            btn.addEventListener("click", function () {
                const username = this.getAttribute("data-username");
                if (isFollowing(username)) {
                    followedUsers = followedUsers.filter(u => u !== username);
                } else {
                    followedUsers.push(username);
                }
                saveFollowedUsers();
                // Re-render once someone presses button
                renderFindPeopleList();
            });
        });
    }
        // Search filter function
        function filterList() {
            const query = searchBar.value.toLowerCase();

            const filteredUsers = allUsers.filter(user =>
                user.username.toLowerCase().includes(query) ||
                user.fullName.toLowerCase().includes(query)
            );

            renderFindPeopleList(filteredUsers);
            
        }

        // Search input listener
        searchBar.addEventListener("input", filterList);

        const searchForm = document.querySelector(".search-Bar");
        if (searchForm) {
            searchForm.addEventListener("submit", function (e) {
                e.preventDefault();
            });
        }

    // --- Nav buttons ---
    document.getElementById("homePgBtn").addEventListener("click", () => {
        window.location.href = "/pages/mainpage.html";
    });
    document.getElementById("createPstBtn").addEventListener("click", () => {
        window.location.href = "/pages/postcreation.html";
    });
    document.getElementById("fllwLstBtn").addEventListener("click", () => {
        window.location.href = "/pages/followinglist.html";
    });

    // --- Initial render ---
    renderFindPeopleList();
});
