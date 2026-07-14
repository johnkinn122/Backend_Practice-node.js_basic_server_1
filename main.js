//1. step 1: get the http module
//it help us to create a server
const http = require('http');

//2. step 2: create a server 
// sa bawat request. Ang function sa loob ay HINDI pa tumatakbo ngayon —
// nire-record lang ito. Tatakbo lang ito MAMAYA, tuwing may humihiling.
 const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('hello this is my first node js server');
});

//3. step 3: listen to the server on port 3000
// aling "pinto" ng makina ang gagamitin
const PORT = 3000;
server.listen(PORT,() => {
    console.log(`Server running on port http://localhost:${PORT}`);  
});

