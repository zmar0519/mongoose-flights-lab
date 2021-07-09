import { Router } from 'express'
const router = Router()

import * as flightCtrl from '../controllers/flights.js'

/* GET users listing. */
router.get('/new', flightCtrl.new)
router.post('/', flightCtrl.create)
router.get('/', flightCtrl.index)


export {
  router
}
