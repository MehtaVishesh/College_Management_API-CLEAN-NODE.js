const db = require('/Users/visheshmehta/Desktop/SOLID_CM/configs/databaseConfig.js');
const Course = require('/Users/visheshmehta/Desktop/SOLID_CM/models/courseModel.js');

const createCourse = async (course_name, duration, department) => {
    return new Promise((resolve, reject) => {
        const course = new Course(course_name, duration, department);
        const query = 'INSERT INTO courses (course_name, duration, department) VALUES (?,?,?)';
        db.query(query, [course.course_name, course.duration, course.department], (err, results) => {
            if(err) {
                reject(err);
            }else{
                const insertedCourse = new Course(results.insertId, course.course_name, course.duration, course.department);
                resolve(insertedCourse);
            }
        });
    });
};

const getAllCourses = async () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM courses', (err, results) => {
            if(err) {
                reject(err);
            }else{
                resolve(results);
            }
        });
    });
};

const updateCourse = async (courseId, course_name, duration, department) => {
    return new Promise((resolve, reject) => {
        const query = 'UPDATE courses SET course_name=?, duration=?, department=? WHERE id=?';
        db.query(query, [course_name, duration, department, courseId], (err, results) => {
            if(err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
};

const updateCoursePart = async (courseId, key, value) => {
    return new Promise((resolve, reject) => {
        const query = `UPDATE courses SET ${key}=? WHERE id=?`;
        db.query(query, [ value, courseId], (err, results) => {
            if(err) {
                reject(err);
            } else {
                resolve(results);
            }
        })
    });
};

const deleteCourse = async (courseId) => {
    return new Promise((resolve, reject) => {
        const query = "DELETE FROM courses WHERE id = ?";
        db.query(query, [courseId], (err, results) => {
            if(err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
};
module.exports = {
    createCourse,
    getAllCourses,
    updateCourse,
    deleteCourse,
    updateCoursePart
}