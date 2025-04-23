// Test case for 1.1.1 UserID Key
function testUserIDKey(userID) {
    
    if (userID) {
        console.log("Test passed: UserID Provided");
    } else {
        console.log("Test failed: UserID not provided");
    }
}
 

// Test case for 1.1.3 Administative Permissions
function testAdminPermissions(hasAdminPerms) {
    if (hasAdminPerms) {
        console.log("Test passed: User had Aministrative Permissions");
    } else {
        console.log("Test failed: User did not have Administrative Permissions");
    }
}

// Test case for 1.1.5 Post Permissions
function testPostPermissions(canPost) {
    if (canPost) {
        console.log("Test passed: User has permission to post");
    } else {
        console.log("Test failed: User does not have permission to post");

    }
}

// Test case for 1.2.2 Post-Date Key 
function testPostDate(postDate) {
    if (postDate) {
        console.log("Test passed: Post-Date Key Provided");
    } else {
        console.log("Test failed: Post-Date Key not provided");
    }
}

// Test case for 1.2.3 Like Key 
function testLikeKey(likeStatus){
    if (likeStatus === 1) {
        console.log("Test passed: Post Liked.");
    } else if (likeStatus === -1) {
        console.log("Test passed: Post Disliked.");
    } else { 
        console.log("Test failed: Invalid like status.");
    }
}

// Test case for 1.3 Crediential Interface 
function testCredentialInterface(username, password) {
    if (username && password) {
        console.log("Test passed: Credential Interface is working.");
    } else {
        console.log("Test failed: Credential Interface Invalid.");
    }
}

// Test case for 1.4.1 following List 
function testFollowingList(followingList) {
    if (followingList.length > 0) {
        console.log("Test passed: Following List is not empty.");
    } else {
        console.log("Test failed: Following List is empty.");
    }
}

// Test Case for 2.2 Institutional Selection 
function testInstitutionalSelection(institution) {
    if (institution) {
        console.log("Test passed: Institutional Selection is working.");
    } else {
        console.log("Test failed: Institutional Selection is not working.");
    }
}

// Test Case for 2.3 Account Type Field
function testAccountTypeField(accountType) {
    if (accountType) {
        console.log("Test passed: Account Type Field is working.");
    } else {
        console.log("Test failed: Account Type Field is not working.");
    }
}

// Test Case for 2.4 Email Field
function testEmailField(email){
    if (email,includes("@")) {
        console.log("Test passed: Email is Valid.");
    } else {
        console.log("Test failed: Email is Invalid.");
    }
}

// Test case for 3.1 Admin Account Creation 
function testAdminAccountCration(isAdminCreated) { 
    if (isAdminCreated) {
        console.log("Test passed: Admin Account created.");
    } else { 
        console.log("Test failed: Admin Account not created.");

    }

}

// Test case for 4.1.1 Choose Following 
function testChooseFollowing(isFollowing) {
    if (isFollowing) {
        console.log("Test passed: User followed.");
    } else {
        console.log("Test failed: User did not followe.");
    }
}

// Test case for 4.1.2 View Following
function testViewFollowing(isViewing) {
    if (isViewing) {
        console.log("Test passed: User is viewing following.");
    } else {
        console.log("Test failed: User is not viewing following.");
    }
}

// Test case for 4.1.3 Delete Following
function testDeleteFollowing(isDeleted) {
    if (isDeleted) {
        console.log("Test passed: User deleted following.");
    } else {
        console.log("Test failed: User did not delete following.");
    }
}

// Test Case for 4.2.1 Create Post
function testCreatePost(canCreatePost) {
    if (canCreatePOst) {
        console.log("Test passed: Post created.");
    } else {
        console.log("Test failed: Post not created.");
    }
}

// Test case for 4.2.2 Attach Image
function testAttachImage(hasImage) {
    if (hasImage) {
        console.log("Test passed: Image attached.");
    } else {
        console.log("Test failed: Image not attached.");
    }
}

// Test case for 4.2.3 Attach Link
function testAttachLink(hasLink) {
    if (hasLink) {
        console.log("Test passed: Link attached.");
    } else {
        console.log("Test failed: Link not attached.");
    }
}

// Test case for 4.2.4 Attach Video
function testAttachVideo(hasVideo) {
    if (hasVideo) {
        console.log("Test passed: Video attached.");
    } else {
        console.log("Test failed: Video not attached.");
    }
}

// Test case for 4.2.5 View Post
function testViewPost(hasPosts) {
    if (hasPosts) {
        console.log("Test passed: User can view posts.");
    } else {
        console.log("Test failed: User can not view posts.");
    }
}

// Test case for 5.2 Following Only Feed 
function testFollowingOnlyFeed(hasFeed) {
    if (hasFeed) {
        console.log("Test passed: Following only feed is visible.");
    } else {
        console.log("Test failed: Following only feed is not visible.");
    }
}

// Test case for 6.1.1 Scrolling 
function testScrolling(isScrollable) {
    if (isScrollable) {
        console.log("Test passed: User can scroll.");
    } else {
        console.log("Test failed: User can not scroll.");
    }
}

// Test case for 6.2.1 Search Button
function testSearchButton(isSearchEnabled) {
    if (isSearchEnabled) {
        console.log("Test passed: Search button is enabled.");
    } else {
        console.log("Test failed: Search button disable.");
    }
}

