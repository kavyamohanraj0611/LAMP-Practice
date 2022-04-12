const EventEmitter = require('events')
const emitter = new EventEmitter()
emitter.on('one',(msg)=>{
  console.log(msg)
})
emitter.once('trigger',(msg)=>{
  console.log("Event triggered once")
})
emitter.addListener('start', (start, end) => {
  console.log(`Event started from ${start} to ${end}`)
})

emitter.emit('one',"First event triggered")
emitter.emit('start', 1, 100)
emitter.emit('trigger')
emitter.emit('trigger')