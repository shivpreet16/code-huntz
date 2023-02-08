const errorHandler = require('./middleware/error-handler.js')
const notFound = require('./middleware/notFound.js')


const bodyParser = require("body-parser")

const express = require("express")
const app = express()


const PORT=3000

app.use(bodyParser.json());

app.get('/',(req, res)=>{
    res.send('Code huntz')
})

const apiRouter = require('./routes/api')

app.use('/api', apiRouter)

app.use(notFound)
app.use(errorHandler)

app.listen(PORT)