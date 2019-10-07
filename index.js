const static = require('node-static');
let file = new static.Server();

require('http').createServer(function(req, res) {
    req.addListener('end', function() {
        file.serve(req, res);
    }).resume();
}).listen(process.env.PORT || 8000);