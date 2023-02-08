const express = require('express');
const path = require('path');
const app = express();
const port = 4000
app.get('/', (request, response) => {
  return response.send('OK');
});
app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});