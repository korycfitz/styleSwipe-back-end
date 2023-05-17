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
router.get('/:userId', checkAuth, profilesCtrl.jumppage)
router.get('/:userId/outfits', checkAuth, profilesCtrl.outfitIndex) // displays all user outfits
router.get('/:userId/outfits/:outfitId', checkAuth, profilesCtrl.outfitShow) //play 1 user ouitfit
router.get('/:userId/swipes', checkAuth, profilesCtrl.swipeIndex) // display all user swipes
router.get('/:userId/swipes/:swipeId', checkAuth, profilesCtrl.swipeShow) //display 1 user swipe
// router.put('/:userId/swipe/:swipeId'. checkAuth, profilesCtrl.swipeUpdate) //stretch

export { router }
