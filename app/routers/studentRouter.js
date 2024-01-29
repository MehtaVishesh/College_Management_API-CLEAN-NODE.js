// app/routes/studentRouter.js
const express = require('express');
const studentController = require('/Users/visheshmehta/Desktop/SOLID_CM/app/controllers/studentController.js');

const router = express.Router();

router.post('/create-students', studentController.createStudent);
router.get('/get-students', studentController.getAllStudents);
router.put('/update-students/:id', studentController.updateStudent);
router.delete('/delete-students/:id', studentController.deleteStudent);

module.exports = router;
