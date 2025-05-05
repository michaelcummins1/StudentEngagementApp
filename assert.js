const assert = require('assert');

// 1.1.1 UserID Key
function testUserIDKey(userID) {
    console.log("Running testUserIDKey...");
    assert.strictEqual(Boolean(userID), true, "UserID should be provided");
    console.log("testUserIDKey passed.\n");
}

// Test: userID is provided
function testUserIDKey_withValue() {
    console.log("Test: userID is provided");
    testUserIDKey("12345");
}

//  Test: userID is missing
function testUserIDKey_withoutValue() {
    console.log("Test: userID is missing");
    try {
        testUserIDKey(""); // or undefined or null
    } catch (e) {
        console.log("Caught expected failure:", e.message);
    }
}
// Run both tests
testUserIDKey_withValue();
testUserIDKey_withoutValue();

// 1.1.3 Administrative Permissions
function testAdminPermissions(userID, permissions) {
    console.log("Running testAdminPermissions...");
    assert.strictEqual(Boolean(userID), true, "UserID should be provided");
    assert.strictEqual(permissions.includes("admin"), true, "User should have admin permissions");
    console.log("testAdminPermissions passed.\n");
}
// Test: userID is provided and has admin permissions
function testAdminPermissions_withValue() {
    console.log("Test: userID is provided and has admin permissions");
    testAdminPermissions("12345", ["admin"]);
}
// Test: userID is provided but does not have admin permissions 
function testAdminPermissions_withoutValue() {
    console.log("Test: userID is provided but does not have admin permissions");
    try {
        testAdminPermissions("12345", []); // or undefined or null
    } catch (e) {
        console.log("Caught expected failure:", e.message);
    }
}
// Run both tests
testAdminPermissions_withValue(true);
testAdminPermissions_withoutValue(true);

// build a test for Forgotten username

// build a test forgotten user password

// 1.1.5 Post Permissions
function testPostPermissions(userID, permissions) {
    console.log("Running testPostPermissions...");
    assert.strictEqual(Boolean(userID), true, "UserID should be provided");
    assert.strictEqual(permissions.includes("post"), true, "User should have post permissions");
    console.log("testPostPermissions passed.\n");
}
// Test: userID is provided and has post permissions 
function testPostPermissions_withValue() {
    console.log("Test: userID is provided and has post permissions");
    testPostPermissions("12345", ["post"]);
}
// Test: userID is provided but does not have post permissions
function testPostPermissions_withoutValue() {
    console.log("Test: userID is provided but does not have post permissions");
    try {
        testPostPermissions("12345", []); // or undefined or null
    } catch (e) {
        console.log("Caught expected failure:", e.message);
    }
}
// Run both tests
testPostPermissions_withValue(true);
testPostPermissions_withoutValue(true);

// 1.2.2 Post-Date Key
function testPostDateKey(postDate) {
    console.log("Running testPostDateKey...");
    assert.strictEqual(Boolean(postDate), true, "Post date should be provided");
    console.log("testPostDateKey passed.\n");
}
// Test: postDate is provided
function testPostDateKey_withValue() {
    console.log("Test: postDate is provided");
    testPostDateKey("2023-10-01");
}
// Test: postDate is missing
function testPostDateKey_withoutValue() {
    console.log("Test: postDate is missing");
    try {
        testPostDateKey(""); // or undefined or null
    } catch (e) {
        console.log("Caught expected failure:", e.message);
    }
}
// Run both tests
testPostDateKey_withValue();
testPostDateKey_withoutValue();

// 1.2.3 Like Key
function testLikeKey(like) {
    console.log("Running testLikeKey...");
    assert.strictEqual(Boolean(like), true, "Like should be provided");
    console.log("testLikeKey passed.\n");
}
// Test: like is provided
function testLikeKey_withValue() {
    console.log("Test: like is provided");
    testLikeKey(true);
}
// Test: like is missing
function testLikeKey_withoutValue() {
    console.log("Test: like is missing");
    try {
        testLikeKey(""); // or undefined or null
    } catch (e) {
        console.log("Caught expected failure:", e.message);
    }
}
// Run both tests
testLikeKey_withValue();
testLikeKey_withoutValue(); 

