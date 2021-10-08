var express = require('express');
var router = express.Router();
const userController = require('../controllers/AuthController')
/* POST users listing. */
router.post('/register',userController.register);






module.exports = router;
