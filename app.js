const express = require('express');
const app = express();
const port = 3000;

app.get('/', (_, response) => {
  response.send("Hello World! This is Missy's Express app!");
});

app.listen(port, () => {
console.log(`Basic app listening on port ${port}`);
});