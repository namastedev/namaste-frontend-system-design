<h1>Cookie Storage :</h1>
<ul>
  <li>
    A cookie is a key-value pair (like theme=dark) that the browser stores and sends back to the server with each request to help the server remember things about the user.
  </li>
  <li>
    Cookies are sent with every HTTP request to the server, which can lead to increased bandwidth usage and slower performance, especially for large cookies.
  </li>
  <li>
    Cookies have a size limit of around 4 KB per cookie, which is generally sufficient for small pieces of data but may not be suitable for larger applications.
  </li>
  <li>
    Cookies can be set with an expiration date, after which they will be automatically deleted by the browser. If no expiration date is set, the cookie will be deleted when the browser session ends.
  </li>
  <li>
    Types of Cookies: 
    <ul>
      <li>
        <strong>Session Cookies:</strong> These are temporary cookies that are deleted when the browser is closed. They are used to store data that is needed only for the duration of the session, such as user authentication tokens.
      </li>
      <li>
        <strong>Persistent Cookies:</strong> These cookies remain on the user's device for a specified period or until they are manually deleted. They are used to remember user preferences or login information across sessions.
      </li>
      <li>
        <strong>Client Side Cookies (also called browser cookies):</strong> These are stored in the user's browser and can be accessed by the client-side JavaScript. They are often used for tracking user behavior, storing preferences, or managing sessions.
      </li>
      <li>
        These browser cookies can be read/modified by JavaScript.
      </li>
      <li>
        <strong>Server Side Cookies:</strong> These are set by the server and sent to the client in the HTTP response headers. They are used to store session information, user preferences, or other data that needs to be persisted across requests.
      </li>
      <li>
        These server cookies cannot be read/modified by JavaScript.
      </li>
      <li>
        These server coolkies are generally marked as HttpOnly, which means they cannot be accessed via JavaScript, providing an additional layer of security against XSS attacks.
      </li>
    </ul>
  </li>
  <li>
    Cookies set by the client can always be read by the server however, the cookies set by the server based on some configuration(HttpOnly attribute etc.) may not be read by the client.
  </li>
  <li>
    How to set JavaScript Cookies:
    <ul>
      <li>
        <strong>Write a Cookie:</strong> document.cookie = "key=value; expires=expirationDate; path=/; domain=example.com; secure; SameSite=Strict";
      </li>
      <li>
        <strong>Read a Cookie:</strong> You can read cookies using document.cookie, which returns a string containing all cookies in the format "key1=value1; key2=value2; ...". You can then parse this string to extract individual cookies.
      </li>
    </ul>
  </li>
  <li>
    How to set Server Cookies:
    <ul>
      <li>
        <strong>Set-Cookie Header:</strong> The server can set cookies by including a Set-Cookie header in the HTTP response. For example: Set-Cookie: key=value; Expires=expirationDate; Path=/; Domain=example.com; Secure; HttpOnly; SameSite=Strict
      </li>
      <li>
        <strong>Cookie Attributes:</strong> The server can specify attributes like Expires, Path, Domain, Secure, HttpOnly, and SameSite to control the behavior of the cookie.
      </li>
    </ul>
  </li>
  <li>
    Use cookies for user authentication, user preferences, tracking & analytics, A/B testing.
  </li>
  <li>
    User Authentication:
    <ul>
      <li>
        Use case: Keep a user logged in after they sign in.
      </li>
      <li>
        When you log in, the server sets a cookie with a session ID.
      </li>
      <li>
        On every page you visit, that cookie is sent to the server to confirm you’re still logged in.
      </li>
      <li>
        If the cookie is valid, the server allows access to protected resources.
      </li>
    </ul>
  </li>
  <li>
    Tracking & Analytics:
    <ul>
      <li>
        Use case: Track user behavior across sessions and visits.
      </li>
      <li>
        Cookies can store unique identifiers that help track users as they navigate a site.
      </li>
      <li>
        This data can be used for analytics, personalization, and targeted advertising.
      </li>
    </ul>
  </li>
</ul>

<h2>
  Notes common : <a href="https://namastedev.com/learn/namaste-frontend-system-design/cookie-storage-notes" target="_blank">Common Notes</a>
</h2>
<h2>
  ChatGPT Notes : <a href="https://chatgpt.com/share/6895010f-d19c-8006-a361-bafd99919b6c" target="_blank">ChatGPT Notes</a>
</h2>