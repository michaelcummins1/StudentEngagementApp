//Module Imports
const express = require('express');
const dotenv = require('dotenv').config();
const path = require('path')

const port = 3000;

//Functions
function generateAccessToken(username) {
    return jwt.sign(username, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
  }

//Use
app.use(express.static(path.join(__dirname, 'public')));

//Default Route to the Login page.
app.get('/', (req, res) => {
    //TO DO: if statement checking to see if client has a valid token and if so straight to homepage.
    res.redirect('/pages/login.html');
})
//Prints Hello Gruh on a new screen.
app.get('/api/gruh', (req, res) => {
    res.send('Hello Gruh');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
//Specifying a main directory that our web-app can use to get resources like images, html, css etc. from.


console.log(process.env.TOKEN_SECRET);
