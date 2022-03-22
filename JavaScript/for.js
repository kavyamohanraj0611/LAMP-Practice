const arr1 = ["Alice", "John","Jerry", "Bob", "Tom","Emily"];
console.log("\nfor loop for iterating through array :");
for(let itr=0;itr<arr1.length;itr++)
{
    console.log(arr1[itr]);
}

const person = {fname:"John", lname:"steward", age:27}; 

let txt = "";
for (let x in person) {
  txt += person[x] + " ";
}
console.log("\nfor in loop for iterating through array objects :");
console.log(txt);

console.log("\nfor of loop for iterating over array :");
for(let itr of arr1)
{
    console.log(itr);
}

let str="Welcome";
console.log("\nfor of loop for iterating over string :");
for(let itr of str)
{
    console.log(itr);
}

const employee = new Map([["Alice","java"],["Bob", "c++"],["Jerry", "python"],["Tom","Bash"],["Anna","DBMS"]]);
console.log("\nfor of loop for iterating over map :");
for(let itr of employee)
{
    console.log(itr);
}
