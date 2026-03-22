function generatePassword(length){
  let randomChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()"
  let password = "";

  for(let i = 0; i < length; i++){
    const randomIndex = Math.floor(Math.random() * randomChar.length)

    password = password + randomChar[randomIndex]
  }
  return password;
}

let password = generatePassword(10);
console.log(`Generated password: ${password}`);