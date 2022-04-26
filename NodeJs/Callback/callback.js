//Callback example 

const details = [{ name: "Kavya", id:"INT1000"},{ name: "Tony",id:"INT1001"}]

function getNames(){
  setTimeout(() => {
    details.forEach((data, index) => {
    console.log(data.name)
    })
  }, 500);
}

function insertData(data, callback){
  setTimeout(() => {
    details.push(data);
    callback();
  }, 1000);
}

insertData({ name: "Jon", id:"INT1002"}, getNames);  //getNames is callback function
