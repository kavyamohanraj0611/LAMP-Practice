let num = 3;
funct(num);
function funct(num) {
    try {
      if(num == "") throw "value is empty";
      if(isNaN(num)) throw "not a number";
      num = Number(num);
      if(num < 5) throw "number is too low";
      if(num > 10) throw "number is too high";
     console.log("Accepted");
    }
    catch(err) {
        console.log("Something went wrong!! " + err);
    }
    finally{
        console.log("executed");
    }
  }