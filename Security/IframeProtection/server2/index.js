// Server 2 is an iframe, which is a child window of our main website and will be embedded in our main website.

const express = require('express');
const app = express();

app.use((req, res, next) => {
  // Below line will tell that you can not allow your iframe to be embedded in different domains.
  // It will only allow to be embedded in the same domain.
  // frame-ancestors specifies valid parents that may embed a page using iframe or object.
    res.setHeader('Content-Security-Policy', "frame-ancestors 'self'")

    res.cookie('sessionID', '12345', {
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
      });
    next();
})



// Serve static files (optional)
app.use(express.static('public'));

// Define your routes
app.get('/iframe-webiste1', (req, res) => {
  res.sendFile(__dirname + '/public/iframe-webiste1.html');
});

app.get('/iframe-webiste2', (req, res) => {
res.sendFile(__dirname + '/public/iframe-webiste2.html');
});


const port = process.env.PORT || 5011;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});