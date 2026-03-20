function findElement(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    if (func(element)) {
      return element;
    }
  }
}
//HERE FUNC = WOULD BE THE CONDITION TO BE MET 
const numbers = [1, 3, 5, 8, 9, 10];

const firstEven = findElement(numbers, function(num) {
  return num % 2 === 0;
});

console.log(firstEven); // Output: 8
