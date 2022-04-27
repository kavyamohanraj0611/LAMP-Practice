const names = ['Kavya', 'Sara','Kavya']
const id = ['1000','1001','1002']
names.forEach(itr => {
  console.count(itr)                //counts the number of times console.count() is called for each element.
})
id.forEach(itr => {
  console.count(itr)
})

console.log("After resetting Kavya value ")
console.countReset('Kavya')
names.forEach(itr => {
  console.count(itr)
})
