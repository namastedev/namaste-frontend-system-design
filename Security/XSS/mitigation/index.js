// Install the package by running the following command: npm install
// Run the server by running the following command: npm start


const express = require("express");

const PORT = 3010;
const app = express();


// This code is a middleware function in a Node.js/Express application that sets the Content-Security-Policy (CSP) header for every HTTP response.
// The purpose of the Content-Security-Policy header is to help prevent certain types of attacks, such as Cross-Site Scripting (XSS) and data injection attacks,
// by controlling the resources the browser is allowed to load for a given page.
app.use((req, res, next) => {   // app.use((req, res, next) => { ... }): This is middleware in an Express application.
    // It runs for every request made to the server. The req (request), res (response), and next (callback to the next middleware) are typical parameters for middleware functions.
    res.setHeader(
        'Content-Security-Policy',  //  res.setHeader('Content-Security-Policy', ...):This sets the Content-Security-Policy header in the HTTP response.
        // This header tells the browser which resources are allowed to be loaded on the page.

        "default-src 'self';" +     //  'default-src 'self'; specifies that the default source for content (e.g., images, scripts, styles) should be the same origin as the website (the 'self' directive).
        
        "script-src 'self' 'nonce-randomKey' 'unsafe-inline' http://unsecure.com;"  // "script-src 'self' 'nonce-randomKey' 'unsafe-inline' http://unsecure.com;":script-src is more specific and governs where scripts can be loaded from.
        // 'self': Scripts can be loaded from the same origin.
        // 'nonce-randomKey': Scripts with a matching nonce (a cryptographic random string) can be executed. This allows for inline scripts to be executed safely if they have the correct nonce. Here, 'randomKey' is a placeholder for the actual nonce value.
        // 'unsafe-inline': This allows the execution of inline scripts, which generally is considered unsafe. Including this weakens the security policy, as it can lead to vulnerabilities.
        // http://unsecure.com: This allows scripts to be loaded from the specified external URL (http://unsecure.com).
    );
    next();
})

app.use(express.static('public'));

app.get('/', (req, res) => {
    console.log(req.url);
    res.sendFile(__dirname + '/index.html');
    // We can use res.sendFile(__dirname + '/public/index.html'); also. Then we don't need to use app.use(express.static('public'));.
});

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});