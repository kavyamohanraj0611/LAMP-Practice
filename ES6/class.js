class Details {
    constructor(firstName, lastName,age) {
      this.firstName = firstName;
      this.lastName=lastName;
      this.age = age;
    }
    fullName() {
      console.log(this.firstName+" "+ this.lastName);
    }
    static hello(){
      console.log("Hello");
    }
  }
  
  let myDetails = new Details("John","steward", 37);
  myDetails.fullName();
  
  Details.hello();  //calling static function without object
  
  //Inheritance
  class Person{
    constructor(name){
      console.log(name+ " Parent Class");
    }
  } 
  
  class Employee extends Person{
      constructor(name){
        super(name);
          console.log(name+ " Child Class");
      }
  }
  let employee=new Employee("John");
  