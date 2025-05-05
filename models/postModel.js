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

exports.getAllPosts = () => {
    console.log("reached the model")
    try {
        const getPost = db.prepare('SELECT postID, accountID, postDate, Title, postDescription, image, video, link FROM posts ORDER BY postID DESC');
        const rows = getPost.all();
        return Promise.resolve(rows);
      } catch (err) {
        return Promise.reject(err);
      }
};

