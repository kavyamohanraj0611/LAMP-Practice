//Resolving in promise.all

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(10);
      console.log('The first promise has resolved');
    }, 1000);
  });
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(20);
      console.log('The second promise has resolved');
    }, 2000);
  });
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(30);
      console.log('The third promise has resolved');
    }, 3000);
  });
  
  Promise.all([promise1, promise2, promise3]).then((results) => {
    console.log('Results:');
    console.log(results);
    
  }).catch(()=>{
    console.log("Promise Rejected");
  });
  


  


//Reject in Promise.all

  // const promise1 = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve(10);
  //     console.log('The first promise has resolved');
      
  //   }, 1000);
  // });
  // const promise2 = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve(20);
  //     console.log('The second promise has resolved');
  //   }, 2000);
  // });
  // const promise3 = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     reject(30);
  //     console.log('The third promise has rejected'); 
  //   }, 3000);
  // });
  
  // Promise.all([promise1, promise2, promise3]).then((results) => {
  //   console.log('Results:');
  //   console.log(results);
    
  // }).catch(()=>{
  //   console.log("Promise Rejected");
  // });



// Even if one promise in promise.all rejects then promise.all is rejected
  