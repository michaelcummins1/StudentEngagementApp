const Database = require('better-sqlite3');
const db = Database('studentAppDB.db');
//creating accounts Table
db.exec(`
    CREATE TABLE IF NOT EXISTS accounts(
        accountID INTEGER PRIMARY KEY AUTOINCREMENT,
        email VARCHAR(255) NOT NULL,
        creationDate DATE NOT NULL,
        viewPerms BOOLEAN NOT NULL,
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
        hasBeenReported BOOLEAN NOT NULL,
        hasBeenDeleted BOOLEAN NOT NULL,
        FOREIGN KEY (accountID) REFERENCES accounts(accountID)
    );`
);
db.close();

