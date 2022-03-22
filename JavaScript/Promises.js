var promise = new Promise(function(resolve, reject) {
    const str1 = "Hello";
    const str2 = "Hello"
    if(str1 === str2) {
      resolve();
    } 
    else {
      reject();
    }
  });
  promise.then(function () {
          console.log('Success!! both strings are same');
      }).catch(function () {
          console.log('Oops!! Some error has occurred or not same');
      });