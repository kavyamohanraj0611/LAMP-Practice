const os=require('os')

console.log("Hello...I'm Kavya from LAMP team"+ os.EOL+"Trainee at Aspire systems"+os.EOL+"India-Chennai"+os.EOL)   //EOL-End of line character
console.log(`OS architecture : ${os.arch()}`+os.EOL)
console.log("CPU info :\n",os.cpus())           //object about cpu core
console.log(os.EOL+`Home directory of user : ${os.homedir()}`)
console.log(`OS Platform : ${os.platform()}`)    
console.log(`OS release number : ${os.release()}`) 
console.log(`Total memory in system : ${os.totalmem()} bytes`)
console.log(`Total run time of CPU since last reboot : ${os.uptime()} seconds`)
console.log("User info :",os.userInfo())

