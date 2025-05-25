function getGrade(score) {
  if(score>=0 && score<=100 ){
    if(score<60){
      return 'F';
    }else if(score<70){
      return 'D';
    }else if (score<80){
      return 'C';
    }else if(score<90){
      return 'B';
    }else if(score<100){
      return 'A';
    }else if(score==100){
      return 'A++';
    }
  }else{return 'puntuacion fuera de rango 0-100'}
}