/* Control Flow 
 *0. Control Flow in Javascript refers to the order the computer executes your code. Javascript goes top down, which is helpful for ordering your code.
 *Condiionals and loops will interfere in this top down order of executions based on the conditions in those specific code blocks. We utilize
 *these to perform more complicated tasks while keeping our repeating code blocks to a minimum.
 *
 * EDIT REQ: Must explain the syntax for conditional chains (keyword, where the conditions go, where the executed code goes, ELI5)
 *Conditional Chains:
 *The If initiates a chain. Afterwards in paranthesis you put the condition. If this evaluates to true the code in the curly braces immediately
 *following the paranthesis executes. If false it jumps to the next keyword in chain. 
 *This is either an else-if or an else or nothing. Else-if operates the same as an If just in the middle of the chain. Else is the final link in a chain.
 *else does not have an evaluation, if the code made it to this point it executes.
 *then it exits the chain.
 */
 
//1. If //
//If statements execute a code block if the condition evaluates to true
//Can only have one if statement in a chain.
var myBoo = true
var myNum = 4
var myString = 'Stringy'

if (myNum > 3) {
    console.log(myString); //prints Stringy
}
//This will print because 3 is less than 4 so the code block executes

//2. Else-If//
//Else-If statements are a useful way to include a follow up condition to execute (conditionally) if the first if statement evaluates to false
//It's basically a chained if statement that only gets read if the first if statement fails its condition
//You can have as many else if's in a chain as you want
if (myNum > 5) {
    console.log(myString);
} else if (myBoo == true) {
    console.log('second try is a charm')
}//prints second try is a charm because first condition failed, and second condition passed

//3. Else //
//This is the 3rd part to an if chain. When chained to the end of an if chain this executes if the preceeding conditions all fail.
//You can only have a single else statement in a chain
if(myNum > 5) {
    console.log("this won't print")
} else if (myBoo == false) {
    console.log('Nor this')
} else {
    console.log("We made it!")
} //prints We made it! because the first two conditions failed

//4. Switch
//This switch statement is an alternative to the if code block, best used when you know the specific cases you're looking for.
//Default: the default statement is used for when none of the cases match.
//Break: it's important to utilize breaks so the code can clearly differentiate your cases.


//EDIT REQ:- What does the keyword case mean? You defined break and default but not case
//Case is referring to the parameter. i.e. in the 'case' of the color being 'blue' execute the following code block.

var myVar = 'blue';
var myOtherVar = 'red';
var myOtherOtherVar = 'green';
var myColor;

function mySwitch(color) {
    switch(color) {
        case 'blue':
            myColor = 'blue';
            break;
        case 'red':
            myColor = 'red';
            break;
        default:
            myColor = 'Color Unavailable';
            
    }
}

console.log(mySwitch(myVar)); //prints blue
console.log(mySwitch(myOtherVar)); //prints red
console.log(mySwitch(myOtherOtherVar)); //prints Color Unavailable
