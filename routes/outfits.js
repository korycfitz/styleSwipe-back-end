import { Router } from 'express'
import * as outfitsCtrl from '../controllers/outfits.js'
//will be implementing when swipe funcitionality is implemented on front end 
// import * as swipesCtrl from '../controllers/swipes.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'
const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
//index page will automatically redirect to '/:outfitId'
router.get('/', checkAuth, outfitsCtrl.index) //works
router.get('/:outfitId', checkAuth, outfitsCtrl.show) //works
router.post('/', checkAuth, outfitsCtrl.create) //works
router.post('/', checkAuth, outfitsCtrl.createComment) //works
router.put('/:userId/comments', checkAuth, outfitsCtrl.update) //works
router.delete('/:outfitId', checkAuth, outfitsCtrl.delete)
//will be implementing when swipe funcitionality is implemented on front end 
// router.post('/:outfitId/swipes', checkAuth, swipesCtrl.create)
//will be implementing when delete comment functionality is availale on front end
// router.delete('/:outfitId/:commentId', checkAuth, outfitsCtrl.deleteComment)

export { router } 