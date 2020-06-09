import express from 'express' 
import login from './login'
import find from './find'

const router = express.Router()

router.get('/', login)
// router.post('/', find)

export default router