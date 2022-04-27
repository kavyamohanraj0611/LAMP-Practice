const crypto = require('crypto');

// console.log(crypto.getHashes())
// console.log("\n\n",crypto.getCiphers())

const algorithm = 'aes-256-cbc';
let key='12345678123456781234567812345678'    //for aes algorithm the key must be 32 bytes
let iv =crypto.randomBytes(16);       //creates a random 16 bytes iv

// Encrypting
function encryptText(text){
const cipher = crypto.createCipheriv(algorithm,key,iv);
let encrypted = cipher.update(text,'utf8','hex');
encrypted += cipher.final('hex');
return encrypted;
}
console.log("Encrypted value :",encryptText("Kavya Mohanraj"));

//Decrypting
function decryptText(text){
    const decipher = crypto.createDecipheriv(algorithm,key,iv);
    let decrypted = decipher.update(text,'hex','utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
    }
let encrypted = encryptText("Kavya Mohanraj");
console.log("Decrypted text  :",decryptText(encrypted));



//Encrypt using hash function

// const algorithm = 'sha256';
// function getHash(password) {
// let hash1 = crypto.createHash(algorithm).update(password).digest('hex');       //encoding to be used
// return hash1;
// }

// hash1=getHash('Kavya@123')
// console.log("Hash1 value : ",hash1);
// hash2=getHash('Kavya@123')
// console.log("Hash2 value : ",hash2);
// console.log((hash1===hash2)?"Pasword matches":"Password does not match")



//Encrypting key using DiffirHellman

// const d1 = crypto.getDiffieHellman('modp14');
// const d2 = crypto.getDiffieHellman('modp14');
// d1.generateKeys();
// d2.generateKeys();
// const d1Secret = d1.computeSecret(d2.getPublicKey(), null, 'hex');
// const d2Secret = d2.computeSecret(d1.getPublicKey(), null, 'hex');
// console.log("Both keys are same ? :",d1Secret === d2Secret);      //checks if both keys are same


