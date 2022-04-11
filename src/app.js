const express = require('express');

const app = express();

const getHelloWorld = () => 'Hello World update 2!!!';

app.get('/', (req, res) => {
  res.json({data: getHelloWorld()});
});

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
