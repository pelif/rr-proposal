import loginIndex from './controller/login/index'
import home from './controller/home/index'

module.exports  = (app) => {
    app.use('/login', loginIndex)
    app.use('/', home)
}