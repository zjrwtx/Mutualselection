const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.post('/assign-groups', adminController.assignGroups);

module.exports = router;
