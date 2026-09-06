<h1>
  Performance and Build Optimization Commom Notes : <a href="https://heyashu.in/digital-garden/notes/front-end-design-system/build-optimization-techniques" target="_blank">Common Notes</a>
</h1>
<h2>
  ChatGPT Notes : <a href="https://chatgpt.com/share/6893be11-05ec-8006-92d4-7e1144c62c85" target="_blank">ChatGPT Notes</a>
</h2>
<h2>Small Example of webpack bundler -:</h2>

// Create webpack.config.js file

<code>
module.exports = {
  entry: './src/index.js',  // entry point of the application
  output: {
    path: __dirname + '/dist',  // output directory
    filename: 'bundle.js'  // name of the bundled file
  },
  module: {
    rules: [
      {
        test: /\.js$/,  // use babel-loader for all JavaScript files
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,  // use css-loader and style-loader for CSS files
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};
</code>
<hr />

<h2>Optimization</h2>
<h3>Customer Experience</h3>
<ol>
<li>
<h4>Code Splitting</h4>
<p>
Code splitting is a technique used by bundlers to break down your code into smaller chunks or bundles, which can be loaded on demand. Instead of loading the entire JavaScript file upfront, code splitting allows the browser to load only the necessary parts of your application, improving performance, especially for large applications. This reduces initial load time and improves user experience by optimizing resource loading.</p>
<p>
How Bundle do Code-Splitting :-
<ol>
<li>
Entry Point Splitting (Multiple Entry Files): You can specify multiple entry points, and the bundler will create separate bundles for each entry. This method is useful when you have different parts of the site that are independent of each other, like an admin panel and a user-facing site.
<br />
<code>module.exports = {
  entry: {
    app: './src/app.js',
    admin: './src/admin.js'
  },
  output: {
    filename: '[name].bundle.js',  // 'app.bundle.js' and 'admin.bundle.js' will be created
    path: __dirname + '/dist'
  }
};</code>
</li>
<li>
Dynamic Imports (Lazy Loading): Dynamic imports allow you to load JavaScript modules asynchronously, meaning parts of your application are loaded only when needed. Most modern bundlers support dynamic imports through the import() function, which returns a Promise that resolves when the module is loaded.</li>
</ol>
</p>

</li>
<li>
<h4>Tree Shaking</h4>
<p>
Tree shaking is a powerful optimization technique used by modern JavaScript bundlers (like Webpack, Rollup, and Parcel) to remove unused or "dead" code from your final bundle. Its primary goal is to reduce the size of the JavaScript files sent to the browser by eliminating parts of the code that are never referenced or executed.</p>
<p>How Tree Shaking Works : <br />
Tree shaking relies on the static analysis of the code, particularly the ES6 (ES2015) module system (i.e., import and export). It determines which parts of the code are being used and which are not. Since ES6 modules are statically analyzable, the bundler can know at build time exactly which functions, variables, or classes are imported and used, allowing it to safely remove the unused parts.</p>
</li>
<li>
<h4>Minification</h4>
<p>It reduces the file size of JavaScript, CSS, and other assets by removing unnecessary whitespace, comments, and shortening variable names. This results in faster downloads and quicker execution times.</p>
<p>Terser is a popular JavaScript minifier used in modern bundlers like Webpack, Parcel, and Rollup. It is based on UglifyJS but with support for ES6+ syntax</p>
<p>CSSNano is a tool for minifying CSS. It removes unnecessary whitespace, comments, and redundant properties in CSS.</p>
</li>
</ol>

<h3>Dev Experinence</h3>
<ol>
<li>
<h4>Hot Module Replacement (HMR)</h4>
<p>Hot Module Replacement (HMR) is a feature commonly found in modern JavaScript bundlers (such as Webpack, Parcel, and Vite) that allows a web application to update modules in real-time without needing to perform a full page reload. This makes development more efficient by enabling live updates to specific modules (e.g., JavaScript, CSS) while preserving the state of the application.</p>
<p><b>How Hot Module Replacement Works</b>
HMR works by keeping the current state of the application and only replacing the updated module or parts of the code. The browser doesn't refresh entirely; instead, only the code that has changed is replaced dynamically. This leads to faster feedback and smoother development cycles.</p>
</li>
</ol>


