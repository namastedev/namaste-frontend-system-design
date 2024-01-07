const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

// Middleware to check Referer header
app.use((req, res, next) => {
  const referer = req.get('Referer');

  // Check if Referer header exists and matches the expected domain
  if (referer && referer.startsWith('https://yourwebsite.com')) {
    next(); // Request is from an expected source
  } else {
    res.status(403).send('Forbidden'); // Reject the request
  }
});

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/process', (req, res) => {
  // Process the request
  res.send('Request processed successfully');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});