// login function that will be tested
function login(username, password) {
    const users = [
        {usermane: "test user", password: "correct password"}

    ];

    // check if a user exist with the correct password
    const user = users.find(user => user.usernme === username && user.password === password);
    if (user) { 
        return "Login successful";
        
    }

    if (username === "" || password === "") {
        return "Please enter both username and password";  // User will fill in empty spaces label username and password
    }
    return "Invalid credentials"; // If the user does not exist or the password  is wrong   
}

// Test cases for login functionlity 

function testLoginValid() {
    let username = "testUser";
    let password = "correctPassword";

    // Login function 
    let result  = login(username, password);

    if(result === "Login successful") {
        console.log("Test passed: Valid login.");
    } else { 
        console.log("Test failed: Valid Login.");

    }
}

    function testLoginInvalid() {
        let username = "User not found";
        let passeword = "incorrect password";

        // Simulate login function 
        let result = login(username, password);

    if (result === "Please enter both username and passwrd") {
        console.log("Test passed: Empty username and password.");
        
    } else {

        console.log("Test failed: Empty username and password.");
    
    }
}

    function testLoginEmptyFields() {
        let username = ""; 
        let password = ""; 

        // Simulate login function 
        let result = login(username, password);

        if (result === "Please enter both username and password") {
            console.log("Test passed: Empty field handled.");
 
        } else {

            console.log("Test failed: Empty field not handled correctly.");
        }
    }

    function testSessionPersistence() {
        let username = "testUser"; 
        let password = "correctPassword";

        // Simulate login
        let result = login(username, password);

    if (result === "login successful") {
            // check if session is save after login
            let session = checkSession(); // as of rn is nothing is saved let just assume 

    if(session === true) {
                console.log("Test passed: Session persistence after login.");
    
    } else {

        console.log("Test failed: Session persistence after login.");
            }
    } else {
        
        console.log("Test failed: Login failed, session not appliciable.");
        }

}
    
// Run the test cases
testLoginValid();
testLoginInvalid();
testLoginEmptyFields();
testSessionPersistence();
