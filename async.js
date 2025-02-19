const fs= require('fs');
const https= require('https');

console.log("hello-world");
var a=100000;
var b=8000;


https.get("https://dummyjson.com/products/1", (res) => {
    console.log("Fetched Data Successfully");
  });
  // console.log(fs);
  
  
  setTimeout(() => {
    console.log("setTimeout called after 5 seconds");
  }, 5000);
  
  fs.readFile("./file.txt", "utf8", (err, data) => {
    console.log("File Data: ", data);
  });
  

function multiply(a,b) {
    const result= a*b;
    return result;
}


var c=multiply(a,b);

console.log("multiply",c);

