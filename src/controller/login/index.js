import express from 'express' 
import login from './login'
import find from './find'

const router = express.Router()

module.exports = (passport) => {
    router.get('/', login)
    router.post('/find', passport.authenticate('local-signin', {
        successRedirect: '/', 
        failureFlash: '/login?msg=2'
    }))    

    return router
}



