const port = 3000

const express = require('express')
const path = require('path')

const app = express();


let inMemoryData = {
    list: []
}

app.use("/", express.static("resume"))

app.get("/", (req, res) => {
    let filePath = path.join(__dirname, "index.html")
    console.log(filePath)
    res.sendFile(filePath)
})

app.get("/autobiografy", (req, res) => {
    let filePath = path.join(__dirname, "lichniy.html")
    console.log(filePath)
    res.sendFile(filePath)
})

app.get("/contactWithMe", (req, res) => {
    let filePath = path.join(__dirname, "contact.html")
    console.log(filePath)
    res.sendFile(filePath)
})

app.get("/studys", (req, res) => {
    let filePath = path.join(__dirname, "studys.html")
    console.log(filePath)
    res.sendFile(filePath)
})

app.get("/works", (req, res) => {
    let filePath = path.join(__dirname, "works.html")
    console.log(filePath)
    res.sendFile(filePath)
})

app.get("/interests", (req, res) => {
    let filePath = path.join(__dirname, "interests.html")
    console.log(filePath)
    res.sendFile(filePath)
})



app.get('/list', (req, res) => {
    res.send(inMemoryData.list)
})

app.post('/register', (req, res) => {
    console.log(req.body)
    inMemoryData.list.push(req.body)
    res.redirect('/list')
})



app.listen(port, () => {
    console.log(`Server is run port1:  ${port}`)
})