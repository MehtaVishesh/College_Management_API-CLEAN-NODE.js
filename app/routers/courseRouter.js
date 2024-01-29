const express = require('express');
const courseController = require('/Users/visheshmehta/Desktop/SOLID_CM/app/controllers/courseController.js');

const router = express.Router();

router.post('/create-course', courseController.createCourse);
router.get('/get-courses', courseController.getAllCourses);
router.put('/update-course/:id', courseController.updateCourse);
router.delete('/delete-course/:id', courseController.deleteCourse);
router.patch('/update-course-part/:id', courseController.updateCoursePart)

module.exports = router;