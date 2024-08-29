//Aufgabe a
const studentGrades = [
  {name: 'Joe', grade: 88},
  {name: 'Jen', grade: 94},
  {name: 'Steph', grade: 77},
  {name: 'Allen', grade: 60},
  {name: 'Gina', grade: 54},
  {name: 'Adrian', grade: 98}
];

const createFeedback = (name) => (grade) => {
  let letterGrade;
  if (grade >= 90) {
      letterGrade = 'a';
  } else if (grade >= 80) {
      letterGrade = 'b';
  } else if (grade >= 70) {
      letterGrade = 'c';
  } else if (grade >= 60) {
      letterGrade = 'd';
  } else {
      letterGrade = 'f';
  }

  if (letterGrade === 'f') {
      return `Not good ${name}, you got an ${letterGrade}`;
  } else if (letterGrade === 'd') {
      return `What happened ${name}, you got an ${letterGrade}`;
  } else if (letterGrade === 'c') {
      return `Well done ${name}, you got an ${letterGrade}`;
  } else if (letterGrade === 'b') {
      return `Nice Job ${name}, you got an ${letterGrade}`;
  } else {
      return `Excellent Job ${name}, you got an ${letterGrade}`;
  }
};
const studentFeedback = studentGrades.map(student => createFeedback(student.name)(student.grade));
console.log(studentFeedback);

//Aufgabe b
const R = require('ramda');
const names = ["Adrian", "jasaroska", "Adi"];
const addPrefix = R.curry((prefix, name) => `${prefix} ${name}`);
const friends = names.map(addPrefix("Friend:"));
console.log(friends);

//Aufgabe c
let Length = 0;
function impureGetLength(arr) {
    Length = arr.length;  // Diese Zeile verändert einen globalen Zustand
    return arr.length;
}
const Guys = ["Adrian", "jasaroska", "Adi"];
console.log(impureGetLength(Guys)); 
console.log(Length);  

function pureGetLength(arr) {
  return arr.length;
}

const namesPure = ["Adrian", "jasaroska", "Adi"];
console.log(pureGetLength(namesPure));  // Output: 3
