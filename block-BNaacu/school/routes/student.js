const express = require('express');
const router = express.Router();

router.get('/new', (req, res) => {
    res.render('studentForm',)
});

router.post('/', (req, res) => {
    res.send(req.body);
});

router.get('/', (req, res) => {
    res.render('students', { students: ["Shishupal", "Adtiya", "Aman", "Vickey", 'Anuj' ] })
});

router.get('/:id', (req, res) => {
    let id = req.params.id;
    res.render('studentDetails', {
        student: { name: "Rahul", email: "rahul@altcampus.io" } 
    })
});

module.exports = router;
