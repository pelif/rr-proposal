import express from 'express' 
import login from './login'
import logout from './logout'

const router = express.Router()

module.exports = (passport) => {
    router.get('/', login)
    router.post('/find', passport.authenticate('local-signin', {
        successRedirect: '/', 
        failureFlash: '/login?msg=2'
    }))    
    router.get('/logout', logout)

    return router
}



