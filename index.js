
// Подгружаем модули

const chalk = require("chalk")
const path = require("path")
const fs = require("fs")
const http = require("http")

// Start Coding

let server = http.createServer();

server.on('request', (req, res) => {
    if (req.url === '/') {
        fs.readFile(path.join(__dirname, 'public/Home', 'index.html'), (err, data) => {
            if (err) {
                throw err
            }
            res.writeHead(200, {
                'Content-type':'text/html'
            })
            res.end(data)
        })
    } else if (req.url === "/contact") {
        fs.readFile(path.join(__dirname, 'public/Contact', 'index.html'), (err, data) => {
            if (err) {
                throw err
            }
            res.writeHead(200, {
                'Content-type':'text/html'
            })
            res.end(data)
        })
    } else if (req.url === '/aboutme') {
        fs.readFile(path.join(__dirname, 'public/AboutMe', 'index.html'), (err, data) => {
            if (err) {
                throw err
            }
            res.writeHead(200, {
                'Content-type':'text/html'
            })
            res.end(data)
        })
    }

    let file = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url)

    fs.readFile(file, (err, data) => {
        if (err) {
            fs.readFile(path.join(__dirname, 'public/Error', 'index.html'), (err, data) => {
                if (err) {
                    throw err
                }
                res.writeHead(200, {
                    'Content-type':'text/html'
                })
                res.end(data)
            })
        }
    })
});

server.listen(3000, () => {
    console.log(chalk.green('Server is working...'))
})

