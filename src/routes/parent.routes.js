const Router = require('express');
const router = Router();
const { loginParent, registerParent } = require('../controllers/parent.controller');



router.route('/login').post(
    loginParent
)

router.route('/register').post(
    registerParent
)


module.exports = router;