const language = ["C", "C++", "Python", "Java"];
console.log("The array values are : \n"+arr1);

console.log("\nRemoving the last element from an array : \n" +arr1.pop());

arr1.push("JavaScript");
console.log("\nadding new element at the last index : \n"+arr1);

console.log("\nRemoving the first element of an array and shifting: \n"+arr1.shift());

arr1.unshift("HTML");
console.log("\nadding new elements to the beginning of an array and shifting: \n"+arr1);

arr1.splice(2,0,"CSS");
console.log("\nUsing splice we add the element at index 2 : \n"+arr1); 

console.log("\nSelecting array elements from start index till the end index(not included) : \n"+arr1.slice(2,4));
