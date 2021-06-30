const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const indexRouter = require('./routes/index');
const studentsRouter = require('./routes/student');

// Connect to MongoDB database
mongoose.connect('mongodb://localhost:27017/blog', { useNewUrlParser: true,  useUnifiedTopology: true}, (err) => {
    console.log(err ? err : 'Connected to  Database');
});

// Instantiate Express Server
const app = express();

// Built-in Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Setup View Engine

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routing Middlewares
app.use('/', indexRouter);
app.use('/students', studentsRouter);

// Error Handling Middleware
app.use((req, res, next) => {
    res.status(404);
    res.send('Error 404: Page Not Found');
});


// Listener Middleware
app.listen(3000, () => {
    console.log('Server listening on port 3K!');
});

