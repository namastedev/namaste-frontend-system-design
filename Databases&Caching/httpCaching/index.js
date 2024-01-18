const express = require('express');
const path = require('path');
const app = express();

app.use((req, res, next) => {
  // res.setHeader('Cache-Control', 'public, max-age=86400');
  // res.setHeader('Expires', 'Sat, 23 Dec 2023 11:20:39 GMT')
  next();
})

app.use(express.static(path.join(__dirname, 'public'), {
  etag: true,
  cacheControl: false,
  lastModified: true
}));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
