function largestOfAll(arr){
 const result = [];

 for(let i = 0; i < arr.length; i++){
   let largest = arr[i][0];
   for(let j = 0; j < arr[i].length; j++){
     if(arr[i][j] > largest){
       largest = arr[i][j];
     }
   }
   result.push(largest);
 }
 return result;
}