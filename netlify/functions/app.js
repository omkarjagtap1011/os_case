const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 3000;

// Set up middleware
app.use(bodyParser.json());

// Serve the HTML file at the root URL
app.get('/', (req, res) => {
  // Read the index.html file and send it as a response
  fs.readFile('index.html', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading index.html:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.send(data);
    }
  });
});

// Start the Express app
const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
