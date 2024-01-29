// models/studentModel.js
class Student {
  constructor(studentId, fullname, dob, gender, className) {
    this.studentId = studentId;
    this.fullname = fullname;
    this.dob = dob;
    this.gender = gender;
    this.className = className;
  }
}

module.exports = Student;
