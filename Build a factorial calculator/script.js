let num = 5;
function factorialCalculator(num){
  let result = 1;
  for(let i = 2; i <= num; i++){
    result = result * i;
  }
  return result;
}
const factorial = factorialCalculator(num)
console.log(factorial)
const resultMsg  = `Factorial of ${num} is ${factorial}`;
console.log(resultMsg)
