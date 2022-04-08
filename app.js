const express = require('express');

const app = express();
app.get('/', (req, res) => {
	res.json({ data: 'Hello World updated!!' });
});

const PORT = 4000;

app.listen(PORT, () => {
	console.log(`Listening to port ${PORT}`);
});