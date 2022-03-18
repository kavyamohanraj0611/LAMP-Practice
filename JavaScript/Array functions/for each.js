let result = "";
const browsers = ["Google", "Firefox", "Internet explorer","Opera"];
browsers.forEach(funct);
function funct(item, index) 
{
  result += index + " : " + item + "\n"; 
}
console.log("forEach() :");
console.log(result);

const resultIndex=browsers.indexOf("Firefox");
console.log("indexOf() of firefox:");
console.log(resultIndex);

const text="Hello everyone";
console.log("\nisArray() :");
console.log("Test using string : " + Array.isArray(text));
console.log("Test using array : " +Array.isArray(browsers));