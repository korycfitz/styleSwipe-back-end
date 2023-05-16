import { Router } from 'express'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'
import * as profilesCtrl from '../controllers/profiles.js'
import * as outfitsCtrl from '../controllers/outfits.js'
import * as swipesCtrl from '../controllers/swipes.js'

const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/', checkAuth, profilesCtrl.index)
router.put('/:id/add-photo', checkAuth, profilesCtrl.addPhoto)
//new routes
// router.get('/:userId/outfits', checkAuth, profilesCtrl.index) //we already have a profilesController.index
// router.get('/:userId/outfits/:outfitId', checkAuth, profilesCtrl.show)
// router.get('/:userId/swipes', checkAuth, profilesCtrl.swipeIndex)
// router.get('/:userId/swipes/:swipeId', checkAuth, profilesCtrl.swipeShow)

export { router }
