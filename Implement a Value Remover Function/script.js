function destroyer(arr, ...values){
    return arr.filter(item => !values.includes(item));
}
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))