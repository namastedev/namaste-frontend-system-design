<h1>Service Worker</h1>
<li>
  ChatGpt notes : <a href="https://chatgpt.com/share/6899b922-3afc-8006-9ad8-2af1d7be7246" target="_blank">ChatGPT Notes</a>
</li>
<li>
  Service Worker works independently f your webpage lifecycle, which means it runs on separate thread compared to your main thread.
</li>
<li>
  Service worker can't access DOM, local storage, session storage, cookies, etc because it runs on a separate thread.
</li>
<li>
  Service worker can intercept network requests and cache them, which allows you to serve cached content when the user is offline.
</li>
<li>
  Service worker can be used to implement push notifications, background sync, and other advanced features.
</li>
<li>
  Service worker can be used to implement offline-first applications, which means that your application can work even when the user is offline.
</li>
<li>
  Service worker can be used to implement progressive web apps (PWAs), which are web applications that can be installed on the user's device and work offline.
</li>
<li>
  Service worker can be used to implement caching strategies, such as cache-first, network-first, and stale-while-revalidate.
  Cache-first means that the service worker will try to serve the cached content first, and if it is not available, it will fetch it from the network.
  Network-first means that the service worker will try to fetch the content from the network first, and if it is not available, it will serve the cached content.
  Stale-while-revalidate means that the service worker will serve the cached content while it fetches the fresh content from the network in the background.
</li>
<li>
  Service workers are event-driven, which means that they can respond to events such as fetch, install, activate.
</li>
<li>
  Service workers only works on secure origins (HTTPS) or localhost, which means that you can't use service workers on HTTP websites.
</li>