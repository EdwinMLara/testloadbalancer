const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from Ubuntu EC2! Prueba final perra');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});