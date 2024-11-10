const express = require('express')
const cors = require('cors')
const session = require('express-session')

const app = express()

app.use(cors({
    // origin: process.env.CORS_ORIGIN,
    credentials: true    
}))
app.use(express.json()) 
app.use(express.urlencoded({ extended: true })) 
app.use(express.static('public')) 
app.use(session({
    secret: process.env.SESSION_SECRET || 'mySecret', 
    resave: false,
    saveUninitialized: true,
}));


// routes import
const parentRouter = require('./src/routes/parent.routes')
const driverRouter = require('./src/routes/driver.routes')
const schoolRouter = require('./src/routes/school.routes')


//routes declaration
app.use('/api/v1/parents', parentRouter)
// app.use('/api/v1/drivers', driverRouter)
// app.use('/api/v1/schools', schoolRouter)



module.exports = {app}