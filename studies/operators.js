/*
 *Operators
 * 0. An assignment performs some operation on a value depending on which operator is used. There are a variety of different
 *operators available to do all kinds of different tasks
 *
 */
 
//1. Assignment Operators //
//Assignment operators assign values to variables
var a = 1; //we used the = sign assignment operator to give the variable a the value of 1
//Assignment operators assign the value on the right to the variable on the left.
//There are a few other assignment operatos as well; compound operators assign preset values. These are handy for loops
a ++; //=> this adds one to the variable a

//2. Arithmetic operators //
//Arithmetic operators are similar to math operators. They are used to perform arithmetic on numbers
a * 3; //This arithmetic operator multiplies a times 3.
//+, -, *, /, %(remainder), **(exponent) are all arithmetic operators that operate as expected per math rules.

//3. Comparison operators //
//Comparison operators are used to generate a value of true or false. They're especially beneficial in control flow statements
//==, ===, <, <=, >, >=, !=, !== are all examples of comparison operators
console.log(1 == 2); //=> prints false

//4. Logical operators //
//Logical operators such as &&, ||, and ! are useful for control flow statements. 
//! is the bang operator, it reverses whatever its put in front of. So for example
console.log(true != true); //=> prints false. this can be read as 'true is not equal to true'
//&& is the and operator, it means the statements on either side of it must both be true for it to read true
if (1==1 && 1==2) {
    console.log(true)
} else {
    console.log(false)
} //=> prints false
//|| is the or operator, it means either statement can be true and it will read true
if(1==1 || 1==2) {
    console.log(true)
} else {
    console.log(false)
} //=> prints true

//5. Unary operators (!, typeOf, -) //
//Unary operators require only one operand. 
//! the bang operator converts a value to a boolean value and then inverts it
//the typeof operator returns a string which reflects the type of the operand it was used on
//the - operator converts to a number and then negates that number.
console.log (typeof a) // prints number

//6. Ternary operators (a ? b : c) //
//Ternary operators take 3 operands. It is frequently used as a shortcut for an if statement
var tern 
(5==3+2 ? tern = true : tern = false) 
console.log(tern)//will print true.
//the first input is a condition, the input after the question mark will execute if true, and the condition after the colon will execute if false.