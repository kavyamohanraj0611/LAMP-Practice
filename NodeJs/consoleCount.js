const names = ['Kavya', 'Sara','Kavya']
const id = ['1000','1001','1002']
names.forEach(itr => {
  console.count(itr)
})
id.forEach(itr => {
  console.count(itr)
})

console.log("After resetting Kavya value ")
console.countReset('Kavya')
names.forEach(itr => {
  console.count(itr)
})