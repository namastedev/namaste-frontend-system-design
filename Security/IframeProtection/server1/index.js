const express = require('express');
const app = express();

// Serve static files (optional)
app.use(express.static('public'));

// Define your routes
app.get('/example1', (req, res) => {
    res.sendFile(__dirname + '/public/example1.html');
});

app.get('/example2', (req, res) => {
    res.sendFile(__dirname + '/public/example2.html');
});

app.get('/example3', (req, res) => {
    res.sendFile(__dirname + '/public/example3.html');
});

const port = process.env.PORT || 5010;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});