// 1.3 Credential Interface
function testCredentialInterface(credential) {
    console.log("Running testCredentialInterface...");
    assert.strictEqual(Boolean(credential), true, "Credential should be provided");
    console.log("testCredentialInterface passed.\n");
}
// Test: credential is provided
function testCredentialInterface_withValue() {
    console.log("Test: credential is provided");
    testCredentialInterface("user123");
}
// Test: credential is missing
function testCredentialInterface_withoutValue() {
    console.log("Test: credential is missing");
    try {
        testCredentialInterface(""); // or undefined or null
    } catch (e) {
        console.log("Caught expected failure:", e.message);
    }
}
// Run both tests
testCredentialInterface_withValue();
testCredentialInterface_withoutValue();

// This is not included in the original unit test code, but it is a good practice to test forget username
function testForgotUsername(username) {
    console.log("Running testForgotUsername...");
    assert.strictEqual(Boolean(username), true, "Username should be provided");
    console.log("testForgotUsername passed.\n");
}
// Test: username is provided
function testForgotUsername_withValue() {
    console.log("Test: username is provided");
    testForgotUsername
    ("user123");
}
// Test: username is missing
function testForgotUsername_withoutValue() {
    console.log("Test: username is missing");
    try {
        testForgotUsername(""); // or undefined or null
    } catch (e) {
        console.log("Caught expected failure:", e.message);
    }
}
// Run both tests
testForgotUsername_withValue();
testForgotUsername_withoutValue();

// This is not included in the original unit test code, but it is a good practice to test forget password
function testForgotPassword(password) {
    console.log("Running testForgotPassword...");
    assert.strictEqual(Boolean(password), true, "Password should be provided");
    console.log("testForgotPassword passed.\n");
}
// Test: password is provided
function testForgotPassword_withValue() {
    console.log("Test: password is provided");
    testForgotPassword("password123");
}
// Test: password is missing
function testForgotPassword_withoutValue() {
    console.log("Test: password is missing");
    try {
        testForgotPassword(""); // or undefined or null
    } catch (e) {
        console.log("Caught expected failure:", e.message);
    }
}
// Run both tests
testForgotPassword_withValue();
testForgotPassword_withoutValue();

// 1.4.1 Following List
function testFollowingList(followingList) {
    console.log("Running testFollowingList...");
    assert.strictEqual(Boolean(followingList), true, "Following list should be provided");
    console.log("testFollowingList passed.\n");
}
// Test: followingList is provided
function testFollowingList_withValue() {
    console.log("Test: followingList is provided");
    testFollowingList(["user1", "user2"]);
}
// Test: followingList is missing
function testFollowingList_withoutValue() {
    console.log("Test: followingList is missing");
    try {
        testFollowingList(""); // null
    } catch (e) {
        console.log("Caught expected failure:", e.message);
    }
}
// Run both tests
testFollowingList_withValue();
testFollowingList_withoutValue();

// 2.2 Institutional Selection
function testInstitutionalSelection(institution) {
    console.log("Running testInstitutionalSelection...");
    assert.strictEqual(Boolean(institution), true, "Institution should be provided");
    console.log("testInstitutionalSelection passed.\n");
}
// Test: institution is provided
function testInstitutionalSelection_withValue() {
    console.log("Test: institution is provided");
    testInstitutionalSelection("University A");
}
// Test: institution is missing
function testInstitutionalSelection_withoutValue() {
    console.log("Test: institution is missing");
    try {
        testInstitutionalSelection(""); // or undefined or null
    } catch (e) {
        console.log("Caught expected failure:", e.message);
    }
}
// Run both tests
testInstitutionalSelection_withValue();
testInstitutionalSelection_withoutValue();

// 2.3 Account Type Field
function testAccountTypeField(accountType) {
    console.log("Running testAccountTypeField...");
    assert.strictEqual(Boolean(accountType), true, "Account type should be provided");
    console.log("testAccountTypeField passed.\n");
}
// Test: accountType is provided
function testAccountTypeField_withValue() {
    console.log("Test: accountType is provided");
    testAccountTypeField("admin");
}
// Test: accountType is missing
function testAccountTypeField_withoutValue() {
    console.log("Test: accountType is missing");
    try {
        testAccountTypeField(""); // null
    } catch (e) {
        console.log("Caught expected failure:", e.message);
    }
}
// Run both tests
testAccountTypeField_withValue();
testAccountTypeField_withoutValue();

