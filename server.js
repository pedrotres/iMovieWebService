const express = require('express')
const app = express()
const bodyParser = require("body-parser")
const morgan = require('morgan')
const cors = require('cors')
const homeData = require('./data.json')

app.use(bodyParser.urlencoded({limit: '5mb', extended: false }))
app.use(bodyParser.json({limit: '5mb'}))
app.use(cors());
app.use(morgan('dev'))

app.listen(process.env.PORT || 8080, (error) => {
    if (error) throw error
    console.log('Server running in http://127.0.0.1:8080')
})

app.get('/', (req, res) => {
    res.send('Hosting Successfully!')
})

app.get('/movies', (req, res) => {
    res.status(200).json({ home: homeData })
})