const Database = require('better-sqlite3');
const db = Database('studentAppDB.db');
//creating accounts Table
db.exec(`
    CREATE TABLE IF NOT EXISTS accounts(
        accountID INTEGER PRIMARY KEY AUTOINCREMENT,
        email VARCHAR(255) UNIQUE NOT NULL,        
        password VARCHAR(255) NOT NULL,
        creationDate DATE NOT NULL,
        deletedAccount BOOLEAN NOT NULL
    );`
);
//Create accountPerms Table
db.exec(`
    CREATE TABLE IF NOT EXISTS accountPerms(
    accountID INTEGER PRIMARY KEY,
    postPerms BOOLEAN NOT NULL,
    adminPerms BOOLEAN NOT NULL
    );`
);
db.exec(`
    CREATE TABLE IF NOT EXISTS followings(
    followRecordID INTEGER PRIMARY KEY AUTOINCREMENT,
    followerID INTEGER NOT NULL,
    followingID INTEGER NOT NULL,
    status BOOLEAN NOT NULL DEFAULT FALSE,
    FOREIGN KEY (followerID) REFERENCES accounts(accountID)
    );`
);
//creating posts Table
db.exec(`
    CREATE TABLE IF NOT EXISTS posts (
        postID INTEGER PRIMARY KEY AUTOINCREMENT,
        accountID INT NOT NULL, 
        postDate DATE NOT NULL,
        Title nvarchar(255) NOT NULL,
        postDescription nvarchar(3000),
        link nvarchar(1000),
        image MEDIUMBLOB,
        video LARGEBLOB,
        FOREIGN KEY (accountID) REFERENCES accounts(accountID)
    );`
);
//Create tags table
db.exec(`
    CREATE TABLE IF NOT EXISTS tags (
        tagID INTEGER PRIMARY KEY,
        tagName nvarchar(255)
    );`
);
//create postTags Table (Relate posts to tags)
db.exec(`
    CREATE TABLE IF NOT EXISTS postTags (
        tagID INTEGER PRIMARY KEY,
        postID INTEGER,   
        FOREIGN KEY (postID) REFERENCES posts(postID)        
        );`
);
db.exec(`
    CREATE TABLE IF NOT EXISTS Sessions (
        sessionID TEXT PRIMARY KEY,
        accountID INTEGER,
        refreshToken TEXT NOT NULL,
        issuedOn INTEGER,
        expiresOn INTEGER,
        FOREIGN KEY(accountID) REFERENCES Accounts(accountID)
    )
`);
//prepared statement
module.exports = db;