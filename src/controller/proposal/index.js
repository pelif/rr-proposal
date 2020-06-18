import express from 'express'
import newProposal from './new'
import find from './find'
import create from './create'
import update from './update'
import remove from './remove'

const router = express.Router()

router.get('/new', newProposal)
router.post('/create', create)

export default router