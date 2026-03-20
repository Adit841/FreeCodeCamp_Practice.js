function titleCase(str){
  let words = str.split(' ');
  let result = [];
  for(let i = 0; i < words.length; i++){
    let word = words[i].toLowerCase();
    let newWord = word[0].toUpperCase() + word.slice(1);
    result.push(newWord);
  }
  return result.join(" ")
}
