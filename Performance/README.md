<h1>General HTML performance considerations</h1>
    <ul>
        <li><b>Cache HTML responses : </b>Caching HTML responses is difficult, since the response may include links to other critical resources such as CSS, JavaScript, images, and other resource types.
            Nonetheless, a short cache lifetime—rather than no caching—can have benefits such as allowing a resource to be cached at a CDN—reducing the number of requests that are served from the origin server—and in the browser, allowing resources to be revalidated rather than downloaded again.
            Five minutes for static HTML resources is a safe bet, and ensures that periodic updates don't go unnoticed.
            A cautious approach to caching HTML could be to use the ETag. Whenever the resource changes, a new ETag value must be generated. On subsequent requests, the browser sends the ETag value.If the ETag on the server matches the one sent by the browser, the server responds with a 304 Not Modified response, and the browser uses the resource from the cache.
        </li>
        <li><b>Compression Technique : </b>Text-based responses such as HTML, JavaScript, CSS, and SVG images should be compressed to reduce their transfer size over the network in order for them to download more quickly. The most widely used compression algorithms are gzip and Brotli. Brotli results in about a 15% to 20% improvement over gzip.
            Brotli provides a fairly noticeable improvement over gzip. Use Brotli when possible, but if your website is used by a high number of users on legacy browsers, be sure that gzip is used as a fallback, as any compression is better than no compression at all.
        </li>
        <li><b>Content Delivery Networks (CDNs) : </b>A Content Delivery Network (CDN) is a distributed network of servers that cache resources from your origin server, and in turn, serves them from edge servers that are physically closer to your users.</li>
    </ul>

<h1>Performance Optimization</h1>
<ul>
<li>Network Optimization :
<ul>
    <li>For Critical Rendering Path, try to load minimum CSS and JS files at start/1st packet itself. Use CSS minification and async, defer attributes for JS files.</li>
    <li>Use a Content Delivery Network (CDN) to serve static assets.</li>
    <li>Use a Service Worker to cache resources and provide offline support.</li>
    <li>To improve performance of images, use srcset and sizes attributes. Use picture element for responsive images. Use AVIF/WebP for better image quality and smaller file size. Use SVG/Base64 for small images/icons</li>
    <li>Use Resource Hinting like preconnect, prefetch, preload, pre-render to improve the performance of your website. Use fetch-priority attribute to prioritize the loading of critical resources.</li>
    <li>For compression and minification use Brotli, gzip, and other compression techniques to reduce the size of your website's resources.</li>
</ul>
</li>
<li>Rendering Pattern :
<ul>
    <li>Use CSR, SSR, SSG, and RSC to improve the performance of your website.</li>
</ul>
</li>
<li>Build Optimization :
<ul>
    <li>Use a bundler tool like Webpack, Vite, or Rollup to bundle and optimize your website's resources.</li>
    <li>Bundler provides Code splitting : Entry point splitting, Dynamic import(Lazy loading), Routing code splitting.</li>
    <li>Bundler does Tree Shaking to remove unused code and reduce the size of your website's resources. It works on ES6 import/export feature.</li>
    <li>Bundler does Minification to reduce the size of your website's resources.</li>
    <li>Bundler does compression to reduce the size of your website's resources.</li>
    <li>Bundler does Hot Module Replacement (HMR) to improve the development experience.</li>
</ul>
</li>
<li>Other Optimztion :
<ul>
    <li>Use useMemo and useCallback to optimize the performance of your React components.</li>
    <li>Use Lazy loading to improve the performance of your React components.</li>
    <li>Use Cache-control, Last-Modified, Expires, ETag to improve the performance of your website.</li>
    <li>Use local storage and session storage to store data on the client side.</li>
</ul>
</li>
</ul>
