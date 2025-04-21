// Test case for 1.1.1 UserID Key

const assert = require('assert');

function testUserIDKey(userID) {
    
    if (userID) {
        return "Test passed: UserID Provided";
    } else {
        return "Test failed: UserID not provided";
    }
}
 
// test cases 
try {
    // Test case 1: UserID is provided
    const result1 = testUserIDKey("12345");
    assert.strictEqual(result1, "Test passed: UserID Provided", "Test case 1 failed");
    console.log("Test case 1 passed");

    // Test case 2: UserID is not provided
    const result2 = testUserIDKey(null);
    assert.strictEqual(result2, "Test failed: UserID not provided", "Test case 2 failed");
    console.log("Test case 2 passed");

    console.log("All test cases passed!");
} catch (error) {
    console.error("A test case failed:", error.message);
}

// Test case for 1.1.3 Administative Permissions
function testAdminPermissions(hasAdminPerms) {
    if (hasAdminPerms) {
        return "Test passed: User had Aministrative Permissions";
    } else {
        return "Test failed: User did not have Administrative Permissions";
    }
}
// test cases
try {
    // Test case 1: User has Administrative Permissions
    const result3 = testAdminPermissions(true);
    assert.strictEqual(result3, "Test passed: User had Aministrative Permissions", "Test case 1 failed");
    console.log("Test case 1 passed");

    // Test case 2: User does not have Administrative Permissions
    const result4 = testAdminPermissions(false);
    assert.strictEqual(result4, "Test failed: User did not have Administrative Permissions", "Test case 2 failed");
    console.log("Test case 2 passed");

    console.log("All test cases passed!");
} catch (error) {
    console.error("A test case failed:", error.message);

}

// Test case for 1.1.5 Post Permissions
function testPostPermissions(canPost) {
    if (canPost) {
        return "Test passed: User has permission to post";
    } else {
        return "Test failed: User does not have permission to post";

    }
}
// test cases

try { 
    // Test case 1: User has permission to post
    const result5 = testPostPermissions(true);
    assert.strictEqual(result5, "Test passed: User has permission to post", "Test case 1 failed");
    console.log("Test case 1 passed");

    // Test case 2: User does not have permission to post
    const result6 = testPostPermissions(false);
    assert.strictEqual(result6, "Test failed: User does not have permission to post", "Test case 2 failed");
    console.log("Test case 2 passed");

    console.log("All test cases passed!");
} catch (error) {
    console.error("A test case failed:", error.message);
}

// Test case for 1.2.2 Post-Date Key 
function testPostDateKey(postdate) { 
    if (postdate) {
        return "Test passed: Post Date Provided";
    } else {
        return "Test failed: Post Date not provided";
    }
}
// test Cases
try {
    // Test case 1: Post Date is provided
    const result7 = testPostDateKey("2023-10-01");
    assert.strictEqual(result7, "Test passed: Post Date Provided", "Test case 1 failed");
    console.log("Test case 1 passed");

    // Test case 2: Post Date is not provided
    const result8 = testPostDateKey(null);
    assert.strictEqual(result8, "Test failed: Post Date not provided", "Test case 2 failed");
    console.log("Test case 2 passed");

    console.log("All test cases passed!");
}
catch (error) {
    console.error("A test case failed:", error.message);
}

// test case for 1.2.3 Post-Content Key
function testPostContentKey(postContent) {
    if (postContent) {
        return "Test passed: Post Content Provided";
    } else {
        return "Test failed: Post Content not provided";
    }
}

// test cases 
function testPostContentKey(postContent) { 
    if (postContent) {
        return "Test passed: Post Content Provided"; 
    } else { 
        return "Test failed: Post Content mot provided"; 
    }

}

// test cases
try {
    // Test case 1: Post Content is provided
    const result9 = testPostContentKey("This is a test post.");
    assert.strictEqual(result9, "Test passed: Post Content Provided", "Test case 1 failed");
    console.log("Test case 1 passed");

    // Test case 2: Post Content is not provided
    const result10 = testPostContentKey(null);
    assert.strictEqual(result10, "Test failed: Post Content not provided", "Test case 2 failed");
    console.log("Test case 2 passed");

    console.log("All test cases passed!");
}
catch (error) {
    console.error("A test case failed:", error.message);
}

// Test case for 1.3 Crediential Interface 
function testCredentialInterface(credentialInterface) {
    if (credentialInterface) {
        return "Test passed: Credential Interface Provided";
    } else {
        return "Test failed: Credential Interface not provided";
    }
}
// test cases

try {
    // Test case 1: Credential Interface is provided
    const result11 = testCredentialInterface("OAuth2.0");
    assert.strictEqual(result11, "Test passed: Credential Interface Provided", "Test case 1 failed");
    console.log("Test case 1 passed");

    // Test case 2: Credential Interface is not provided
    const result12 = testCredentialInterface(null);
    assert.strictEqual(result12, "Test failed: Credential Interface not provided", "Test case 2 failed");
    console.log("Test case 2 passed");

    console.log("All test cases passed!");
}
catch (error) {
    console.error("A test case failed:", error.message);
}
