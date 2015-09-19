var grades = [100, 50, 75];

console.log(grades[1]);

grades.push(97);

grades.forEach(function(grade) {
  console.log(grade);
});

console.log(grades.length);

// Challenge
var totalGrade = 0;

grades.forEach(function(grade) {
  totalGrade += grade;
});

console.log('Your average grade is ' + totalGrade/grades.length);

