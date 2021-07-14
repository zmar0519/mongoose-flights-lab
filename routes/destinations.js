import { Router } from 'express'
const router = Router()

import * as destinationCtrl from '../controllers/destinations.js'

router.get('/new', destinationCtrl.new)
router.post('/', destinationCtrl.create)

export {
    router
}