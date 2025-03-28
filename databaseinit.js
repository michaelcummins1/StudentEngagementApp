const Database = require('better-sqlite3');
const db = Database('studentAppDB.db');
//creating accounts Table
db.exec(`
    CREATE TABLE IF NOT EXISTS accounts(
        accountID INTEGER PRIMARY KEY AUTOINCREMENT,
        email VARCHAR(255) NOT NULL,
        pfp SMALLBLOB,
        creationDate DATE NOT NULL,
        postPerms BOOLEAN NOT NULL,
        adminPerms BOOLEAN NOT NULL,
        postCount INT,
        deletedAccount BOOLEAN NOT NULL
    );`
);
//creating accounts Table
db.exec(`
    CREATE TABLE IF NOT EXISTS posts (
        postID INTEGER PRIMARY KEY AUTOINCREMENT,
        accountID INT, 
        postDate DATE NOT NULL,
        Title nvarchar(255) NOT NULL,
        postDescription nvarchar(3000),
        image MEDIUMBLOB,
        video LARGEBLOB,
        FOREIGN KEY (accountID) REFERENCES accounts(accountID)
    );`
);
db.exec(`
    CREATE TABLE IF NOT EXISTS tags (
        tagID INTEGER PRIMARY KEY,
        tagName nvarchar(255)
    );`
);
db.exec(`
    CREATE TABLE IF NOT EXISTS postTags (
        tagID INTEGER PRIMARY KEY,
        postID INTEGER,   
        FOREIGN KEY (postID) REFERENCES posts(postID)        
        );`
);
db.close();

