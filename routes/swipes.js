
import { Router } from 'express'
import * as swipesCtrl from '../controllers/outfits.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.post('/', checkAuth, swipesCtrl.create)

export { router }