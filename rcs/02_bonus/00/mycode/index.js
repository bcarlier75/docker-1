var express = require('express');
var app = express();

app.get('/', (req, res) => { 
	res.send('Homepage of Benjamin Carlier, yo !.');
});

app.get('/myfirstpage', (req, res) => { 
	  res.send('Simple first page, quite cool');
});

app.listen(3000, () => console.log('Listening on port 3000'));

