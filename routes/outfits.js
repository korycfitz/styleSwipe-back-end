import { Router } from 'express'
import * as outfitsCtrl from '../controllers/outfits.js'
import * as swipesCtrl from '../controllers/swipes.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'
const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
//index page will automatically redirect to '/:outfitId'
router.get('/', checkAuth, outfitsCtrl.index) //works
router.get('/', checkAuth, outfitsCtrl.show) //works
router.post('/new', checkAuth, outfitsCtrl.create) //works
router.post('/:outfitId/swipes', checkAuth, swipesCtrl.create)
router.post('/', checkAuth, outfitsCtrl.createComment) //works
router.delete('/:outfitId', checkAuth, outfitsCtrl.delete)
router.delete('/:outfitId/:commentId', checkAuth, outfitsCtrl.deleteComment)

export { router } 