const http = require('http')
const fs = require('fs')
const homePage = fs.readFileSync('index.html')
const aboutPage = fs.readFileSync('about.html')
const contactPage = fs.readFileSync('contact.html')
const notFoundPage = fs.readFileSync('notfound.html')

// Lim, Greg. Beginning Node.js, Express & MongoDB Development (p. 16). Kindle Edition. 
const server = http.createServer((req, res) => {
    console.log(req.url)
    if (req.url === '/about')
        res.end(aboutPage)
    else if (req.url === '/contact')
        res.end(contactPage)
    else if (req.url === '/')
        res.end(homePage)
    else {
        res.writeHead(404)
        res.end(notFoundPage)
    }

    // Lim, Greg. Beginning Node.js, Express & MongoDB Development (p. 13). Kindle Edition. 
})

console.log("Server started on http://localhost:3000")
server.listen(3000)

// Lim, Greg. Beginning Node.js, Express & MongoDB Development (p. 11). Kindle Edition. 