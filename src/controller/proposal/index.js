import express from 'express'
import newProposal from './new'
import find from './find'
import findone from './findone'
import create from './create'
import update from './update'
import remove from './remove'
import isAuth from './../../auth/middleware'

const router = express.Router()

module.exports = (app, passport) => {
    router.get('/', isAuth, find)
    router.get('/new', isAuth, newProposal)
    router.post('/create', isAuth, create)
    router.get('/view/:id', isAuth, findone)
    router.delete('/:id', isAuth, remove)

    return router
}

