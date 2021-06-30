const express = require('express');
const path = require('path');
const router = express.Router();



router.get('/', (req, res) => {
    res.render('index', { name: 'AltCampus' });
});

module.exports = router;
