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
  const _students = students;
  this.failedLimit = failedLimit;
  const studentsList = _students.slice();
  this.printStudentsList = function() {
    studentsList.forEach(element => console.log('name: ' + element.name + ', ' + 'email: ' + element.email ));
  }

}