// 2.4 Email Field
function testEmailField(email) {
    console.log("Running testEmailField...");
    assert.strictEqual(Boolean(email), true, "Email should be provided");
    console.log("testEmailField passed.\n");
}
// Test: email is provided
function testEmailField_withValue() {
    console.log("Test: email is provided");
    testEmailField("email");
}
// Test: email is missing
function testEmailField_withoutValue() {
    console.log("Test: email is missing");
    try {
        testEmailField(""); // or undefined or null
    } catch (e) {
        console.log("Caught expected failure:", e.message);
    }
}
// Run both tests
testEmailField_withValue();
testEmailField_withoutValue();

// 3.1 Admin Account Creation  
function testAdminAccountCreation(userID, accountType) {
    console.log("Running testAdminAccountCreation...");
    assert.strictEqual(Boolean(userID), true, "UserID should be provided");
    assert.strictEqual(accountType, "admin", "Account type should be admin");
    console.log("testAdminAccountCreation passed.\n");
}
// Test: userID is provided and accountType is admin
function testAdminAccountCreation_withValue() {
    console.log("Test: userID is provided and accountType is admin");
    testAdminAccountCreation("12345", "admin");
}
// Test: userID is provided but accountType is not admin
function testAdminAccountCreation_withoutValue() {
    console.log("Test: userID is provided but accountType is not admin");
    try {
        testAdminAccountCreation("12345", "user"); // or undefined or null
    } catch (e) {
        console.log("Caught expected failure:", e.message);
    }
}
// Run both tests
testAdminAccountCreation_withValue(true);
testAdminAccountCreation_withoutValue(true);

// 4.1.1 Choose Following
function testChooseFollowing(followingList) {
    console.log("Running testChooseFollowing...");
    assert.strictEqual(Boolean(followingList), true, "Following list should be provided");
    console.log("testChooseFollowing passed.\n");
}
// Test: followingList is provided
function testChooseFollowing_withValue() {
    console.log("Test: followingList is provided");
    testChooseFollowing(["user1", "user2"]);
}
// Test: followingList is missing
function testChooseFollowing_withoutValue() {
    console.log("Test: followingList is missing");
    try {
        testChooseFollowing(""); // or undefined or null
    } catch (e) {
        console.log("Caught expected failure:", e.message);
    }
}
// Run both tests
testChooseFollowing_withValue();
testChooseFollowing_withoutValue();

// 4.1.2 View Following
function testViewFollowing(followingList) {
    console.log("Running testViewFollowing...");
    assert.strictEqual(Boolean(followingList), true, "Following list should be provided");
    console.log("testViewFollowing passed.\n");
}
// Test: followingList is provided
function testViewFollowing_withValue() {
    console.log("Test: followingList is provided");
    testViewFollowing(["user1", "user2"]);
}
// Test: followingList is missing
function testViewFollowing_withoutValue() {
    console.log("Test: followingList is missing");
    try {
        testViewFollowing(""); // or undefined or null
    } catch (e) {
        console.log("Caught expected failure:", e.message);
    }
}
// Run both tests
testViewFollowing_withValue();
testViewFollowing_withoutValue();

// 4.1.3 Delete Following
function testDeleteFollowing(followingList) {
    console.log("Running testDeleteFollowing...");
    assert.strictEqual(Boolean(followingList), true, "Following list should be provided");
    console.log("testDeleteFollowing passed.\n");
}
// Test: followingList is provided
function testDeleteFollowing_withValue() {
    console.log("Test: followingList is provided");
    testDeleteFollowing(["user1", "user2"]);
}
// Test: followingList is missing
function testDeleteFollowing_withoutValue() {
    console.log("Test: followingList is missing");
    try {
        testDeleteFollowing(""); // or undefined or null
    } catch (e) {
        console.log("Caught expected failure:", e.message);
    }
}
// Run both tests
testDeleteFollowing_withValue();
testDeleteFollowing_withoutValue();

