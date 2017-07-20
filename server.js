var cool = require('cool-ascii-faces');

const express = require('express');
const path = require('path');
const app = express();
const port = (process.env.PORT || 8080);

app.use(express.static(path.join(__dirname, 'dist')));
app.get('/cool', function(request, response) {
  response.send(cool());
});
// Listen for requests
const server = app.listen(port, () => {
  console.log(`Magic happens on port ${server.address().port}`);
});
