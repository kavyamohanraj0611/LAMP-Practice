let str = "I ate an Icecream and it was delicious";

console.log("String :"+str);
console.log("\nSearching :"+str.search(/delicious/i));
console.log("\nReplacing Icecream with apple :"+str.replace(/Icecream/i,"apple"));
console.log("\nTesting if apple is in string or not :"+/delicious/i.test(str));
console.log("\nexec() - It returns match or null :"+/is/i.exec(str));
console.log("\nmatch() - It returns match or null :"+str.match(/was/i));