// 4.2.1 Create Post
function testCreatePost(postContent) {
    console.log("Running testCreatePost...");
    assert.strictEqual(Boolean(postContent), true, "Post content should be provided");
    console.log("testCreatePost passed.\n");
}
// Test: postContent is provided
function testCreatePost_withValue() {
    console.log("Test: postContent is provided");
    testCreatePost("Hello, world!");
}
// Test: postContent is missing
function testCreatePost_withoutValue() {
    console.log("Test: postContent is missing");
    try {
        testCreatePost(""); // or undefined or null
    } catch (e) {
        console.log("Caught expected failure:", e.message);
    }
}
// Run both tests
testCreatePost_withValue();
testCreatePost_withoutValue();

// 4.2.2 Attach Image
function testAttachImage(image) {
    console.log("Running testAttachImage...");
    assert.strictEqual(Boolean(image), true, "Image should be provided");
    console.log("testAttachImage passed.\n");
}
// Test: image is provided
function testAttachImage_withValue() {
    console.log("Test: image is provided");
    testAttachImage("image.jpg");
}
// Test: image is missing
function testAttachImage_withoutValue() {
    console.log("Test: image is missing");
    try {
        testAttachImage(""); // or undefined or null
    } catch (e) {
        console.log("Caught expected failure:", e.message);
    }
}
// Run both tests
testAttachImage_withValue();
testAttachImage_withoutValue();

// 4.2.3 Attach Link
function testAttachLink(link) {
    console.log("Running testAttachLink...");
    assert.strictEqual(Boolean(link), true, "Link should be provided");
    console.log("testAttachLink passed.\n");
}
// Test: link is provided
function testAttachLink_withValue() {
    console.log("Test: link is provided");
    testAttachLink("https://example.com");
}
// Test: link is missing
function testAttachLink_withoutValue() {
    console.log("Test: link is missing");
    try {
        testAttachLink(""); // or undefined or null
    } catch (e) {
        console.log("Caught expected failure:", e.message);
    }
}
// Run both tests
testAttachLink_withValue();
testAttachLink_withoutValue();

// 4.2.4 Attach Video
function testAttachVideo(video) {
    console.log("Running testAttachVideo...");
    assert.strictEqual(Boolean(video), true, "Video should be provided");
    console.log("testAttachVideo passed.\n");
}
// Test: video is provided
function testAttachVideo_withValue() {
    console.log("Test: video is provided");
    testAttachVideo("video.mp4");
}
// Test: video is missing
function testAttachVideo_withoutValue() {
    console.log("Test: video is missing");
    try {
        testAttachVideo(""); // or undefined or null
    } catch (e) {
        console.log("Caught expected failure:", e.message);
    }
}
// Run both tests
testAttachVideo_withValue();
testAttachVideo_withoutValue();

// 4.2.5 View Post
function testViewPost(postID) {
    console.log("Running testViewPost...");
    assert.strictEqual(Boolean(postID), true, "Post ID should be provided");
    console.log("testViewPost passed.\n");
}
// Test: postID is provided
function testViewPost_withValue() {
    console.log("Test: postID is provided");
    testViewPost("post123");
}
// Test: postID is missing
function testViewPost_withoutValue() {
    console.log("Test: postID is missing");
    try {
        testViewPost(""); // or undefined or null
    } catch (e) {
        console.log("Caught expected failure:", e.message);
    }
}
// Run both tests
testViewPost_withValue();
testViewPost_withoutValue();

// 5.2 Following Only Feed
function testFollowingOnlyFeed(feed) {
    console.log("Running testFollowingOnlyFeed...");
    assert.strictEqual(Boolean(feed), true, "Feed should be provided");
    console.log("testFollowingOnlyFeed passed.\n");
}
// Test: feed is provided
function testFollowingOnlyFeed_withValue() {
    console.log("Test: feed is provided");
    testFollowingOnlyFeed(["post1", "post2"]);
}
// Test: feed is missing
function testFollowingOnlyFeed_withoutValue() {
    console.log("Test: feed is missing");
    try {
        testFollowingOnlyFeed(""); // or undefined or null
    } catch (e) {
        console.log("Caught expected failure:", e.message);
    }
}
// Run both tests
testFollowingOnlyFeed_withValue();
testFollowingOnlyFeed_withoutValue();

