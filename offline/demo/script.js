// Check if service worker is supported by our browser
if (navigator.serviceWorker) {
  // Register the service worker

  navigator.serviceWorker
  // register the service worker file, and pass the scope, where scope will tell the browser where the service worker is active
  // In this case, the service worker is active in the root directory
    .register("./sw.js", {
      scope: "./",
    })
    .then((res) => {
      console.log("Service worker registered successfully", res);
    })
    .catch((err) => {
      console.log("Error registering service worker", err);
    });
}
