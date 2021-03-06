var path = require('path');
var express = require('express');

var app = express();

var staticPath = path.join(__dirname, '');
app.use(express.static(staticPath));

app.listen(process.env.PORT || 3000, function() {
  console.log('listening');
});