// 6.1.1 Scrolling
function testScrolling(scrollPosition) {
    console.log("Running testScrolling...");
    assert.strictEqual(Boolean(scrollPosition), true, "Scroll position should be provided");
    console.log("testScrolling passed.\n");
}
// Test: scrollPosition is provided
function testScrolling_withValue() {
    console.log("Test: scrollPosition is provided");
    testScrolling(100);
}
// Test: scrollPosition is missing
function testScrolling_withoutValue() {
    console.log("Test: scrollPosition is missing");
    try {
        testScrolling(""); // or undefined or null
    } catch (e) {
        console.log("Caught expected failure:", e.message);
    }
}
// Run both tests
testScrolling_withValue();
testScrolling_withoutValue();

// 6.2.1 Search Button
function testSearchButton(searchQuery) {
    console.log("Running testSearchButton...");
    assert.strictEqual(Boolean(searchQuery), true, "Search query should be provided");
    console.log("testSearchButton passed.\n");
}
// Test: searchQuery is provided
function testSearchButton_withValue() {
    console.log("Test: searchQuery is provided");
    testSearchButton("example");
}
// Test: searchQuery is missing
function testSearchButton_withoutValue() {
    console.log("Test: searchQuery is missing");
    try {
        testSearchButton(""); // or undefined or null
    } catch (e) {
        console.log("Caught expected failure:", e.message);
    }
}
// Run both tests
testSearchButton_withValue();
testSearchButton_withoutValue();

// 6.2.2 Setting Button
function testSettingButton(setting) {
    console.log("Running testSettingButton...");
    assert.strictEqual(Boolean(setting), true, "Setting should be provided");
    console.log("testSettingButton passed.\n");
}
// Test: setting is provided
function testSettingButton_withValue() {
    console.log("Test: setting is provided");
    testSettingButton("privacy");
}
// Test: setting is missing
function testSettingButton_withoutValue() {
    console.log("Test: setting is missing");
    try {
        testSettingButton(""); // or undefined or null
    } catch (e) {
        console.log("Caught expected failure:", e.message);
    }
}
// Run both tests
testSettingButton_withValue();
testSettingButton_withoutValue();

// 6.3.1 Main Page Button
function testMainPageButton(mainPage) {
    console.log("Running testMainPageButton...");
    assert.strictEqual(Boolean(mainPage), true, "Main page should be provided");
    console.log("testMainPageButton passed.\n");
}
// Test: mainPage is provided
function testMainPageButton_withValue() {
    console.log("Test: mainPage is provided");
    testMainPageButton("home");
}
// Test: mainPage is missing
function testMainPageButton_withoutValue() {
    console.log("Test: mainPage is missing");
    try {
        testMainPageButton(""); // or undefined or null
    } catch (e) {
        console.log("Caught expected failure:", e.message);
    }
}
// Run both tests
testMainPageButton_withValue();
testMainPageButton_withoutValue();

// 6.3.2 Following Page Button
function testFollowingPageButton(followingPage) {
    console.log("Running testFollowingPageButton...");
    assert.strictEqual(Boolean(followingPage), true, "Following page should be provided");
    console.log("testFollowingPageButton passed.\n");
}
// Test: followingPage is provided
function testFollowingPageButton_withValue() {
    console.log("Test: followingPage is provided");
    testFollowingPageButton("following");
}
// Test: followingPage is missing
function testFollowingPageButton_withoutValue() {
    console.log("Test: followingPage is missing");
    try {
        testFollowingPageButton(""); // or undefined or null
    } catch (e) {
        console.log("Caught expected failure:", e.message);
    }
}
// Run both tests
testFollowingPageButton_withValue();
testFollowingPageButton_withoutValue();

// 6.3.3 Create a Post Button
function testCreatePostButton(createPost) {
    console.log("Running testCreatePostButton...");
    assert.strictEqual(Boolean(createPost), true, "Create post should be provided");
    console.log("testCreatePostButton passed.\n");
}
// Test: createPost is provided
function testCreatePostButton_withValue() {
    console.log("Test: createPost is provided");
    testCreatePostButton("create");
}
// Test: createPost is missing
function testCreatePostButton_withoutValue() {
    console.log("Test: createPost is missing");
    try {
        testCreatePostButton(""); // or undefined or null
    } catch (e) {
        console.log("Caught expected failure:", e.message);
    }
}
// Run both tests
testCreatePostButton_withValue();
testCreatePostButton_withoutValue();

