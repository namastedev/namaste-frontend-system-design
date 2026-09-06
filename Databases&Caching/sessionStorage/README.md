<h1>Session Storage as Cache</h1>
<ul>
  <li>
    Session Storage is a web storage mechanism that allows you to store data in the browser for the duration of a page session like reload and for tab/session lifecycle. It is similar to Local Storage but is cleared when the page session ends, which typically occurs when the browser tab or window is closed or user moves to new page
  </li>
  <li>
    Session storage is also synchronous like localStorage, meaning that reading and writing data is done in a blocking manner, which can lead to performance issues if large amounts of data are stored or accessed frequently.
  </li>
  <li>
    It also has a storage limit of around 5 MB per origin (domain), which is generally sufficient for small to medium-sized data but may not be suitable for larger applications.
  </li>
  <li>
    Session Storage is accessible only from the same origin (domain, protocol, and port), which provides a level of security against cross-origin attacks.
  </li>
  <li>
    sessionStorage.setItem('key', 'value') - Stores a key-value pair in sessionStorage. The value is stored as a string. So, if you want to store an object, you need to convert it to a string using JSON.stringify().
  </li>
  <li>
    sessionStorage.getItem('key') - Retrieves the value associated with the specified key from sessionStorage. If the key does not exist, it returns null. You can convert the string back to an object using JSON.parse() if you stored an object.
  </li>
  <li>
    sessionStorage.removeItem('key') - Removes the specified key and its associated value from sessionStorage. Except removeItem, you can't remove key-value pair from sessionStorage as it persistently stores data.
  </li>
  <li>
    Use sessionStorage for temporary data that needs to persist only during the current page session, such as form data, user input, temporar storage of search/filter criteria, or data that should not be retained after the user closes the tab or navigates away from the page. 
  </li>
  <li>
    Avoid using sessionStorage for sensitive information, large data sets, or data that requires persistence across sessions, as it can lead to performance issues and security risks.
  </li>
</ul>

<h2>
  Notes common : <a href="https://namastedev.com/learn/namaste-frontend-system-design/session-storage-notes" target="_blank">Common Notes</a>
</h2>