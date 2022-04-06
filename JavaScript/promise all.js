const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('The first promise has resolved');
      resolve(10);
    }, 1000);
  });
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('The second promise has rejected');
      reject("Promise failed");
    }, 2000);
  });
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('The third promise has resolved');
      resolve(30);
    }, 3000);
  });
  
  Promise.all([promise1, promise2, promise3]).then((results) => {
    console.log('Results:');
    console.log(results);
    
  }).catch(console.log);
  


  





  // const promise1 = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     console.log('The first promise has resolved');
  //     resolve(10);
  //   }, 1000);
  // });
  // const promise2 = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     console.log('The second promise has resolved');
  //     resolve(20);
  //   }, 2000);
  // });
  // const promise3 = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     console.log('The third promise has resolved');
  //     resolve(30);
  //   }, 3000);
  // });
  
  // Promise.all([promise1, promise2, promise3]).then((results) => {
  //     console.log('Results:');
  //     console.log(results);
  // });