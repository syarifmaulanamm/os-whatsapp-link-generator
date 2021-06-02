const http = require('http');
const fs = require('fs');

fs.readFile('./index.html', function ( err, html ) {
    if ( err ) {
        throw err;
    }
    
    http.createServer( function ( req, res ) {
        console.log('Server Up');
        res.writeHead(200, { "Content-Type" : "text/html"});
        res.write(html);
        res.end();
    }).listen(80);
});
