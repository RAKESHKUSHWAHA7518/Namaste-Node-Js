 
//  Modules protects their variable and function from leaking
 require("./name.js");
//   const {calculateSum}=require("./calculate/sum.js"); 
//   const {calculateMultiply}=require("./calculate/multiply.js");

  const {calculateMultiply,calculateSum}=require("./calculate");
  const data=require("./data");
  console.log(JSON.stringify(data));
  

var name = "Namaste Node js "
z= "Rakesh kushwaha"
var a=10;
var b=10;
console.log(name,a+b); 
console.log(globalThis); 
console.log(this);
console.log(globalThis===global); 
calculateSum(10,20)  
console.log(z);
calculateMultiply(10,20); 




