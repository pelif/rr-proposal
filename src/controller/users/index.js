import express from 'express'
import newUser from './new'  
import find from './find'
import create from './create'
import remove from './remove'
import passport from 'passport'
import isAuth from './../../auth/middleware'

const router = express.Router()

module.exports = (app, passport) => {
    router.get('/', isAuth, find)
    router.get('/new', isAuth, newUser)
    router.post('/create', isAuth, create)
    router.delete('/:id', isAuth, remove)

    return router
}


