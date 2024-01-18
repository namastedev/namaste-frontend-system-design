const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Webhook endpoint
app.post("/webhook", (req, res) => {
  // Extract the payload from the incoming POST request
  const payload = req.body;

  // Log the received payload (you might want to process it in a more meaningful way)
  console.log("Received webhook payload:", payload);

  // Optionally, send a response to the sender to acknowledge receipt
  res.status(200).send("Webhook received successfully");
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
