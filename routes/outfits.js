
import { Router } from 'express'
import * as outfitsCtrl from '../controllers/outfits.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
//index page will automatically redirect to '/:outfitId'
router.get('/', checkAuth, outfitsCtrl.index) 
router.get('/:outfitId', checkAuth, outfitsCtrl.show)
router.post('/', checkAuth, outfitsCtrl.create)

export { router }