/*
 *String-Manipulation
 *
 *0. Methods
 * There's quite a few methods that Javascript includes for the manipulation of strings. Strings are programmed as a niche type of object
 * which is useful for performing a variety of methods on them for quick and handy programming. I'll list some below.
 *1. Concatination
 *Concatination is the most recognizable of the operators that can be performed on strings. Simply using the + key to add two strings together.
 */
 
 //1. With Operators
 var myString = "Such String, Much Wow"
 var myOtherString = "Another String"
 var resultString
 //Concatenation is adding strings together with the plus sign +
 resultString = myString + myOtherString //fills resultString with "Such String, Much WowAnother String"
 
 //2. With String Methods
 myString.length; //=>prints 21
 //The length method counds how many characters are in the given string and prints that number. 
 
 console.log(myString.toUpperCase())//prints "SUCH STRING, MUCH WOW"
 //Converts the string to uppercase
 
 console.log(myString.toLowerCase())//prints "such string, much wow"
 //converts the string to lowercase
 
 resultString = myString.split(" ");
 console.log(resultString);//prints ['Such', 'String,', 'Much', 'Wow']
 //Splits the string into an array at the designated parts of the string, in this case the spaces
 
 