// app/services/studentService.js
const studentRepository = require('/Users/visheshmehta/Desktop/SOLID_CM/app/repositories/studentRepository.js');

const createStudent = async (fullname, dob, gender, className) => {
  try {
    const result = await studentRepository.createStudent(fullname, dob, gender, className);
    return 'Student created successfully';
  } catch (error) {
    throw error;
  }
};

const getAllStudents = async () => {
  try {
    const students = await studentRepository.getAllStudents();
    return students;
  } catch (error) {
    throw error;
  }
};

const updateStudent = async (studentId, fullname, dob, gender, className) => {
  try {
    await studentRepository.updateStudent(studentId, fullname, dob, gender, className);
    return 'Student updated successful';
  } catch (error) {
    throw error;
  }
};

const deleteStudent = async (studentId) => {
  try {
    await studentRepository.deleteStudent(studentId);
    return 'Student deleted successfully';
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createStudent,
  getAllStudents,
  updateStudent,
  deleteStudent,
};
