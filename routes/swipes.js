
import { Router } from 'express'
import * as swipesCtrl from '../controllers/outfits.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/', checkAuth, swipesCtrl.index)
router.get('/:swipeId', checkAuth, swipesCtrl.show)
router.post('/', checkAuth, swipesCtrl.create)
router.put('/:swipeId', checkAuth, swipesCtrl.update)

export { router }