import express from 'express'
import newUser from './new'  
import find from './find'
import create from './create'
import update from './update'
import remove from './remove'
import passport from 'passport'

const router = express.Router()

module.exports = (app, passport) => {
    router.get('/', find)
    router.get('/new', newUser)
    router.post('/create', create)
    router.delete('/:id', remove)

    return router
}


