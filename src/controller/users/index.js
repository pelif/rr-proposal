import express from 'express'
import newUser from './new'  
import find from './find'
import create from './create'
import update from './update'
import remove from './remove'

const router = express.Router()

router.get('/', find)
router.get('/new', newUser)

export default router