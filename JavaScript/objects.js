let work = {run: 1, walk: 2 ,jogg:3 ,speak:"true"};
console.log(`value of walk is :${work.walk}`);
console.log(`keys of object work : ${Object.keys(work)}`);
delete work.jogg;
console.log(work.jogg);
console.log("run" in work);
console.log("speak" in work);
console.log(Object.keys(work));
console.log(Object.assign(work,{sleep:5,eat:6}));

let activity = [];
addEntry(["work", "running", "pizza","television"], false);
addEntry(["work", "walking","ice cream", "laptop",], false);
addEntry(["weekend", "cycling", "sandwich", "desktop"], true);
for (let i in activity) 
{
console.log(activity[i]);
}

function addEntry(events, leave) {
  activity.push({events, leave});
}
