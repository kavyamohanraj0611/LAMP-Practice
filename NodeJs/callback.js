var funct = (value, callback)=> {
    if (value === true) {
      callback(null, "Value was true.");
    }
    else {
      callback(new Error("Value is not true!"));
    }
  }
  
  var callback = (error, value)=> {
    if (error) {
      console.log(error);
      return;
    }
    console.log(value);
  }

funct(true, callback);
funct(false, callback);