const funct = () => console.log('start...')
const fun = () => {
  console.time('funct()')
  funct()
  console.timeEnd('funct()')
}
fun()
console.log('end')
