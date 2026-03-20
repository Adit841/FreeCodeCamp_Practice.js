function pyramid(char, rows, inverted) {
  let result = "\n";
    if (!inverted) {
    for (let i = 1; i <= rows; i++) {
      let spaces = " ".repeat(rows - i);
      let pattern = char.repeat(2 * i - 1);
      result += spaces + pattern + "\n";
    }
  } else {
    for (let i = rows; i >= 1; i--) {
      let spaces = " ".repeat(rows - i);
      let pattern = char.repeat(2 * i - 1);
      result += spaces + pattern + "\n";
    }
  }

  return result;
}