new Promise(function(resolve, reject) {

    setTimeout(() => resolve(1), 2000); 
  
  }).then(function(result) { 
  
    console.log(result); 
    return new Promise((resolve, reject) => { 
        setTimeout(() => resolve(result * 2), 2000);
      });
  
  }).then(function(result) { 
  
    console.log(result); 
    return new Promise((resolve, reject) => { 
        setTimeout(() => resolve(result * 2), 2000);
      });
  
  }).then(function(result) {
  
    console.log(result); 
    return result * 2;
  
  });