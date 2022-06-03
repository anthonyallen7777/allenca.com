const functions = require('firebase-functions');
const express = require('express');

const app = express();
app.use(express.static(__dirname + '/public'));

app.get('/', async (req, res) => {
	res.sendFile('index.html');
});

app.get('/projects', function (req, res) {
    res.sendFile(__dirname+'/public/projects.html');
});

app.get('*', function (req, res) {
    res.sendFile(__dirname+'/public/404.html');
});

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).sendFile(__dirname+'/public/404.html');
});

exports.app = functions.https.onRequest(app);