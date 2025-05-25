function hasPassingGrade(score) {
  if(getGrade(score)!=''){
    if(getGrade(score)==='F'){
      return false;
    } else return true;
  }
}