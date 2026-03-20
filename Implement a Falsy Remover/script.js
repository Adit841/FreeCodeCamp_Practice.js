function bouncer(str){
  const result = [];
  for(let i = 0; i < str.length; i++){
    if(str[i]){
       result.push(str[i]);
    }
  }
  return result;
}