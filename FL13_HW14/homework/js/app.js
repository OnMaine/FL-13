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
    homeworkResults.push({
      topic,
      success
    });
  }
  this.getHomeworkResults = function() {
    return _homeworkResults;
  };
}

function FrontendLab(students, failedLimit) {
  this.failedHomeworksLimit = failedLimit;
  const studentsList = students.map((student) => {
    return new Student(student.name, student.email);
  });
  this.printStudentsList = function() {
    studentsList.forEach(element => console.log('name: ' + element.getName() + ', ' + 'email: ' + element.getEmail(),
      element.getHomeworkResults()));
  };
  this.printStudentsListTest = function() {
    studentsList.forEach(element => console.log(element));
  };
  this.addHomeworkResults = function(homeworkResult) {
    let topicName = homeworkResult.topic;
    let studentsResultsTopic = homeworkResult.results;
    studentsResultsTopic.forEach(resultInHomeworks => {
      let email = resultInHomeworks.email;
      studentsList.forEach(student => {
        if (student.getEmail() === email) {
          student.addHomeworkResult(topicName, resultInHomeworks.success)
        }
      });
    });
  };
}
