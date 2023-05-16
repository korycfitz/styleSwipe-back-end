import { Router } from 'express'
import * as swipesCtrl from '../controllers/swipes.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/', checkAuth, swipesCtrl.index)
router.get('/:swipeId', checkAuth, swipesCtrl.show)
//not using for now, but building out front end so usage
// router.put('/:swipeId', checkAuth, swipesCtrl.update)

export { router }