// Listener for the page upon load

    document.addEventListener("DOMContentLoaded", function () {
        const followingListContainer = document.getElementById("followingListContainer");
        const backBtn = document.getElementById("backBtn");

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
            { username: "ihaveareallylongnamewhywouldieverdothis", fullName: "Why Did My Parents Give Me Such A Long Name", profilePic: "../assets/images/blank_pfp.png" }
        ];

        // Function to render the followed users list
        function renderFollowingList() {
            if (followedUsers.length === 0) {
                followingListContainer.innerHTML = "<p>No followed accounts yet.</p>";
                return;
            }

            followingListContainer.innerHTML = followedUsers.map(user => `
                <div class="followed-user">
                    <img src="${user.profilePic}" alt="${user.fullName}" class="profile-pic">
                    <div class="user-info">
                        <h3>${user.fullName}</h3>
                        <p>@${user.username}</p>
                    </div>
                </div>
            `).join("");
        }

        // Back button event listener
        backBtn.addEventListener("click", function () {
            window.location.href = "/pages/mainpage.html";
        });

        // Initial rendering of followed users
        renderFollowingList();
    });