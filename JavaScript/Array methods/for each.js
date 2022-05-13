let result = "";
const browsers = ["Google", "Firefox", "Internet explorer","Opera"];
let a=browsers.forEach(funct);
function funct(item, index) 
{
  result += index + " : " + item + " - done\n"; 
}
console.log("forEach() :");
console.log(result);

const resultIndex=browsers.indexOf("Firefox");
console.log("indexOf() of firefox:");
console.log(resultIndex);

const str="Hello everyone";
console.log("\nisArray() :");
console.log("Test using string : " + Array.isArray(str));
console.log("Test using array : " +Array.isArray(browsers));