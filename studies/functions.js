/**
 * Functions:
 *0. A function is a block of code written to perform a specific task. It's important to recognize that the block of code
 * is not executed until it is invoked/called. 
 * The return is the output of the function. It is not required.
 * Functions are hoisted to the top of the code, in both name and value. This means you can invoke a function before its code.
 *
 */
 
 //1. The two phases to using functions: First we must ___? Next we can execute (or two other words for executing a function?) a function by?
 
 //There are two phases to using a function. First you must declare a function. This is when you define what the function will do. The parameters are optional fyi.
 
 function myFunction(parameter1, paramater2) {
  console.log(parameter1 + paramater2)
  return "Mission Success";
 }
 //Next we can execute/invoke/call a function.
 var myArgument1 = 1
 var myArgument2 = 3
 
 myFunction(myArgument1, myArgument2) //prints 4 and returns 'Mission Success'
 
 //2.What’s the difference between a function’s parameters and arguments PASSED to a function?
 //The parameter are placeholders when declaring a function, while the arguments are the variables passed into a function upon invoking it.
 
 //3.What’s the syntax for a NAMED function?
 //function nameOfFunction (arguments) 
 //This wil invoke your named function.

 //4.How do we assign a function to a variable?
 
 //EDIT REQ- Not how you assign a function to a variable, look up function expressions on MDN

 const myConst = function (par) {
  //codeblock
 }
 //This will assign the function to the variable myConst

 //5.Functions can OPTIONALLY take inputs, and OPTIONALLY return a single value. How do we specify inputs, and how do we specify outputs?
//The inputs are specified upon invoking the function, you fill in arguments in the parameters stead. The output is the return and is specified upon declaring the function.

 //6.Scope: Functions can see and modify variables in parent or global scopes. The inverse is NOT true.
//variables only hold references to functions, so in order to change the code block of a function you have to do it at the function's address itself.

//EDIT REQ- Missing code example for scopes
var dog = 'woof';
function pet() {
 var cat = 'meow'
 console.log(dog) //prints woof
 console.log(cat) //prints meow
}
console.log(dog) //prints woof
console.log(cat) // reference error

 //7.Closures: Functions form closures around the data they house. If an object returned from the Function and is held in memory somewhere (referenced), that closure stays ALIVE, and data can continue to exist in these closures! (See: our meeting-room app for an example!) (ALSO, see: Understanding JavaScript Closures with Ease)
//This is one of the first blocks to expanding our use of javascript. The key example discussed was how utilized this is in security of applications.
//You can especially see it when accessing login information. The closures allow us to access information, but not reveal it to outside sources.
//These closures also help in video game development. They allow us to build sets of tools and access those toolsets to house, build, and modify characters.


var multiplier = function(times) {
 return function(input){
  console.log(times, 'multiplier value')
  console.log(input, 'value to by multiplied')
  return input * times;
 }
}
 var doubled = multiplier(2);
 var tripled = multiplier(3);
 var fourDoubled = doubled(4)
 var fiveTripled = tripled(5)

 console.log(fourDoubled) //prints 8
 console.log(fiveTripled) //prints 15
 

//This code is an example of closure. When we declare fourDoubled we input 4 to our doubler, and output 8.