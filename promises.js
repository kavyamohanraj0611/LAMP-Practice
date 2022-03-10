const exit = () => console.log('Thankyou')
const wel = () => console.log('\nHi everyone.Nice to meet you')
const details=()=>console.log('\nName:Kavya\nID:INT1234\nPractice:Lamp\n')
const fun = () => {
  console.log('Aspire Systems')
  setTimeout(exit, 3000)
  setTimeout(details,1000)
  new Promise((resolve, reject) =>
    resolve('\"Right after wel, before exit\"')
  ).then(resolve => console.log(resolve))
  wel()
}
fun()