import loginIndex from './controller/login/index'
import home from './controller/home/index'
import users from './controller/users/index'
import proposal from './controller/proposal/index'

module.exports  = (app) => {
    app.use('/login', loginIndex)
    app.use('/', home)
    app.use('/users', users)
}