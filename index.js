const http = require('http')
const server = http.createServer((req, res) => {
    console.log(req.url)
    if (req.url === '/about')
        res.end('The about page')
    else if (req.url === '/contact')
        res.end('The contact page')
    else if (req.url === '/')
        res.end('The home page')
    else {
        res.writeHead(404)
        res.end('page not found')
    }

    // Lim, Greg. Beginning Node.js, Express & MongoDB Development (p. 13). Kindle Edition. 
})

server.listen(3000)

// Lim, Greg. Beginning Node.js, Express & MongoDB Development (p. 11). Kindle Edition. 