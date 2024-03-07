require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT 

app.get('/',(req,res) => {
    res.send('hello world')
})
app.get('/sachin',(req,res) => {
    res.send('hello sachin')
})

app.listen(port,() => {
    console.log((`app listening on port:${port}`));
})