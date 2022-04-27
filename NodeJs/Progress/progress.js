const progress = require('progress');
const data1 = new progress('Processing [:bar] :percent :etas ', { total: 100 });
const time1 = setInterval( () => {
  data1.tick();
  if (data1.complete) {
    clearInterval(time1);
  }
}, 10);

const data2 = new progress('Processing [:bar] :percent :etas ', { total: 100 });
const time2 = setInterval( () => {
  data2.tick();
  if (data2.complete) {
    clearInterval(time2);
  }
}, 100);
