import { Router } from 'express'
import * as outfitsCtrl from '../controllers/outfits.js'
//will be implementing when swipe funcitionality is implemented on front end 
// import * as swipesCtrl from '../controllers/swipes.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'
const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/', checkAuth, outfitsCtrl.index)
router.get('/:outfitId', checkAuth, outfitsCtrl.show) 
router.post('/', checkAuth, outfitsCtrl.create) 
router.post('/:outfitId/comments', checkAuth, outfitsCtrl.createComment) 
router.put('/:outfitId', checkAuth, outfitsCtrl.update) 
router.delete('/:outfitId', checkAuth, outfitsCtrl.delete)
//will be implementing when swipe funcitionality is implemented on front end 
// router.post('/:outfitId/swipes', checkAuth, swipesCtrl.create)
//will be implementing when delete comment functionality is availale on front end
// router.delete('/:outfitId/:commentId', checkAuth, outfitsCtrl.deleteComment)

export { router } 