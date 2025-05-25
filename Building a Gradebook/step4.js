function studentMsg(totalScores, studentScore) {
  if(hasPassingGrade(studentScore)){
    return `Class average: ${getAverage(totalScores)}. Your grade: ${getGrade(studentScore)}. You passed the course.`;
  }else return `Class average: ${getAverage(totalScores)}. Your grade: ${getGrade(studentScore)}. You failed the course.`;
}