// 6.6 Post Creation Page
function testPostCreationPage(postContent) {
    console.log("Running testPostCreationPage...");
    assert.strictEqual(Boolean(postContent), true, "Post content should be provided");
    console.log("testPostCreationPage passed.\n");
}
// Test: postContent is provided
function testPostCreationPage_withValue() {
    console.log("Test: postContent is provided");
    testPostCreationPage("Hello, world!");
}
// Test: postContent is missing
function testPostCreationPage_withoutValue() {
    console.log("Test: postContent is missing");
    try {
        testPostCreationPage(""); // or undefined or null
    } catch (e) {
        console.log("Caught expected failure:", e.message);
    }
}
// Run both tests
testPostCreationPage_withValue();
testPostCreationPage_withoutValue();

// 6.6.1 Text Box
function testTextBox(text) {
    console.log("Running testTextBox...");
    assert.strictEqual(Boolean(text), true, "Text should be provided");
    console.log("testTextBox passed.\n");
}
// Test: text is provided
function testTextBox_withValue() {
    console.log("Test: text is provided");
    testTextBox("Hello, world!");
}
// Test: text is missing
function testTextBox_withoutValue() {
    console.log("Test: text is missing");
    try {
        testTextBox(""); // or undefined or null
    } catch (e) {
        console.log("Caught expected failure:", e.message);
    }
}
// Run both tests
testTextBox_withValue();
testTextBox_withoutValue();

// 6.6.2 Image Insertion
function testImageInsertion(image) {
    console.log("Running testImageInsertion...");
    assert.strictEqual(Boolean(image), true, "Image should be provided");
    console.log("testImageInsertion passed.\n");
}
// Test: image is provided
function testImageInsertion_withValue() {
    console.log("Test: image is provided");
    testImageInsertion("image.jpg");
}
// Test: image is missing
function testImageInsertion_withoutValue() {
    console.log("Test: image is missing");
    try {
        testImageInsertion(""); // or undefined or null
    } catch (e) {
        console.log("Caught expected failure:", e.message);
    }
}
// Run both tests
testImageInsertion_withValue();
testImageInsertion_withoutValue();

// 6.6.4 Video Insertion
function testVideoInsertion(video) {
    console.log("Running testVideoInsertion...");
    assert.strictEqual(Boolean(video), true, "Video should be provided");
    console.log("testVideoInsertion passed.\n");
}
// Test: video is provided
function testVideoInsertion_withValue() {
    console.log("Test: video is provided");
    testVideoInsertion("video.mp4");
}
// Test: video is missing
function testVideoInsertion_withoutValue() {
    console.log("Test: video is missing");
    try {
        testVideoInsertion(""); // or undefined or null
    } catch (e) {
        console.log("Caught expected failure:", e.message);
    }
}
// Run both tests
testVideoInsertion_withValue();
testVideoInsertion_withoutValue();

// 6.7 Create Post Page
function testCreatePostPage(postContent) {
    console.log("Running testCreatePostPage...");
    assert.strictEqual(Boolean(postContent), true, "Post content should be provided");
    console.log("testCreatePostPage passed.\n");
}
// Test: postContent is provided
function testCreatePostPage_withValue() {
    console.log("Test: postContent is provided");
    testCreatePostPage("Hello, world!");
}
// Test: postContent is missing
function testCreatePostPage_withoutValue() {
    console.log("Test: postContent is missing");
    try {
        testCreatePostPage(""); // or undefined or null
    } catch (e) {
        console.log("Caught expected failure:", e.message);
    }
}
// Run both tests
testCreatePostPage_withValue();
testCreatePostPage_withoutValue();

