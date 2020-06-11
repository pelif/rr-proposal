import path from 'path'
import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import methodOverride from 'method-override'
import cors from 'cors' 
import passport from 'passport' 
import session from 'express-session' 
import mongoose from 'mongoose'

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(methodOverride('_method'))
app.use(session({
    secret: '!@#123qwe$%45ert', 
    resave: false, 
    saveUninitialized: true    
}))
app.use(passport.initialize())
app.use(passport.session())
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'src/view'))
app.use('/assets', express.static('src/assets'))

require('dotenv-safe').config()

let db = mongoose.connect(process.env.CONN, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongoose.Promise = global.Promise

require('./src/index')(app)

app.listen(3000, () => {
    console.log('App rr-proposal has been started...')
})