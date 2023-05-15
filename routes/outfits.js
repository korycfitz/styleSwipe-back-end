
import { Router } from 'express'
import * as outfitsCtrl from '../controllers/outfits.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/', checkAuth, outfitsCtrl.index)
router.post('/', checkAuth, outfitsCtrl.create)

export { router }