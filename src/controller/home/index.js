import express from 'express'
import home from './home'
import isAuth from './../../auth/middleware'

const router = express.Router()

module.exports = (req, res, passport) => {
    router.get('/', isAuth, home)

    return router
}
