const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

router.get('/teachers', studentController.getTeachers);
router.post('/confirm', studentController.confirmTeacherSelection);

module.exports = router;
