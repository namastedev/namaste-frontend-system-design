<h1>
  Explain the concept of API Caching and its importance in web development.
</h1>

<li>
  There are several libraries and tools available for API caching, like React Query, SWR, and Apollo Client. These libraries provide built-in caching mechanisms that can significantly improve the performance of your application by reducing the number of network requests and speeding up data retrieval.
</li>

<li>
  How React Query uses Caching:
  <ul>
    <li>
      React Query automatically caches API responses and provides a simple API to manage the cache.
    </li>
    <li>
      It supports stale-while-revalidate caching, meaning it can return cached data while fetching fresh data in the background.
    </li>
    <li>
      Stale Time (staleTime): How long data is considered “fresh” before it becomes “stale”.
    </li>
    <li>
      Cache Time (cacheTime): How long unused data remains in the cache before it is garbage collected.
    </li>
    <li>
      You = React App, React Query Cache = Your pantry at home, API = Grocery Store.
    </li>
    <li>You buy rice and store it in your pantry (useQuery stores API data in memory).</li>
    <li>If someone asks for rice within staleTime, you take it directly from the pantry — no trip to supermarket.</li>
    <li>
      After staleTime, rice is still in the pantry but you start thinking “Hmm… maybe it’s not fresh” — you serve the old rice while sending someone to buy fresh rice in background.</li>
    <li>After cacheTime, if no one asks for rice, you throw it away (garbage collection).</li>
  </ul>
</li>