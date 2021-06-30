const express = require('express');
const mongoose = require('mongoose');
const path = require('path');


mongoose.connect('mongodb://localhost:27017/blog', { useNewUrlParser: true,  useUnifiedTopology: true}, (err) => {
    console.log(err ? err : 'Connected to  Database');
});

const app = express();

app.use(express.json());

// Setup View Engine

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));




app.get('/', (req, res) => {
    res.render('index', { name: 'AltCampus'});
});



app.listen(3000, () => {
    console.log('Server listening on port 3K!');
});

