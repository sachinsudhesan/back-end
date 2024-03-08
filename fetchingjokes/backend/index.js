require('dotenv').config()
const express = require('express')
var cors = require('cors')
const app = express()
app.use(cors())
const port = process.env.PORT

app.get('/api/jokes',(req,res) => {
    const jokes = [{
        id:1,
        title : "first joke",
        content : "this is the first joke"
    },
    {
        id:2,
        title : "second joke",
        content : "this is the second joke"
    },
    {
        id:3,
        title : "third joke",
        content : "this is the third joke"
    }];
    res.send(jokes)
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})