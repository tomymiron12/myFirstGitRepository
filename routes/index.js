const express = require('express');
const router = express.Router();

// '/' route
router.get('/', (req, res)=>{
    console.log("A user logged into the home");
    res.render('index.html');
});

// '/about' route
router.get('/about', (req, res)=>{
    console.log("A user logged into the home");
    res.render('about.html', {title: "about"});
});

module.exports = router;