const studentService = require('/Users/visheshmehta/Desktop/SOLID_CM/app/services/studentService.js');

async function createStudent(req, res) {
  try {
    const { fullname, dob, gender, className } = req.body;
    const result = await studentService.createStudent(fullname, dob, gender, className);
    res.status(201).send(result);
  } catch (error) {
    console.error('Error creating student:', error);
    res.status(500).send('Error creating student');
  }
}

async function getAllStudents(req, res) {
  try {
    const students = await studentService.getAllStudents();
    res.status(200).json(students);
  } catch (error) {
    console.error('Error fetching students:', error);
    res.status(500).send('Error fetching students');
  }
}

async function updateStudent(req, res) {
  try {
    const studentId = req.params.id;
    const { fullname, dob, gender, className } = req.body;
    await studentService.updateStudent(studentId, fullname, dob, gender, className);
    res.status(200).send('Student updated successfully');
  } catch (error) {
    console.error('Error updating student:', error);
    res.status(500).send('Error updating student');
  }
}

async function deleteStudent(req, res) {
  try {
    const studentId = req.params.id;
    await studentService.deleteStudent(studentId);
    res.status(200).send('Student deleted successfully');
  } catch (error) {
    console.error('Error deleting student:', error);
    res.status(500).send('Error deleting student');
  }
}

module.exports = {
  createStudent,
  getAllStudents,
  updateStudent,
  deleteStudent,
};
