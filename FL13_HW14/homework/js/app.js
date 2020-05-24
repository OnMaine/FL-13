function Student(name, email) {
  let _name = name;
  let _email = email;
  const homeworkResults = [];
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
    return homeworkResults;
  };
}

function FrontendLab(students, failedLimit) {
  let failedHomeworksLimit = failedLimit;
  const studentsList = students.map((student) => {
    return new Student(student.name, student.email);
  });
  this.printStudentsList = function() {
    studentsList.forEach(student => {
    return console.log(`name: ${student.getName()}, email: ${student.getEmail()}`, student.getHomeworkResults())
  });
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
  this.printStudentsEligibleForTest = function() {
    studentsList.forEach(student => {
      let studentResults = student.getHomeworkResults();
      let counter = 0;
      studentResults.forEach(result => {
        if (!result.success) {
          counter++;
        }
      })

      if (counter <= failedHomeworksLimit) {
        console.log(student.getName(), student.getEmail());
      }
    })
  }
}
