function whatIsInAName(arr, src){
 return arr.filter(obj => {
   return Object.keys(src).every(key => {
     return obj[key] === src[key]
   })
 }) 
}