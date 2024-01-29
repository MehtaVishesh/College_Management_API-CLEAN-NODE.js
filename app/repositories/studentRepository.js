const db = require('/Users/visheshmehta/Desktop/SOLID_CM/configs/databaseConfig.js');
const Student = require('/Users/visheshmehta/Desktop/SOLID_CM/models/studentModel.js');

const createStudent = async (fullname, dob, gender, className) => {
  return new Promise((resolve, reject) => {
    const student = new Student(null, fullname, dob, gender, className);
    const query = 'INSERT INTO students (name, dob, gender, class) VALUES (?, ?, ?, ?)';
    db.query(query, [student.fullname, student.dob, student.gender, student.className], (err, results) => {
      if (err) {
        reject(err);
      } else {
        const insertedStudent = new Student(results.insertId, student.fullname, student.dob, student.gender, student.className);
        resolve(insertedStudent);
      }
    });
  });
};

const getAllStudents = async () => {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM students';
    db.query(query, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

const updateStudent = async (studentId, fullname, dob, gender, className) => {
  return new Promise((resolve, reject) => {
    const query = 'UPDATE students SET name=?, dob=?, gender=?, class=? WHERE id=?';
    db.query(query, [fullname, dob, gender, className, studentId], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

const deleteStudent = async (studentId) => {
  return new Promise((resolve, reject) => {
    const query = 'DELETE FROM students WHERE id=?';
    db.query(query, [studentId], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

module.exports = {
  createStudent,
  getAllStudents,
  updateStudent,
  deleteStudent,
};
