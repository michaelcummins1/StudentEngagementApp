//Module Imports
const express = require('express');
const dotenv = require('dotenv').config();
const path = require('path');
//Static Fields
const app = express(); //Server Instance
const port = process.env.PORT|| 3000; //Port

app.use(express.json());
app.use(express.urlencoded({extended: true}));
//Loading Rendering Engine
app.engine('html',require('ejs').renderFile);
app.set('view engine','html');

//set ejs custom path
app.set('views', path.join(__dirname,'public/pages'));

//Loading Routing Dependences
app.use('/api/accounts', require('./routes/accountRoutes'));
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/posts', require('./routes/postRoutes'));
app.use('/api/tags', require('./routes/tagRoutes'));

//Static Assests Access
app.use(express.static(path.join(__dirname, 'public')));

//Default Route to the Login page.
app.get('/', (req, res) => {
    //TO DO: if statement checking to see if client has a valid token and if so straight to homepage.
    res.redirect('/pages/login.html');
})
//Prints Hello Gruh on a new screen. Sanity Test Code.
app.get('/api/gruh', (req, res) => {
    res.send('Hello Gruh');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
//Specifying a main directory that our web-app can use to get resources like images, html, css etc. from.