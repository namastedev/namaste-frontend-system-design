<h1>
    Notes on Performance and Network Optimization : <a href="https://heyashu.in/digital-garden/notes/front-end-design-system/how-to-do-network-optimization-in-web" target="_blank">Common Notes</a>
</h1>
<h2>Why CSS is called Render Blocking?</h2>
    <p>CSS is often referred to as "render-blocking" because it can delay the rendering of a webpage. Here’s a breakdown of why this happens:</p>
    <ol>
        <li>Critical Path Rendering: When a browser loads a webpage, it follows a critical path to render the page. This involves several steps, including downloading the HTML, parsing it, and then applying the CSS and JavaScript.</li>
        <li>CSS Blocks Rendering: During the critical path rendering, the browser needs to download and parse CSS files before it can render the page. This is because the browser needs to know the styles to apply to the HTML elements before it can correctly render them. If the CSS is not fully loaded and parsed, the browser will delay rendering the page until it is.</li>
        <li>Impact on Perceived Performance: Since the browser waits for the CSS to be fully loaded before displaying any content, it can create a delay that affects the perceived performance of the webpage. This delay can be more noticeable if the CSS files are large or if the network connection is slow.</li>
        <li>Optimization Techniques: To mitigate the render-blocking effect of CSS, developers often use techniques such as:
            <ul>
                <li><b>Inlining Critical CSS:</b>Embedding the essential CSS needed for the initial render directly in the HTML, so it loads immediately.</li>
                <li><b>Asynchronous Loading:</b>Using attributes like media or async to load non-critical CSS in a non-blocking way.</li>
                <li><b>CSS Minification:</b>Reducing the size of CSS files to speed up their download and parsing.</li>
            </ul>
        </li>
    </ol>
    <h2>Why JS is called Parsing Blocking?</h2>
    <p>JavaScript is often referred to as "parsing blocking" because it can interrupt the browser's process of parsing HTML and constructing the Document Object Model (DOM). Here’s why this happens:</p>
    <ol>
        <li><b>Execution Order:</b>When the browser encounters a SCRIPT tag, it must download, parse, and execute the JavaScript before it can continue parsing the rest of the HTML. This means that the construction of the DOM is paused until the JavaScript is fully processed.</li>
        <li><b>Potential for Document Manipulation:</b>JavaScript has the ability to modify the DOM and change the content of the webpage. To ensure the correct execution of these changes, the browser needs to stop parsing the HTML, execute the script, and then resume parsing. This prevents any inconsistencies or errors that might arise from parsing HTML while JavaScript is manipulating the DOM.</li>
        <li><b>Network Latency:</b>If the JavaScript file is large or the network connection is slow, the delay in downloading and executing the script can significantly impact the overall loading time of the webpage. During this time, the browser is essentially blocked from continuing to build the page.</li>
        <li><b>Blocking Scripts:</b>By default, SCRIPT tags block HTML parsing. This is especially true for scripts included in the head of the document or those that are not marked as asynchronous or deferred.</li>
        <li>To mitigate the parsing-blocking nature of JavaScript and improve webpage performance, developers often use the following techniques:
            <ul>
                <li><b>Asynchronous Loading:</b>Using the async attribute allows the script to be downloaded in parallel with the HTML parsing and executed as soon as it’s ready.</li>
                <li><b>Deferred Loading:</b>sing the defer attribute allows the script to be downloaded in parallel with HTML parsing but defers execution until the HTML parsing is complete.</li>
                <li><b>Loading Scripts at the End:</b>Placing script tags at the end of the body ensures that the HTML is fully parsed before the script is executed.</li>
            </ul>
        </li>
    </ol>
<h1>How can you Improve the Performance of Images?</h1>
<ul>
    <li>
        ChatGpt notes : <a href="https://chatgpt.com/share/6895b3f6-d8b0-8006-acd8-d324aeb53362" target="_blank">ChatGPT Notes</a>
    </li>
    <li>
        You can read from here as well : <a href="https://web.dev/learn/performance/image-performance" target="_blank">Docs</a>
    </li>
</ul>
<h1>Resource Hints and Preloading</h1>
<ul>
    <li>
        ChatGpt notes : <a href="https://chatgpt.com/share/6893b8bc-509c-8006-8275-7a6ca2a49db2" target="_blank">ChatGPT Notes</a>
    </li>
    <li>
        You can read from here as well : <a href="https://web.dev/learn/performance/resource-hints" target="_blank">Docs</a>
    </li>
</ul>
<h1>Compression and Minification</h1>
<ul>
    <li>
        ChatGpt notes : <a href="https://chatgpt.com/share/6893bbde-a8cc-8006-8405-e6f74ebc8a67" target="_blank">ChatGPT Notes</a>
    </li>
    <li>
        You can read from here as well : <a href="https://web.dev/learn/performance/general-html-performance#compression" target="_blank">Docs</a>
    </li>
</ul>