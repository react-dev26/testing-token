const express = require('express');
const path = require('path');
const app = express();
const port = (process.env.PORT || 8080);

app.use(express.static(path.join(__dirname, 'dist')));
// Listen for requests
const server = app.listen(port, () => {
  console.log(`Magic happens on port ${server.address().port}`);
});
