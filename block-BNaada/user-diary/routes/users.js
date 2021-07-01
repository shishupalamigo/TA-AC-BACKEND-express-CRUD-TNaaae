const express = require('express');
const User = require('../models/user');


const router = express.Router();

router.get('/', (req, res) => {
    User.find({}, (err, users) => {
        if(err) res.send(err);
        res.render('users', {users: users})
    });
});


router.get('/new', (req, res) => {
    res.render('addUser');
});

router.post('/', (req, res, next) => {
    User.create(req.body,  (err, createdUser) => {
        if(err) return res.redirect('/users/new');
        res.redirect('/users');
    });    
});

router.get('/:id', (req, res) => {
    let id = req.params.id;
    User.findById(id, (err, user) => {
        if(err) res.send(err);
        res.render('singleUser', { user: user});
    });
});
router.get('/:id/edit', (req, res) => {
    // edit form
});

router.put('/:id', (req, res) => {
    let id = req.params.id;
    res.send(`The user with Id ${id} has been updated with ${req.body}`);
});
router.delete('/:id', (req, res) => {
    let id = req.params.id;
    res.send(`The user with Id ${id} has been deleted`);
});

module.exports = router;
