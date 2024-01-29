const courseService = require('/Users/visheshmehta/Desktop/SOLID_CM/app/services/courseService.js');

async function createCourse(req, res) {
    try {
        const { course_name, duration, department } = req.body;
        const result = await courseService.createCourse(course_name, duration, department);
        res.status(201).send(result);
    } catch (error) {
        console.error('Error creating course:', error);
        res.status(500).send('Error creating course');
    }
}

async function getAllCourses(req, res) {
    try {
        const courses = await courseService.getAllCourses();
        res.status(200).json(courses);
    } catch (error) {
        console.log('Error fetching students:', error);
        res.status(500).send('Error fetching students');
    }
}

async function updateCourse(req, res) {
    try {
        const courseId = req.params.id;
        const { course_name, duration, department } = req.body;
        await courseService.updateCourse(courseId, course_name, duration, department);
        res.status(200).send("Course updated successfully");
    }catch (error){
        console.error('Error updating course:', error);
        res.status(500).send('Error updating course');
    }
}

async function updateCoursePart(req, res) {
    try{
        const courseId = req.params.id
        const { key, value } = req.body;
        await courseService.updateCoursePart(courseId, key, value);
        res.status(200).send("Course updated successfully");
    } catch (error) {
        console.error("Error updating course")
        res.status(500).send("Error updating course")
    }
}

async function deleteCourse(req, res) {
    try{ 
        const courseId = req.params.id
        await courseService.deleteCourse(courseId);
        res.status(200).send("Course deleted successfully");
    }catch (error) {
        console.error('Error deleting course:', error);
        res.status(500).send('Error deleting course')
    }
}

module.exports = {
    createCourse,
    getAllCourses,
    updateCourse,
    deleteCourse,
    updateCoursePart
};