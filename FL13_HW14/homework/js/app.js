function Student(name, email) {
  let _name = name;
  let _email = email;
  const homeworkResults = [];
  let _homeworkResults = homeworkResults;

  this.getName = function() {
    return _name;
  };
  this.getEmail = function() {
    return _email;
  };
  this.addHomeworkResult = function(topic, success) {
    if (typeof success === 'boolean') {
      homeworkResults.push({
        topic,
        success
      });
    }
  }
  this.getHomeworkResults = function() {
    return _homeworkResults;
  };
}

function FrontendLab(students, failedLimit) {
  this.failedLimit = failedLimit;
  const studentsList = students.map((student) => {
    return new Student(student.name, student.email);
  });
  this.printStudentsList = function() {
    studentsList.forEach(element => console.log(element.getName(), element.getEmail()));
  }
}
