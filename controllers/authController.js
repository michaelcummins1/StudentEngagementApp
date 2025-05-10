const Account = require('../models/accountModel');
const bcrypt = require('bcrypt');
const {
    generateAccessToken,
    generateRefreshToken,
    rotateRefreshToken,
    getSession,
    revokeSession
} = require('../auth/authJWT');

/**
exports.register = async (req, res) => {
    
    console.log(req.body.email + " THIS IS IT!");
        Account.createAccount(email, password, date, (err, id) => {
        if (err) return res.status(400).json({ error: err.message });
        res.status(201).json({ id });
    });
};
**/

exports.register = (req, res) => {
  console.log("Register function did something.");
    const { email, password, date = new Date().toDateString() } = req.body;
    Account.createAccount(email, password, date, (err, accountID) => { console.log("createAccount did something.");
      if (req.headers.accept?.includes('application/json')) {
        // Handle API call (JSON response)
        if (err) return res.status(500).json({ error: err.message });
        return res.status(201).json({ id: accountID, email, date });
      } else {
        // Handle form submission (HTML response)
        if (err) {
          console.log("Case 3");
          return res.render('login.html', {
            message: { type: 'error', text: 'Failed to add student: ' + err.message }
          });
        }
      }
    });
  };

  exports.login = (req, res) => {
    const { email, password } = req.body;
    Account.findByEmail(email, async (err, user) => {
        if (err || !user) return res.status(401).json({ error: 'Invalid credentials 1' });
        const match = await bcrypt.compare(password, user.password);
        if (!match) return res.status(401).json({ error: 'Invalid credentials 2' });
        const accessToken = generateAccessToken(user);
        generateRefreshToken(user.id, (err, refreshToken) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ accessToken, refreshToken });
        });
    });
};