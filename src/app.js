const express = require('express');
const {getHelloWorld} = require('./hello');

const app = express();

app.get('/', (req, res) => {
  res.json({data: getHelloWorld()});
});

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
