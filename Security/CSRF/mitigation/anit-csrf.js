const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const crypto = require('crypto');

const app = express();
const port = 3000;

// Use sessions for tracking CSRF tokens
app.use(session({
  secret: 'your_secret_key', // Change this to a secure secret key
  resave: false,
  saveUninitialized: true,
}));

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));

// Serve HTML form
app.get('/', (req, res) => {
  // Generate CSRF token and store it in the session
  if (!req.session.csrfToken) {
    req.session.csrfToken = crypto.randomBytes(32).toString('hex');
  }

  // Render the HTML form
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Fund Transfer Form</title>
      </head>
      <body>
        <form id="transferForm" action="/process_form" method="POST">
          <h1>Special Fund Transfer Offer!</h1>
          <p>Transfer funds now and get a free gift worth $50!</p>
          <input type="hidden" name="acct" value="224224"/>
          <input type="hidden" name="amount" value="50000"/>
  
          <!-- Include CSRF token in the form -->
          <input type="hidden" name="csrf_token" value="${req.session.csrfToken}"/>
  
          <input type="submit" value="Click to get your free gift!"/>
        </form>
  
        <script>
          // Add event listener to the form for token validation
          document.getElementById('transferForm').addEventListener('submit', function(event) {
            const submittedToken = document.querySelector('input[name="csrf_token"]').value;
            if (submittedToken !== '${req.session.csrfToken}') {
              event.preventDefault();
              alert('CSRF Token Validation Failed!');
            }
          });
        </script>
      </body>
    </html>
  `);
});

// Process form submission
app.post('/fundtransfer', (req, res) => {
  // Validate CSRF token on the server side
  const submittedToken = req.body.csrf_token;
  if (!submittedToken || submittedToken !== req.session.csrfToken) {
    res.status(403).send('CSRF Token Validation Failed!');
    return;
  }

  // Process the form data securely
  // ...

  // Clear CSRF token after processing
  delete req.session.csrfToken;

  res.send('Form submitted successfully!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
