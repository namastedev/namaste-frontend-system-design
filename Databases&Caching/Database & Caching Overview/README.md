<h1>Before Leaving from broweser we have different levels of Caching :-</h1>
<ul>
  <li>
    <strong>Http Cache:</strong> This cache is the last level of caching before the browser sends a request to the server. This happens through HTTP headers like Cache-Control, Expires, and ETag. The browser checks these headers to determine if it can use a cached version of the resource instead of making a new request. Common use cases include caching static assets like images, stylesheets, and scripts.
  </li>
  <li>
    <strong>Service Worker Cache:</strong> A JavaScript script that runs in the background (separate from the web page), enabling caching strategies like cache-first, network-first, or stale-while-revalidate. Common use case are Progressive Web Apps (PWAs), offline support, and custom caching strategies for dynamic content.
  </li>
  <li>
    <strong>API Cache:</strong> This include caching through local storage, IndexedDB, or in-memory caches. This is often used for caching API responses to reduce network requests and improve performance. Common use cases include caching user data, application state, or frequently accessed API responses.
  </li>
  <li>
    <strong>Application-Level Cache:</strong> Caching done in your app’s logic, typically in memory (RAM). Lost on page refresh or tab close. Examples include Redux, React Query.
</ul>