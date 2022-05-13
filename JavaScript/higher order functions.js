const student = [34,56,86,27,72];

console.log("filter() for filtering the student marks greater than 35 :" +student.filter(checkPass));

console.log("reduce() method :"+student.reduce(total,0));

const mapArray=student.map(funct)
console.log("Mapping array :" +mapArray);

console.log("sorting the array :"+student.sort());

function total(sum,value) {
  return sum+value ;
}

function checkPass(mark)
{
    if(mark>=35){
        return true;
    }
    else{
        return false;
    }
}

function funct(num){
  return num*2;
}
