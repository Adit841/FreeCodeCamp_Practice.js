function mutation(arr) {
  // function create

  const str1 = arr[0].toLowerCase(); // first string to lowercase
  const str2 = arr[1].toLowerCase(); // second string to lowercase

  for (let i = 0; i < str2.length; i++) {
    // loop through second string

    if (!str1.includes(str2[i])) {
      // if letter is not in first string
      return false; // then return false
    }
  }

  return true; //Letters present return true
}
