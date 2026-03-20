function getAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

function getGrade(score) {
  if (score === 100) return "A+";
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";
  return "F";
}

function hasPassingGrade(score) {
  let grade = getGrade(score);
  return grade !== "F";
}

function studentMsg(scores, studentScore) {
  let avg = getAverage(scores);
  let grade = getGrade(studentScore);
  let passed = hasPassingGrade(studentScore);

  if (passed) {
    return `Class average: ${avg}. Your grade: ${grade}. You passed the course.`;
  } else {
    return `Class average: ${avg}. Your grade: ${grade}. You failed the course.`;
  }
}