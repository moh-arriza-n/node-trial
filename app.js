const http = require('http')

http.createServer(function(req,res){
res.writeHead(200,{
"COntent-Type": "text/html"
});
res.end("Hello World !");
}).listen(8000);
console.log('server berjalan pada port 8000');
