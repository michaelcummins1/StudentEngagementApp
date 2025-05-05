const Post = require('../models/postModel');
const bcrypt = require('bcrypt');
const {
    generateAccessToken,
    generateRefreshToken,
    rotateRefreshToken,
    getSession,
    revokeSession
} = require('../auth/authJWT');

exports.create = (req, res) => {
  console.log("Register function did something.");
  const { accountID, postDate, postTitle, postBody, postImage, postVideo, postLink} = req.body;
  Post.createPost(accountID, postDate, postTitle, postBody, postLink, postImage, postVideo, (err, postID) => { console.log("createPost did something.");
    if (req.headers.accept?.includes('application/json')) {
      // Handle API call (JSON response)
      if (err) return res.status(500).json({ error: err.message });
      return res.status(201).json({ id: postID, accountID, postDate, postTitle, postBody, postLink, postImage, postVideo });
    } else {
      // Handle form submission (HTML response)
      if (err) {
        console.log("Case 3");
        console.log(err.message)
        return res.render('postcreation.html');
      }
      console.log("Case 4");
      return res.render('postcreation.html');
    }
  });
  };

  exports.list = async (req, res) => {
    console.log("GET /api/posts hit");
  try {
    const posts = await Post.getAllPosts();
    console.log("Posts loaded:", posts.length);
    res.json(posts);
  } catch (err) {
    console.error("Error in list controller:", err);
    res.status(500).json({ error: err.message });
  }
  };