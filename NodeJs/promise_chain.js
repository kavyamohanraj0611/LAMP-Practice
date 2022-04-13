let fs = require('fs');
fs.readFile('./demo.txt','utf-8',  (err, data)=> {
new Promise((resolve, reject)=> {

  setTimeout(() => resolve(data+" "+"- first promise done" ), 1000); 

}).then((result)=> { 

  console.log(result); 
  return new Promise((resolve, reject) => { 
      setTimeout(() => resolve(result+" "+"- second promise done" ), 1000);
    });

}).then((result)=>{ 

  console.log(result); 
  return new Promise((resolve, reject) => { 
      setTimeout(() => resolve(result+" "+"- third promise done"  ), 1000);
    });

}).then((result) =>{

  console.log(result ); 
  return result ;

})
})

//Cascading  errors
new Promise((resolve, reject) => {
    throw new Error('Error1...')
  })
    .catch(err => {
        console.log(err+" Oops!")
        throw new Error('Error2...')
    })
    .catch(err => {
        console.log(err+" Oops!")
        throw new Error('Error3...')
    })
    .catch(err => {
        console.log(err+" Oops!\n")
    })
  