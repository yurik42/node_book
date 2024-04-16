const http = require('http')
const server = http.createServer((req, res) => {
    console.log(req.url)
    res.end('Hello Node.js')
})

server.listen(3000)

// Lim, Greg. Beginning Node.js, Express & MongoDB Development (p. 11). Kindle Edition. 