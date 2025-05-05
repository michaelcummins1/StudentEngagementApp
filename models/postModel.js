const db = require('../databaseinit');
const bcrypt = require('bcrypt');

exports.createPost = async (accountID, postDate, Title, postDescription, link, image, video, callback) => {
    console.log("In model function");
    new Promise((resolve, reject) => {
        try {
            const insertPost = db.prepare(`
                INSERT INTO posts (accountID, postDate, Title, postDescription, link, image, video)
                VALUES (?, ?, ?, ?, ?, ?, ?)
            `);
            insertPost.run(accountID, postDate, Title, postDescription, link, image, video);

            const result = db.prepare('SELECT last_insert_rowid() AS id').get();

            console.log("Post has been added to the DB");
            result.id ? resolve(result.id) : reject();
        } catch (err) {
            reject(err);
        }
    })
    .then(postID => callback(null, postID))
    .catch(err => {
        console.error("Error creating post:", err);
        callback("error", null);
    });
};

exports.getPostByID = (id, callback) => {
    db.get('SELECT * FROM Post WHERE id = ?', [id], (err, row) => {
        callback(err, row);
    });
};

exports.getAllPosts = (callback) => {
    db.all('SELECT postID, accountID, postDate, Title, postDescription, image, video, link FROM Post', [], callback);
};

