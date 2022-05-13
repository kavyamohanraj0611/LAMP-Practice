const person = {fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
const person1 = {
  firstName:"Tony",
  lastName: "Stark"
}
console.log(person.fullName.apply(person1)); 