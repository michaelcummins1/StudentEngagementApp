const Database = require('better-sqlite3');
const db = Database('student.db');

// check if the account exist and has admin privileges
let accountEmail = 'user@example.com'; // replace with the email you want to check
let account = db.prepare('SELECT * FROM accounts WHERE email = ?').get(accountEmail);

    if(account) {
    console.log('Account founc for ${accountEmail}');


    if(account.adminPerms) {
        console.log('Account has admin privileges.');

    } else { 
        console.log('Account does not have admin privileges.');    

    }

} else {
    console.log('No account for this emaail.');
    
}

// check if a post had beeen reported or deleted
let postId = 1; // replace with the post ID you want to check
let post = db.prepare('SELECT * FROM posts WHERE id = ?').get(postId);

    if(post) {

    console.log('Post found for ID ${postId}');
    
    if (post.hadbeenReported) {

        console.log('Post has been reported.');

    } else { 

        console.log('Post has not been reported.');
    }

    if (post.hadbeenDeleted) {

        console.log('Post has been deleted.');

    } else { 

        console.log('Post has not been deleted.');
    }

} else { 
    
    console.log('No post found for this ID.');

}
