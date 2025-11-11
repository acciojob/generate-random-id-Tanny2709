function makeid(l) {
  l = Number(l); // ensure input is a number

  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";

  for (let i = 0; i < l; i++) {
    const randIndex = Math.floor(Math.random() * chars.length);
    result += chars[randIndex];
  }

  return result;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
