<h1>
  Input Validation and Sanitization
</h1>
<ul>
  <li>
    Use Frameworks, librarries like react, axios, etc. which have built-in XSS protection and input validation.
  </li>
  <li>
    Use libraries like DOMPurify to sanitize HTML content before rendering it in the browser.
  </li>
  <li>
    Use Regular Expressions (RegEx) to validate input formats, such as email addresses, phone numbers, etc.
  </li>
  <li>
    Implement server-side validation to ensure that data is checked before being processed or stored.
  </li>
  <li>
    Use Content Security Policy (CSP) headers to restrict the sources of content that can be loaded by the browser, mitigating the risk of XSS attacks.
  </li>
  <li>
    Regularly update dependencies and libraries to ensure that you are protected against known vulnerabilities.
  </li>
</ul>