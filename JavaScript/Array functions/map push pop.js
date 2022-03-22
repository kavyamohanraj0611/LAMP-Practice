const num = [65, 44, 12, 4 , 77, 24, 53];
const newArr = num.map(funct);

function funct(num) 
{
  return num*2;
}
console.log("map() :");
console.log(newArr);

newArr.push(15);
console.log("push() [adding 15 to the newArr array] :");
console.log(newArr);

const sum1 = newArr.reduce(redFunct);
function redFunct(prev, curr)
{
   return  prev + curr;
}
console.log("\nreduce() for sum of elements in array : [" + newArr +"]");
console.log(sum1);

console.log("\nreverse() for above array :");
console.log(newArr.reverse());

console.log("\nshift() :[removes first element]");
console.log(newArr.shift());

console.log("\nunshift() :[adds element at the beginning and returns the size of array]");
console.log(newArr.unshift(89,42));