// 6.7.1 Scroll Through Created Posts
function testScrollThroughCreatedPosts(scrollPosition) {
    console.log("Running testScrollThroughCreatedPosts...");
    assert.strictEqual(Boolean(scrollPosition), true, "Scroll position should be provided");
    console.log("testScrollThroughCreatedPosts passed.\n");
}
// Test: scrollPosition is provided
function testScrollThroughCreatedPosts_withValue() {
    console.log("Test: scrollPosition is provided");
    testScrollThroughCreatedPosts(100);
}
// Test: scrollPosition is missing
function testScrollThroughCreatedPosts_withoutValue() {
    console.log("Test: scrollPosition is missing");
    try {
        testScrollThroughCreatedPosts(""); // or undefined or null
    } catch (e) {
        console.log("Caught expected failure:", e.message);
    }
}
// Run both tests
testScrollThroughCreatedPosts_withValue();
testScrollThroughCreatedPosts_withoutValue();

// 6.7.2 Delete Individual Post Button
function testDeleteIndividualPostButton(postID) {
    console.log("Running testDeleteIndividualPostButton...");
    assert.strictEqual(Boolean(postID), true, "Post ID should be provided");
    console.log("testDeleteIndividualPostButton passed.\n");
}
// Test: postID is provided
function testDeleteIndividualPostButton_withValue() {
    console.log("Test: postID is provided");
    testDeleteIndividualPostButton("post123");
}
// Test: postID is missing
function testDeleteIndividualPostButton_withoutValue() {
    console.log("Test: postID is missing");
    try {
        testDeleteIndividualPostButton(""); // or undefined or null
    } catch (e) {
        console.log("Caught expected failure:", e.message);
    }
}
// Run both tests
testDeleteIndividualPostButton_withValue();
testDeleteIndividualPostButton_withoutValue();

// 6.8 Following List Page
function testFollowingListPage(followingList) {
    console.log("Running testFollowingListPage...");
    assert.strictEqual(Boolean(followingList), true, "Following list should be provided");
    console.log("testFollowingListPage passed.\n");
}
// Test: followingList is provided
function testFollowingListPage_withValue() {
    console.log("Test: followingList is provided");
    testFollowingListPage(["user1", "user2"]);
}
// Test: followingList is missing
function testFollowingListPage_withoutValue() {
    console.log("Test: followingList is missing");
    try {
        testFollowingListPage(""); // or undefined or null
    } catch (e) {
        console.log("Caught expected failure:", e.message);
    }
}
// Run both tests
testFollowingListPage_withValue();
testFollowingListPage_withoutValue();

// 6.8.1 List Population
function testListPopulation(followingList) {
    console.log("Running testListPopulation...");
    assert.strictEqual(Boolean(followingList), true, "Following list should be provided");
    console.log("testListPopulation passed.\n");
}
// Test: followingList is provided
function testListPopulation_withValue() {
    console.log("Test: followingList is provided");
    testListPopulation(["user1", "user2"]);
}
// Test: followingList is missing
function testListPopulation_withoutValue() {
    console.log("Test: followingList is missing");
    try {
        testListPopulation(""); // null
    } catch (e) {
        console.log("Caught expected failure:", e.message);
    }
}
// Run both tests
testListPopulation_withValue();
testListPopulation_withoutValue();

// 6.8.2 List Refresh
function testListRefresh(followingList) {
    console.log("Running testListRefresh...");
    assert.strictEqual(Boolean(followingList), true, "Following list should be provided");
    console.log("testListRefresh passed.\n");
}
// Test: followingList is provided
function testListRefresh_withValue() {
    console.log("Test: followingList is provided");
    testListRefresh(["user1", "user2"]);
}
// Test: followingList is missing
function testListRefresh_withoutValue() {
    console.log("Test: followingList is missing");
    try {
        testListRefresh(""); // or undefined or null
    } catch (e) {
        console.log("Caught expected failure:", e.message);
    }
}
// Run both tests
testListRefresh_withValue();
testListRefresh_withoutValue();

// 6.8.3 Search Bar
function testSearchBar(searchQuery) {
    console.log("Running testSearchBar...");
    assert.strictEqual(Boolean(searchQuery), true, "Search query should be provided");
    console.log("testSearchBar passed.\n");
}
// Test: searchQuery is provided
function testSearchBar_withValue() {
    console.log("Test: searchQuery is provided");
    testSearchBar("example");
}
// Test: searchQuery is missing
function testSearchBar_withoutValue() {
    console.log("Test: searchQuery is missing");
    try {
        testSearchBar(""); // or undefined or null
    } catch (e) {
        console.log("Caught expected failure:", e.message);
    }
}
// Run both tests
testSearchBar_withValue();
testSearchBar_withoutValue();

