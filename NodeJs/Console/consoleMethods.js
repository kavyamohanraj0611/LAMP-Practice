const funct = () => console.log('start...')
const fun = () => {
  //time()
  console.time('funct()')      // starts a timer in the console view
  funct()
  console.timeEnd('funct()')   //ends a timer and display the result in the console.
}
fun()
console.log('end')

//group()
console.log("Hello...");
console.group();
console.log("(inside group)")
console.log("Name : Kavya M");
console.log("Id : INT1000");
console.log("Practice : LAMP ");
console.groupEnd();
console.log("Thankyou (outside group)");

//Displays the error message
console.error("Oops!..Something went wrong");

//console.assert()
let x = 5;
let y = 5;
console.assert(x + y == 10,"Assertion success");    //A message is displayed if the expression returns false
 
//trace()
console.trace()  //displays how the code is ended up in this point
