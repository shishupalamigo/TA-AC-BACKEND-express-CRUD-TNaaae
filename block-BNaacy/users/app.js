const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const userRouts = require('./routes/users');

mongoose.connect('mongodb://localhost/userData', { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    console.log( err ? err : 'Connected to Database');
});

const app = express();

// Built In Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// setup view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routing Middlewares 
app.use('/users', userRouts);


// Error Handling middlewars
// 404
app.use((req, res, next) => {
    res.send('Error-404: Page Not Found');
});

// Custom Errors
app.use((err, req, res, next) => {
    res.send(err);
});

// Listener
app.listen(3000, () => {
    console.log('Server listening on  port 3k');
});
