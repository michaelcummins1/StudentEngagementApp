const Post = require('../models/postModel');

exports.create = (req, res) => {
    const {accountID, postDate, Title, postDescription, image, video, link} = req.body;
    Post.createPost(accountID, postDate, Title, postDescription, image, video, link, (err, postID) => {
        if (req.headers.accept?.includes('application/json')) {
          // Handle API call (JSON response)
          if (err) return res.status(500).json({ error: err.message });
          return res.status(201).json({ id: postID, accountID: accountID});
        } else {
          // Handle form submission (HTML response)
          if (err) {
            return res.render('students/add', {
              message: { type: 'error', text: 'Failed to add student: ' + err.message }
            });
          }
          return res.render('students/add', {
            message: { type: 'success', text: 'Student added successfully!' }
          });
        }
    });
};

exports.list = (req, res) => {
    Post.getAllPosts((err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
};

exports.getById = (req, res) => {
    const id = req.params.id;
    Post.getPostByID(id, (err, post) => {
      if (err) return res.status(500).json({ error: err.message });
      if (!post) return res.status(404).json({ error: "Post not found" });
      res.json(student);
    });
  };