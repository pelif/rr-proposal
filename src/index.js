import loginIndex from './controller/login/index'

module.exports  = (app) => {
    app.use('/login', loginIndex)
}