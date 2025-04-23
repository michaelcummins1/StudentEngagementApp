const db = require('../databaseinit');

exports.createPost = async(accountID, postDate, Title, postDescription, image, video, link, callback) => {
    db.run(
        'INSERT INTO Post (accountID, postDate, Title, postDescription, image, video, link) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [accountID, postDate, Title, postDescription, image, video, link],
        function (err) {
            callback(err, this?.lastID);
        }
    );
}

exports.getPostByID = (id, callback) => {
    db.get('SELECT * FROM Post WHERE id = ?', [id], (err, row) => {
        callback(err, row);
    });
};

exports.getAllPosts = (callback) => {
    db.all('SELECT postID, accountID, postDate, Title, postDescription, image, video, link FROM Post', [], callback);
};

