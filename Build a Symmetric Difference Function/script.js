function diffArray(arr1, arr2){
    const one = arr1.filter(item => !arr2.includes(item));
    const two = arr2.filter(item => !arr1.includes(item));

    return one.concat(two);
}

console.log( diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]))