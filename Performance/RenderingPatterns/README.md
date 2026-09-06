<h1>Rendering Pattern</h1>
<h2>
  Rendering Patterns Common Notes : <a href="https://heyashu.in/digital-garden/notes/front-end-design-system/web-rendering-patterns" target="_blank">Common Notes</a>
</h2>
<h2>
  ChatGPT Notes : <a href="https://chatgpt.com/share/6893bdf0-fdbc-8006-a54f-7ac9a6e27ee8" target="_blank">ChatGPT Notes</a>
</h2>
    <ol>
        <li>
            <h3>Client-Side Rendering (CSR)</h3>
            <p><b>What is Client-Side Rendering (CSR)?</b></p>
            <p>Client-Side Rendering is a method where the browser (the client) is responsible for rendering the content of the web page after downloading it. This means the server initially sends an almost empty HTML file with a reference to the JavaScript code (bundled in a file). Once the browser downloads and executes the JavaScript, it fetches the necessary data (typically through APIs) and dynamically builds and updates the content on the page.</p>
            <p><b>How CSR Works (Step-by-Step)</b></p>
            <ol>
                <li><b>Initial Request:</b>The client (browser) sends a request to the server for a webpage (e.g., example.com/home).</li>
                <li><b>Empty HTML Response:</b>The server responds with an almost empty HTML file, which usually contains a minimal structure (such as <div id="root"></div>) and links to the JavaScript files needed for rendering the page.</li>
                <li><b>JavaScript Execution:</b>The browser downloads the JavaScript bundles and executes them. <br />
                    The JavaScript (typically from a framework/library like React, Vue, or Angular) takes control, fetches the necessary data from APIs or other services, and dynamically generates the HTML elements on the page.</li>
                <li><b>Hydration:</b>Then hydration(attaching event listeners) happens. Since it is a CSR hydration is easy and fast.</li>
                <li><b>Content Rendering:</b>Once the data is received and the DOM (Document Object Model) is updated, the page becomes interactive, and users can interact with the dynamic content (such as forms, buttons, and other interactive elements).</li>
                <li><b>Subsequent Navigation:</b>Unlike traditional multi-page websites where navigating to a new page would require a full page reload, CSR typically updates only parts of the page, ensuring smoother transitions between different sections (using routing techniques like React Router).</li>
            </ol>
            <p><b>Disadvantages of CSR:</b></p>
            <ul>
                <li><b>SEO Challenges:</b>One of the major drawbacks of CSR is SEO (Search Engine Optimization). Since the content is rendered in the browser and search engines often rely on static HTML for crawling and indexing, websites using CSR can be harder to optimize for search engines.</li>
                <li><b>Slow Initial Load (Time-to-First-Byte):</b>In CSR, the user initially receives a very basic HTML file, which doesn't contain much useful content. The browser then has to download and execute the JavaScript files, fetch data from APIs, and finally render the content.
                   <br /> This process can make the initial load slower, especially on slower connections or lower-end devices. This is often called "blank screen" syndrome as users might see a blank page until the JavaScript finishes loading.</li>
                <li><b>JavaScript Dependency:</b>Since CSR relies heavily on JavaScript, users with JavaScript disabled or unsupported in their browsers will not be able to access the site properly.</li>
            </ul>
        </li>
        <li>
        <h3>Server Side Rendering (SSR)</h3>
            <p><b>What is Server-Side Rendering (SSR)?</b></p>
            <p>Server-Side Rendering (SSR) is a technique in which the server generates the full HTML for a webpage on every request and sends it to the client (browser). This is in contrast to Client-Side Rendering (CSR), where the browser receives a barebones HTML file and dynamically renders the page using JavaScript.

In SSR, the initial HTML is pre-rendered on the server, meaning when the user requests a webpage, they receive a fully-formed HTML document. Once the HTML is loaded, client-side JavaScript may take over (similar to CSR), but the first load is faster because the user sees content immediately.</p>
            <p><b>How SSR Works (Step-by-Step)</b></p>
            <ol>
                <li><b>Request from the Client:</b>A user navigates to a webpage (e.g., example.com/products). The browser sends a request to the server for that page.</li>
                <li><b>Server Generates the HTML:</b>The server processes the request, often by querying a database or fetching data from an API.
                    The server then dynamically generates the HTML page using a template engine or a server-side framework (like Next.js for React).</li>
                <li><b>Response to the Client:</b>The server sends the fully rendered HTML to the browser, which displays the content to the user immediately.</li>
                <li><b>Client-Side Hydration:</b>Once the HTML is loaded, client-side JavaScript (if present) may take over to enhance interactivity and dynamic content. This process is known as hydration, where the client-side code attaches event listeners and updates the DOM as needed.</li>
            </ol>
            <p><b>Advantages of SSR:</b></p>
            <ul>
                <li><b>Improved SEO:</b>One of the key benefits of SSR is improved SEO performance. Search engines can easily crawl and index the content of SSR websites since the initial HTML is fully formed and contains all the necessary information.</li>
                <li><b>Faster Initial Load:</b>SSR typically results in faster initial load times compared to CSR. Since the server generates the full HTML, users see content immediately, reducing the "blank screen" effect often associated with CSR. SSR offers a much faster initial page load compared to CSR because the browser receives fully rendered HTML, which can be displayed immediately, even before JavaScript finishes loading.</li>
            </ul>
            <p><b>Disadvantages of SSR:</b></p>
            <ul>
                <li><b>Server Load:</b>SSR can put a heavier load on the server compared to CSR, as the server has to generate the full HTML for each request. This can impact server performance, especially under high traffic conditions.</li>
                <li><b>Complexity:</b>Implementing SSR can be more complex than CSR, especially for developers who are more familiar with client-side development. SSR requires server-side rendering logic, which may involve additional setup and configuration.</li>
            </ul>
            <p><b>Example of SSR using NextJS</b></p>
