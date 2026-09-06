const express = require('express');
const app = express();


const redirectToHttps = (req, res, next) => {
  if (req.headers['x-forwarded-proto'] !== 'https') {
    // Redirect to HTTPS
    return res.redirect(['https://', req.get('Host'), req.url].join(''));
  }
  next();
};

app.use(redirectToHttps);


app.use((req, res, next) => {
  // The Referer HTTP request header contains the absolute or partial address from which a resource has been requested. The Referer header allows a server to identify referring pages that people are visiting from
  res.setHeader('Referrer-Policy', 'no-referrer');

  // X-Powered-By header tells which server is being used. It is a security risk to tell the server name because it can be used by hackers to exploit the server if a server has some vulnerability.
  res.removeHeader('X-Powered-By');

  // This is not important.
  res.setHeader('X-Content-Type-Options', 'nosniff');
  
  res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
  next();
});

app.get('/list', (req, res) => {
  res.send([{
    id: 1,
    title: "Namaste Frontend System Design"
  }])
});

const port = process.env.PORT || 5010;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});