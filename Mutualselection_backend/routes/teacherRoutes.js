const express = require('express');
const router = express.Router();
const teacherController = require('../controllers/teacherController');

router.post('/confirm', teacherController.confirmStudentSelection);

module.exports = router;
