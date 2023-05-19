import { Router } from 'express'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'
import * as profilesCtrl from '../controllers/profiles.js'
import * as outfitsCtrl from '../controllers/outfits.js'

const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
//most of these routers are currently not being used in the front end, but will be implemented in the front end
router.get('/', checkAuth, profilesCtrl.index)
router.put('/:id/add-photo', checkAuth, profilesCtrl.addPhoto)
router.get('/:userId', checkAuth, profilesCtrl.jumpPage)
router.get('/:userId/outfits', checkAuth, profilesCtrl.outfitIndex) 
router.put('/:userId/outfits/edit', checkAuth, outfitsCtrl.update)
router.get('/:userId/outfits', checkAuth, profilesCtrl.outfitShow)
router.get('/:userId/swipes', checkAuth, profilesCtrl.swipeIndex)
router.get('/:userId/swipes/:swipeId', checkAuth, profilesCtrl.swipeShow)
//Ice box. Not implementing now, but will implement 
// router.put('/:userId/swipe/:swipeId'. checkAuth, profilesCtrl.swipeUpdate) //stretch

export { router }
