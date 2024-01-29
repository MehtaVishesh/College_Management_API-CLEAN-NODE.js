const courseRepository = require('/Users/visheshmehta/Desktop/SOLID_CM/app/repositories/courseRepository.js');

const createCourse = async (course_name, duration, department) => {
    try {
        const result = await courseRepository.createCourse(course_name, duration, department);
        return 'Course created successfully';
    } catch (error) {
        throw error;
    }
};

const getAllCourses = async() => {
    try{
        const courses = await courseRepository.getAllCourses();
        return courses;
    } catch (error) {
        throw error;
    }
}

const updateCourse = async (courseId, course_name, duration, department) => {
    try{
        await courseRepository.updateCourse(courseId, course_name, duration, department);
        return 'Course updated successfully';
    } catch (error) {
        throw error;
    }
}

const updateCoursePart = async (courseId, key, value) => {
    try{
        await courseRepository.updateCoursePart(courseId, key, value);
        return 'Course updated successfully'
    } catch (error) {
        throw error;
    }
}

const deleteCourse = async (courseId) => {
    try{
        await courseRepository.deleteCourse(courseId);
        return 'Course deleted successfully';
    } catch (error) {
        throw error;
    }
}

module.exports = {
    createCourse,
    getAllCourses,
    updateCourse,
    deleteCourse,
    updateCoursePart
};


