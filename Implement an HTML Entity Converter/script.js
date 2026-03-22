function convertHTML(str){
  const enti = {
      "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  }
  let result = "";

  for(let char of str){
    if(enti[char]){
      result = result + enti[char]
    }else{
      result = result + char;
    }
  }
  return result;
}
console.log( convertHTML("Dolce & Gabbana"));

