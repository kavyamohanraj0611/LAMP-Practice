const age = [32, 46, 12, 78, 17, 18];
const resultFilter = age.filter(checkAdult);
console.log("filter() :");
console.log(resultFilter);

const resultEvery=age.every(checkAdult);
console.log("\nevery() :");
console.log(resultEvery);

const resultFind=age.find(checkMinor);
console.log("\nfind() :");
console.log(resultFind);

const resultFindIndex=age.findIndex(checkMinor);
console.log("\nfindIndex() :");
console.log(resultFindIndex);

function checkAdult(age) {
    return age >= 18;
}
function checkMinor(age) {
    return age < 18;
}