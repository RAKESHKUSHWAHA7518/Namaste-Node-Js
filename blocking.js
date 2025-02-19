const crypto = require("node:crypto");

console.log("Hello World");

var a = 1078698;
var b = 20986;

// Password-Based Key Derivative Function

crypto.pbkdf2Sync("password", "salt", 5000000, 50, "sha512" )
    console.log("Key first is generated");
  
crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  if (err) throw err;
  console.log("Key second is generated");
});

function multiplyFn(x, y) {
  const result = x * y;
  return result;
}

var c = multiplyFn(a, b);
console.log("Multiplication result is:", c);
