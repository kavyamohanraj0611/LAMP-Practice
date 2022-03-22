let languages=["Java","C++","Python","C"];
let updateLang=["C++",...languages];
let [a,b,...rest]=updateLang;
console.log(updateLang);
console.log(rest);
console.log(a);