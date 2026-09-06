<h1>Security</h1>
<ul>
<li>XSS :-
    <ul>
    <li>Use textContent instead of innerHTML</li>
    <li>Sanitize user input with DOMPurify, or other frameworks/libraries like React, Vue, etc.</li>
    <li>Use Content Security Policy (CSP) like default-src 'self' or script-src 'self' which means that only scripts from the same origin are allowed. Use nonce(like unique value) for inline scripts. Ex: <code><script nonce="unique-value"></script></code>Content-Security-Policy: default-src 'self' 'nonce-unique-value';</li>
    <li>Use Secure Cookies with HttpOnly (cannot be accessed by client-side scripts) and Secure flag (only sent over HTTPS).
    </li>
    </ul>
</li>
<li>iframe :-
    <ul>
    <li>Use the sandbox attribute to restrict the content of the iframe.</li>
    </ul>
</li>
<li>Dependency Security :-
<ul>use npm audit to check for vulnerabilities in your dependencies.</ul>
</li>
<li>CORS :-
    <ul>
    <li>Use the Access-Control-Allow-Origin header to specify which origins are allowed to access your resources.</li>
    <li>Use the Access-Control-Allow-Methods header to specify which HTTP methods are allowed.</li>
    <li>Use the Access-Control-Allow-Headers header to specify which headers are allowed.</li>
    </ul>
</li>
</ul>
