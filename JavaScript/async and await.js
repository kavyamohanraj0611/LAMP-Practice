async function funct() {
    console.log("Start..");
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("done!"), 2000)
    });
    let result = await promise;
    console.log(result); 
    console.log("end..");
}
  
funct();
