const getPassword = document.getElementById("password");
const length = 8; // to set the length of the password

//password can accept these charcater only
const uppCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbols = "!@#$%^&*()_+}{[]~=-?><";

const allChar = uppCase + lowerCase + number + symbols;

function createPassword() {
  let password = "";

  while (length > password .length) {
    password += allChar[Math.floor(Math.random() * allChar.length)];
  }
  getPassword.value = password;
}

function copy() {
  getPassword.select();
  document.execCommand("copy");
}
