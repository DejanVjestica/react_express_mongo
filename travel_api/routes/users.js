const express = require('express');
const router = express.Router();
const db = require('../models');
const helpers = require('../helpers/users')

router.route('/').get(helpers.getUsers).post(helpers.createUser);
router.route('/autenticate').post(helpers.authenticateUser);

router.route('/:userId').get(helpers.getUsers).put(helpers.updateUser).delete(helpers.deleteUser);

module.exports = router;