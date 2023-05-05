const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000

app.use(cors())
const chefData = require('./data/chefdata.json')

app.get('/', (req, res) => {
    res.send('Hello World!')
})



app.get('/chefdata', (req, res) => {
    res.send(chefData)
})

app.get('/chefdata/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const singleData = chefData.find(chef => parseInt(chef.id) === id);
    res.send(singleData);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})