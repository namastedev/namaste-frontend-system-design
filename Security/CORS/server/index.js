const express = require('express');
const app = express();
const cors = require('cors');

var allowedOrigin = ['http://127.0.0.1:5501'];
const corsOptions = {
  origin: function(origin, callback) {
    if (allowedOrigin.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('CORS error'));
    }
  }
}

app.use(cors(corsOptions));

app.get('/list', (req, res) => {
  res.send([{
    id: 1,
    title: 'Namaste Frontend System Design'
  }])
})

const port = process.env.PORT || 5010;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});