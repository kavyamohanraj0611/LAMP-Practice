type User = {
    name: string;      //declaring custom object types
    age: number;
  };
  
  function isAdult(user: User): boolean {
    console.log(user);
    return user.age >= 18;
  }
  
  const person: User = {      //using object to assign the type of the variables
    name: 'Kavya',
    age: 21
  };
  
  const isPersonAnAdult: boolean = isAdult(person);
  console.log("Is Adult?",isPersonAnAdult)
