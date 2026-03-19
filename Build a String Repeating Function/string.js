function repeatStringNumTimes(str, num){

  let result = "";
  if(num < 1 ){
    return result;
  }
  for(let i =0; i < num;i++){
    result = result + str;
  }
  return result;
}