```
import React from 'react';

// getServerSideProps is a special Next.js function that fetches data server-side
export async function getServerSideProps() {
  // Simulate a data fetch (API call)
  const res = await fetch('https://api.example.com/products');
  const products = await res.json();

  // Return the data as props
  return { props: { products } };
}

const HomePage = ({ products }) => {
  return (
    <div>
      <h1>Products List (Server-Side Rendered)</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
```
</li>
<li>
            <h3>Static Site Generation (SSG)</h3>
            <p><b>What is Static Site Generation (SSG)?</b></p>
            <p>
                Static Site Generation (SSG) is a method of building websites where the HTML for all the pages is generated at build time, rather than at runtime (when a user requests a page). This is in contrast to Server-Side Rendering (SSR), where pages are generated dynamically for each request, or Client-Side Rendering (CSR), where pages are generated in the browser.
                
In SSG, the website is pre-built as static files, meaning that when users request a page, they receive a pre-generated HTML document almost instantly, without the need for real-time server-side processing. This results in faster performance and lower server load because the server is simply delivering static files (HTML, CSS, and JavaScript) rather than rendering them on each request.</p>
            <p><b>How SSG Works (Step-by-Step)</b></p>
            <ol>
                <li><b>Build Process:</b>During the build process (typically done once during deployment), all pages of the site are pre-rendered. Data required to populate each page (e.g., from APIs, CMS, or databases) is fetched at build time, and the server generates static HTML files for each route or page.</li>
                <li><b>Serving Pre-Built Pages:</b>Once the build process is complete, the website consists entirely of static assets (HTML, CSS, JavaScript, images, etc.). When users request a page, the server serves the pre-built HTML file for that page.</li>
                <li><b>Client-Side JavaScript (Optional):</b>Although the initial content is static, you can still enhance your pages with client-side JavaScript to add dynamic functionality, similar to CSR. This process is often referred to as "rehydration" when using frameworks like React or Vue.</li>
                <li><b>Hosting and CDN:</b>Since the site consists of static files, it can be deployed to a Content Delivery Network (CDN), which serves the files from servers closest to the user. This results in incredibly fast load times since there’s no need for server-side processing.</li>
            </ol>
            <p><b>Advantages of SSG:</b></p>
            <ul>
                <li><b>Fast Performance:</b>SSG websites are incredibly fast because the content is pre-built and served as static files. Users receive the content almost instantly, resulting in a smooth and responsive experience.</li>
                <li><b>Low Server Load:</b>Since the server only serves static files, the load on the server is minimal. This makes SSG websites highly scalable and cost-effective, especially for high-traffic sites.</li>
                <li><b>SEO Benefits:</b>SSG websites are SEO-friendly because search engines can easily crawl and index the static HTML content. This can improve search engine rankings and visibility.</li>
            </ul>
            <p><b>Disadvantages of SSG:</b></p>
            <ul>
                <li><b>Dynamic Content:</b>SSG is not suitable for websites with highly dynamic content that changes frequently or requires real-time updates. Since the content is pre-built, any changes to the data will require a rebuild of the site.</li>
                <li><b>Build Time:</b>For large websites with many pages or complex data requirements, the build process can be time-consuming. This may impact the speed of updates or changes to the site.</li>
            </ul>
            <p><b>Example of SSG using NextJS</b></p>
```
            // pages/posts/[id].js
import React from 'react';

// This function runs at build time and pre-renders a static HTML page for each post
export async function getStaticProps({ params }) {
  // Simulate fetching data (e.g., from an API or local markdown files)
  const post = await fetchPostById(params.id);
  
  return {
    props: {
      post,
    },
  };
}

// This function determines the list of static pages to generate
export async function getStaticPaths() {
  const posts = await fetchAllPosts();
  
  const paths = posts.map((post) => ({
    params: { id: post.id },
  }));
  
  return {
    paths,
    fallback: false, // Only build pages for existing paths
  };
}

const PostPage = ({ post }) => {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default PostPage;
```
</li>
<li>
            <h3>React Server Components (RSC)</h3>
            <p><b>What are React Server Components (RSC)?</b></p>
            <p>React Server Components (RSC) is a new rendering model introduced by React to allow developers to render components entirely on the server and send the resulting HTML (and minimal JavaScript) to the client. The key advantage of RSC is the ability to minimize the amount of JavaScript sent to the client, reducing the bundle size, and improving performance.

RSC brings a hybrid approach where both server-side rendering (SSR) and client-side rendering (CSR) coexist, and it leverages the server to handle some of the logic that previously would be run on the client. This allows for improved performance, scalability, and the flexibility to offload resource-intensive tasks to the server.</p>
        </li>
    </ol>