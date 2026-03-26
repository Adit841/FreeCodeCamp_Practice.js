function steamrollArray(arr, result=[]){

  for (let i = 0; i < arr.length; i++){
    const item = arr[i];
    if(Array.isArray(item)){
      steamrollArray(item, result)
    } else {
      result.push(item)
    }
    
    if(i === arr.length - 1){
      return result
    }
  }
  
}