// Test case for 6.2.2 Setting Button
function testSettingButton(isSettingEnabled) {
    if (isSettingEnabled) {
        console.log("Test passed: Setting button is enabled.");
    } else {
        console.log("Test failed: Setting button disable.");
    }
}

// Test case for 6.3.1 Main Page Button
function testMainPageButton(isMainPageAccessible) {
    if (isMainPageAccessible) {
        console.log("Test passed: Main page is accessible.");
    } else {
        console.log("Test failed: Main page is not accessible.");
    }
}

// Test Case for 6.3.2 Following Page Button
function testFollowingPageButton(isFollowingPageAccessible) {
    if (isFollowingPageAccessible) {
        console.log("Test passed: Following page is accessible.");
    } else {
        console.log("Test failed: Following page is not accessible.");
    }
}

// Test case for 6.3.3 Create a Post Button
function testCreatePostButton(isPostButtonEnabled) {
    if (isPostButtonEnabled) {
        console.log("Test passed: Create post button is enabled.");
    } else {
        console.log("Test failed: Create post button is disabled.");
    }
}

// Test case for 6.6 Pst Creation Page
function testPostCreationPage(isPostCreationPageAccessible) {
    if (isPostCreationPageAccessible) {
        console.log("Test passed: Post creation page is accessible.");
    } else {
        console.log("Test failed: Post creation page is not accessible.");
    }
}

// Test case for 6.6.1 Text Box
function testTextBox(isTextBoxVisible) {
    if (isTextBoxVisible) {
        console.log("Test passed: Text box is visible.");
    } else {
        console.log("Test failed: Text box is not visible.");
    }
}

// Test Case for 6.6.2 Image Insertion
function testImageInsertion(isImageInserted) {
    if (isImageInserted) {
        console.log("Test passed: Image inserted.");
    } else {
        console.log("Test failed: Image not inserted.");
    }
}

// Test case for 6.6.4 Videro Insertion
function testVideoInsertion(isVideoInserted) {
    if (isVideoInserted) {
        console.log("Test passed: Video inserted.");
    } else {
        console.log("Test failed: Video not inserted.");
    }
}

// Test case for 6.7 Create Post Page
function testCreatePostPage(isCreatePostPageVisible) {
    if (isCreatePostPageVisible) {
        console.log("Test passed: Create post page is visible.");
    } else {
        console.log("Test failed: Create post page is not visible.");
    }
}

// Test case for 6.7.1 Scroll Throught Created Posts
function testScrollThroughPosts(isScrollable) {
    if (isScrollable) {
        console.log("Test passed: User can scroll through created posts.");
    } else {
        console.log("Test failed: User can not scroll through created posts.");
    }
}

// Test Case for 6.7.2 Delete Individual Post Button
function testDeletePostButton(isDeleteButtonEnabled) {
    if (isDeleteButtonEnabled) {
        console.log("Test passed: Delete post button is enabled.");
    } else {
        console.log("Test failed: Delete post button is disabled.");
    }
}

// Test case for 6.8 Following List Page
function testFollowingListPage(isFollowingListVisible) {
    if (isFollowingListVisible) {
        console.log("Test passed: Following list page is visible.");
    } else {
        console.log("Test failed: Following list page is not visible.");
    }
}

// Test case for 6.8.1 List Population
function testFollowingListPopulation(followingList) {
    if (followingList.length > 0) {
        console.log("Test passed: Following list is populated.");
    } else {
        console.log("Test failed: Following list is not populated.");
    }
} 

// Test case for 6.8.2 List Refresh
function testFollowingListRefresh(isListRefreshed) {
    if (isListRefreshed) {
        console.log("Test passed: Following list is refreshed.");
    } else {
        console.log("Test failed: Following list is not refreshed.");
    }
}

// Test case for 6.8.3 Search Bar 
function testSearchBar(isSearchBarVisible) {
    if (isSearchBarVisible) {
        console.log("Test passed: Search bar is visible.");
    } else {
        console.log("Test failed: Search bar is not visible.");
    }
}

// Test case for 6.10.1 Account Delete
function testAccountDelete(isDeleted) {
    if (isDeleted) {
        console.log("Test passed: Account deleted.");
    } else {
        console.log("Test failed: Account not deleted.");
    }
}

// Test case for 7.1 ios Download
function testIOSDownload(isIOSDownloadAvailable) {
    if (isIOSDownloadAvailable) {
        console.log("Test passed: iOS download available.");
    } else {
        console.log("Test failed: iOS download not available.");
    }
}

// Test case for 7.2 IOS Notification

function testIOSNotification(areIOSNotificationEnabled) {
    if (areIOSNotificationEnabled) {
        console.log("Test passed: iOS notification enabled.");
    } else {
        console.log("Test failed: iOS notification not enabled.");
    }
}

// Test case for 8.1 Android Download

function testAndroidDownload(isAndroidDownloadAvailable) {
    if (isAndroidDownloadAvailable) {
        console.log("Test passed: Android download available.");
    } else {
        console.log("Test failed: Android download not available.");
    }
}

// Test case for 8.2 Android Notification

function testAndroidNotification(areAndroidNotificationEnabled) {
    if (areAndroidNotificationEnabled) {
        console.log("Test passed: Android notification enabled.");
    } else {
        console.log("Test failed: Android notification not enabled.");
    }
}

// A cool feature to add to the test app is testing a user is a human or a bot.
function testUsertype(isHuman) { 
    if (isHuman) { 
        console.log("Test passed: User is a human.");
    } else {
        console.log("Test failed: User is a bot.");

    }

    }
