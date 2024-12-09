const express = require('express');
const path = require('path');
const checkWorkingHours = require('./middleware');

const app = express();
const PORT = 3000;

// Set view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files (for CSS)
app.use(express.static(path.join(__dirname, 'public')));

// Apply middleware to all routes
app.use(checkWorkingHours);

// Routes
app.get('/', (req, res) => {
  res.render('home');
});

app.get('/services', (req, res) => {
  res.render('services');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
