function isAdult(user) {
    console.log(user);
    console.log("Success");
    return user.age >= 18;
}
var person = {
    name: 'Kavya',
    age: 21
};
var isPersonAnAdult = isAdult(person);
console.log("Is Adult? :", isPersonAnAdult);
