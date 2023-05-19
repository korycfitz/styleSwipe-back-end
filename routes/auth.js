import { Router } from 'express'
//will use check auth in the router on line 14 as an icebox goal, so that is why it is being imported here.
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'
import * as authCtrl from '../controllers/auth.js'

const router = Router()

/*---------- Public Routes ----------*/
router.post('/signup', authCtrl.signup)
router.post('/login', authCtrl.login)

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
//will implement change password functionality. This route is for future use when front end gets implemented.
// router.post('/change-password', checkAuth, authCtrl.changePassword)

export { router }
