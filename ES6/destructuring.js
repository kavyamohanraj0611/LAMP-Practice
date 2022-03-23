let details = [ "John", "steward","male"];
let [ firstName, lastName, gender ] = details;
console.log(firstName);
console.log(lastName);
console.log(gender);

let language=["c","c++","python"];
let [,,thirdLanguage]=language;
console.log(thirdLanguage);

let colors = [ "red", "green", "blue" ];
let [ firstColor, ...elements ] = colors;
console.log(firstColor);
console.log(elements);

let num1= 1,
    num2= 2;
[ num1, num2 ] = [ num2, num1];
console.log(num1);
console.log(num2);
