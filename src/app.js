const express = require('express');
const path = require('path');
const app = express();
const actionsRouter = require('./routes/actions');

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Define routes
app.use('/actions', actionsRouter);

// Home route
app.get('/', (req, res) => {
    res.render('index');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});