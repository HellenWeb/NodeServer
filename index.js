
// Подгружаем модули

const chalk = require("chalk")
const path = require("path")
const fs = require("fs")
const http = require("http")

// Start Coding

// Creating server

let server = http.createServer();

// Making a request for url

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

    // Making variable for Error

    let file = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url)

    // Making variable for Error

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

// Deduce message in terminal at including server

server.listen(3000, () => {
    console.log(chalk.green('Server is working!!!'))
})

