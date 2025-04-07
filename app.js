//Static Fields
const express = require('express');
const app = express(); //express.js Module

const path = require('path')

const port = 3000;

//app.get is an HTTPGET request https://expressjs.com/en/starter/basic-routing.html
app.get('/', (req, res) => {
    res.send('To get to mainpage type \'/pages/mainpage.html\'');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
//Specifying a main directory that our web-app can use to get resources like images, html, css etc. from.
app.use(express.static(path.join(__dirname, 'public')))