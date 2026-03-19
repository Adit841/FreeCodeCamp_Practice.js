function findLongestWordLength(sentence) {
  //Creating Function
  const words = sentence.split(" "); // Converting sentence into words
  let maximum = 0; // To store longest length creating variable
  for (let i = 0; i < words.length; i++) {
    // Looping through every word
    if (words[i].length > maximum) {
      // Checking if current word is greate than previous one
      maximum = words[i].length; //Updating maximum
    }
  }
  return maximum; // Final answer returning
}
