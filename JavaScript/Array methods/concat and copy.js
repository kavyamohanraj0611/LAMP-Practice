const arr1 = ["Alice", "John"];
const arr2 = ["Jerry", "Bob", "Tom"];
const arr3 = ["Emily"];
const result = arr1.concat(arr2,arr3);
console.log(result);

const arr4=[10,20,30];
const finalResult=result.concat(arr4);
console.log("concatenation of array :");
console.log(finalResult);

finalResult.copyWithin(2,0,2);
console.log("copyWithin() :");
console.log(finalResult);

const people = ['Alice', 'Bruce', 'Tom']; 
const result1=people.constructor;
console.log(result1);



