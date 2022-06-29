const generateRandomPassword = () => {
    return Array(15) //number of characters
      .fill(
        "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ"
      )
      .map(function (x) {
        const pwd = Math.floor(Math.random() * x.length);
        return x.substring(pwd, pwd + 1);
      })
      .join("");
  };

console.log(generateRandomPassword()) //'XX)PUMqA1mpDtZQ'
