const express = require('express')
const app = express()
app.get('/', (req, res) => {
    res.status(200).send("Working")
})
app.listen(3002, () => {
    console.log('Executing')
})