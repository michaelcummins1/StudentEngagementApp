document.addEventListener('DOMContentLoaded', () => {
    const suggestionsContainer = document.getElementById('suggestionsContainer');
    const homePgBtn = document.getElementById('homeButton');

    // --- Dummy data for user suggestions (replace with actual data fetching) ---
    const userSuggestions = [
        { username: 'potential_user1', fullName: 'Potential User One' },
        { username: 'another_account', fullName: 'Another Account' },
        { username: 'new_person', fullName: 'New Person Here' },
        { username: 'user42', fullName: 'User Forty Two' },
        { username: 'tech_guy', fullName: 'Tech Enthusiast' }
    ];

    function handleFollow(button, username) {
        // In a real application, you would send a request to your server
        // to follow this user. For now, we'll just update the UI.
        console.log(`Following user: ${username}`);
        button.textContent = 'Following';
        button.classList.add('following'); // Add a class for styling
        button.disabled = true;
    }

    function renderSuggestions() {
        suggestionsContainer.innerHTML = ''; // Clear previous content
        userSuggestions.forEach(suggestion => {
            const suggestionDiv = document.createElement('div');
            suggestionDiv.classList.add('follow-suggestion');
            const usernameSpan = document.createElement('span');
            usernameSpan.textContent = `@${suggestion.username} (${suggestion.fullName})`;
            const followButton = document.createElement('button');
            followButton.classList.add('follow-button');
            followButton.textContent = 'Follow';
            followButton.addEventListener('click', () => handleFollow(followButton, suggestion.username));

            suggestionDiv.appendChild(usernameSpan);
            suggestionDiv.appendChild(followButton);
            suggestionsContainer.appendChild(suggestionDiv);
        });
    }

    renderSuggestions();

    homePgBtn.addEventListener("click", function () {
        window.location.href = "/pages/mainpage.html";
    });
    createPstBtn.addEventListener("click", () => {
        window.location.href = "/pages/postcreation.html";
    });
    fllwLstBtn.addEventListener("click", () => {
        window.location.href = "/pages/followinglist.html";
    });
});