//Module Imports
const express = require('express');
const dotenv = require('dotenv').config();
const path = require('path');
//Static Fields
const app = express(); //Server Instance
const port = process.env.PORT|| 3000; //Port

//Functions
function generateAccessToken(username) {
    return jwt.sign(username, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
  }

//Routers (I dont like this word but what can u do)
app.use('/accountRoutes',require('.routes/accountRoutes'));
app.use('/authRoutes',require('.routes/authRoutes'));
app.use('/postRoutes',require('.routes/postRoutes'));
app.use('/tagRoutes',require('.routes/tagRoutes'));

//Static Assests Access
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