// 6.10.1 Account Delete
function testAccountDelete(userID) {
    console.log("Running testAccountDelete...");
    assert.strictEqual(Boolean(userID), true, "UserID should be provided");
    console.log("testAccountDelete passed.\n");
}
// Test: userID is provided
function testAccountDelete_withValue() {
    console.log("Test: userID is provided");
    testAccountDelete("12345");
}
// Test: userID is missing
function testAccountDelete_withoutValue() {
    console.log("Test: userID is missing");
    try {
        testAccountDelete(""); // or undefined or null
    } catch (e) {
        console.log("Caught expected failure:", e.message);
    }
}
// Run both tests
testAccountDelete_withValue();
testAccountDelete_withoutValue();

// 7.1 iOS Download
function testIOSDownload(downloadLink) {
    console.log("Running testIOSDownload...");
    assert.strictEqual(Boolean(downloadLink), true, "Download link should be provided");
    console.log("testIOSDownload passed.\n");
}
// Test: downloadLink is provided
function testIOSDownload_withValue() {
    console.log("Test: downloadLink is provided");
    testIOSDownload("https://example.com/ios-download");
}
function testIOSDownload_withoutValue() {
    console.log("Test: downloadLink is missing");
    try {
        testIOSDownload(""); // or undefined or null
    } catch (e) {
        console.log("Caught expected failure:", e.message);
    }
}
// Run both tests
testIOSDownload_withValue();
testIOSDownload_withoutValue();

// Test: downloadLink is missing
function testIOSDownload_withoutValue() {
    console.log("Test: downloadLink is missing");
    try {
        testIOSDownload(""); // or undefined or null
    } catch (e) {
        console.log("Caught expected failure:", e.message);
    }
}
// Run both tests
testIOSDownload_withValue();
testIOSDownload_withoutValue();

// 7.2 iOS Notification
function testIOSNotification(notification) {
    console.log("Running testIOSNotification...");
    assert.strictEqual(Boolean(notification), true, "Notification should be provided");
    console.log("testIOSNotification passed.\n");
}
// Test: notification is provided
function testIOSNotification_withValue() {
    console.log("Test: notification is provided");
    testIOSNotification("New message from user123");
}
// Test: notification is missing
function testIOSNotification_withoutValue() {
    console.log("Test: notification is missing");
    try {
        testIOSNotification(""); // or undefined or null
    } catch (e) {
        console.log("Caught expected failure:", e.message);
    }
}
// Run both tests
testIOSNotification_withValue();
testIOSNotification_withoutValue();
// 8.1 Android Download
function testAndroidDownload(downloadLink) {
    console.log("Running testAndroidDownload...");
    assert.strictEqual(Boolean(downloadLink), true, "Download link should be provided");
    console.log("testAndroidDownload passed.\n");
} 
// Test: downloadLink is provided 
function testAndroidDownload_withValue() {
    console.log("Test: downloadLink is provided");
    testAndroidDownload("https://example.com/android-download");
}
// Test: downloadLink is missing
function testAndroidDownload_withoutValue() {
    console.log("Test: downloadLink is missing");
    try {
        testAndroidDownload(""); // or undefined or null
    } catch (e) {
        console.log("Caught expected failure:", e.message);
    }
}
// Run both tests
testAndroidDownload_withValue();
testAndroidDownload_withoutValue();

// 8.2 Android Notification
function testAndroidNotification(notification) {
    console.log("Running testAndroidNotification...");
    assert.strictEqual(Boolean(notification), true, "Notification should be provided");
    console.log("testAndroidNotification passed.\n");
}
// Test: notification is provided
function testAndroidNotification_withValue() {
    console.log("Test: notification is provided");
    testAndroidNotification("New message from user123");
}
// Test: notification is missing
function testAndroidNotification_withoutValue() {
    console.log("Test: notification is missing");
    try {
        testAndroidNotification(""); // or undefined or null
    } catch (e) {
        console.log("Caught expected failure:", e.message);
    }
}
// Run both tests
testAndroidNotification_withValue();
testAndroidNotification_withoutValue();