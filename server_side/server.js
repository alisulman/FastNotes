import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import routes from './routers/route.js'
import dbConfig from './config/config.js'

const app = express()
dotenv.config()

const port = process.env.PORT || 3200

app.use(morgan("dev"))
app.use(express.json())
app.use('/api', routes)

app.listen(port, () => {
    console.log(`The express is running on http://localhost:${port}`)
})

dbConfig()