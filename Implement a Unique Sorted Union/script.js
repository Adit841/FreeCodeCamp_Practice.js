function uniteUnique(...args){
  let result = [];

  for(let arr of args){
    for(let value of arr){
      if(!result.includes(value)){
        result.push(value);
      }
    }
  }
  return result;
}