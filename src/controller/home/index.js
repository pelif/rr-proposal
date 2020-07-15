import express from 'express'
import home from './home'

const router = express.Router()

module.exports = (req, res, passport) => {
    router.get('/', home)

    return router
}
