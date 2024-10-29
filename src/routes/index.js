const express = require('express');
const routerUser = require('./router/user.router');
const routerTask = require('./router/task.router');
const { verifyJWT } = require('../utils/verifyJWT');
const router = express.Router();

// colocar las rutas aquí
router.use('/users', routerUser)
router.use('/tasks', verifyJWT,routerTask)


module.exports = router;