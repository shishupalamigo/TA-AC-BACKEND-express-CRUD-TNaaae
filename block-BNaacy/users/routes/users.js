const express = require('express');
const User = require('../models/user');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Welcome');
});
router.get('/new', (req, res) => {
    res.render('addUser');
});
router.post('/', (req, res, next) => {
    console.log(req.body);
    User.create(req.body,  (err, createdUser) => {
        if(err) return next();
        res.redirect('/users');
    });
    
});


module.exports = router;
