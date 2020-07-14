import express from 'express'
import newProposal from './new'
import find from './find'
import findone from './findone'
import create from './create'
import update from './update'
import remove from './remove'

const router = express.Router()

router.get('/', find)
router.get('/new', newProposal)
router.post('/create', create)
router.get('/view/:id', findone)
router.delete('/:id', remove)

export default router