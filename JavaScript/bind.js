const person = {
  firstName:"John",
  lastName: "Steward",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
const member = {
  firstName:"Rob",
  lastName: "Stark",
}

let fullName = person.fullName.bind(member);
console.log(fullName());