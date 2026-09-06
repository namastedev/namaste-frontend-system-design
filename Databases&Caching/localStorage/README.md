<h1>Localstorage as Cache :</h1>
<ul>
  <li>
    It is a web storage mechanism that allows you to store data in the browser persistently(retians information even after the browser or application is closed), even after the user closes the browser or navigates away from the page.
  </li>
  <li>
    LocalStorage is synchronous, meaning that reading and writing data is done in a blocking manner, which can lead to performance issues if large amounts of data are stored or accessed frequently.
  </li>
  <li>
    It has a storage limit of around 5 MB per origin (domain), which is generally sufficient for small to medium-sized data but may not be suitable for larger applications.
  </li>
  <li>
    LocalStorage is accessible only from the same origin (domain, protocol, and port), which provides a level of security against cross-origin attacks.
  </li>
  <li>
    localStorage.setItem('key', 'value') - Stores a key-value pair in localStorage. The value is stored as a string. So, if you want to store an object, you need to convert it to a string using JSON.stringify().
  </li>
  <li>
    localStorage.getItem('key') - Retrieves the value associated with the specified key from localStorage. If the key does not exist, it returns null. You can convert the string back to an object using JSON.parse() if you stored an object.
  </li>
  <li>
    localStorage.removeItem('key') - Removes the specified key and its associated value from localStorage. Except removeItem, you can't remove key-value pair from localStorage as it persistently stores data.
  </li>
  <li>
    Use localStorage for user preference(like theme-dark/light setting, language selection, etc.), caching small amounts of data, or storing non-sensitive information that needs to persist across sessions.
  </li>
  <li>
    Avoid using localStorage for sensitive information, large data sets, or data that requires frequent updates, as it can lead to performance issues and security risks.
  </li>
</ul>

<h2>
  Notes common : <a href="https://namastedev.com/learn/namaste-frontend-system-design/local-storage-notes" target="_blank">Common Notes</a>
</h2>