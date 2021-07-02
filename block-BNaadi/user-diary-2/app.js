const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const usersRouter = require('./routes/users');
const indexRouter = require('./routes/index');

// Connect to MongoDB database
mongoose.connect('mongodb://localhost:27017/user-diary-2', { useNewUrlParser: true,  useUnifiedTopology: true}, (err) => {
    console.log(err ? err : 'Connected to  Database');
});

// Instantiate Express Server
const app = express();

// Built-in Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));
// Setup View Engine

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routing Middlewares
app.use('/', indexRouter);
app.use('/users', usersRouter);

// Error Handling Middleware
// 404
app.use((req, res, next) => {
    res.status(404);
    res.send('Error 404: Page Not Found');
});
// Custom Errors
app.use((err, req, res, next) => {
    res.send(err);
});

// Listener Middleware
app.listen(3000, () => {
    console.log('Server listening on port 3K!');
});

