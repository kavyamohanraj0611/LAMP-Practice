const exit = () => console.log('Thankyou')
const wel = () => console.log('\nHi everyone.Nice to meet you')
const details=()=>console.log('\nName:Kavya\nID:INT1234\nPractice:Lamp\n')
const fun = () => {
  console.log('Aspire Systems')
  setTimeout(exit, 2000)
  setTimeout(details,1000)
  const state=new Promise((resolve, reject) =>
    resolve('\"Executes after wel and before exit\"')
  ).then(resolve => console.log(resolve))
  console.log(state)
  wel()
}
fun()
