const express = require('express');
const app = express();
const port = 5050;

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/main.html');
});

// app.use(express.static('public'));
app.use(express.static(__dirname));
app.listen(port, function () {
  console.log(`start! express server on port ${port}`);
});
