/**
 * Datatypes:
 * 0.Types of Datatypes
 * Datatypes can be split into two categories, Simple & Complex
 * Javascript utilizes dynamic data types. This means that a variables type can change from when it was first initialized
 * 
 * */
 
 //1. Number //
 var myNum = 4;
 console.log(myNum); //=>prints 4
 //Numbers can even be written with decimals and scientific notation.
 
 //2. String //
 var myString = "This is my string. There are many like it, but this one is mine.";
 console.log(myString); //=> prints This is my string. There are many like it, but this one is mine.
 //Strings are simply a series of characters. They can include quotes, but you can't use the same (single or double) quotes that are containing it.
 
 //EDIT REQ2
 //Accessing characters within strings. You can access an individual character by referencing its index. 
 //For example
 let exampleString = "This is an example" 
 console.log(exampleString[1]) //=> prints h
 
 //EDIT REQ2
 //Strings are immutable. The example below is faulty. If i wanted to change my example from above I would need to create a new string.
 //Here is how I would approach this.
 let newString = exampleString + '!'
 console.log(newString) //'This is an example!'
 
 
 //EDIT REQUESTED- How do we access individual characters in a string? Talk about their indices
 //Each character in a string has an index, starting at zero. If you would like to access a character you can utilize bracket notation
 myString[0] = 'M'
 console.log(myString) //prints "Mhis is my string. There are many like it, but this one is mine."
 
 //3. Boolean //
 var myBoo = 7 == (3+4);
 console.log(myBoo); //=>prints true
 //Boolean values are the states of True and False. Boolean statements can be anything that resolves to true or false.
 
 //4. Array //
 var myArray = ["Red", false, 24];
 console.log(myArray); //=> prints ['Red', false, 24]
 //Array's are our first complex data type. They can hold any other datatype, including other arrays! Each slot is indexed with a value of 0-n.
 //You can access the data in each slot by referencing their index
 console.log(myArray[2]) //=>prints false
 //Arrays are additionally supported by a variety of methods. There are methods to add, remove, split, etc. Too many to list them all
 //But here's a few examples to show how to invoke them
 myArray.push(5); //Adds 5 to the end of the array
 myArray.unshift('a'); //Adds 'a' to the beginning of the array
 
 //5. Object //
 var theObjectOfMyDesire = {
  "Key to my Heart" : "Proper Syntax",
  "My String" : myString,
  "Example Key" : true,
  "Arrays too?" : [0, true, "Lavender"]
 }
 //Objects are the bread and butter of javascript. Another complex datatype, they can hold all other datatypes with themselves. 
 //Fun fact, everything in javascript is coded as an object!
 //You can access data in objects by referencing their keys
 console.log( theObjectOfMyDesire["My String"] ); //Prints the value of "My String", which is myString =>"This is my string. There are many like it, but this one is mine."
 theObjectOfMyDesire["My String"] = "Newer, better string"
 console.log( theObjectOfMyDesire["My String"] ); //Prints the new value of "My String" => "Newer, Better string"
 
 //6. Function //
 function myFunction(input) {
  console.log(input + "'s just wanna have fun.")
  return 'Mission success!'
 } // => this function takes an input and concats it to print that your input just wants to have fun
 
 //Functions are blocks of code written to perform a specific task. They're essential in programming to streamline and avoid doing repetitive
 //code blocks over and over.
 //However, they don't take effect until they're 'invoked' or 'called'
 myFunction('girl'); //=> this is the point when it will print to console.
 //Functions are hoisted in both name and effect. They can be invoked before you reach the line of code in JS that dictates what they do
 //They also possess the 'return' value. Once this line of code is reached the function stops executing and returns any data after the return line.
 var newVar = myFunction('girl')
 console.log(newVar) //=> this prints 'Mission success!'
 
 //7. Undefined
 var myLatestVar
 console.log(myLatestVar); //=> this prints undefined
 //Undefined helps us tell when a variable has not had a value assigned to it, or even hasn't been declared at all
 
 //8. Null
 var myNull = null
 console.log(myNull) //=> prints null
 //Null is kinda neat. It is a way to represent an intentionally empty value.
 
 //9. NaN
 console.log(Math.sqrt(-1)) //=> will print NaN
 
 //Nan stands for Not a Number. It is the returned value when math functions fail. It also will never return equal to anything, including NaN
 
 //10. Infinity and -Infinity //
 console.log(1/0) //=> prints infinity
 
 //Infinity is a value greater than any number. It is read only, with global scope
 //Any positive value multiplied by infinity is infinity. Negative times infity is negative infinity.
 //Any positive value divided by infinity is zero.
 console.log(Number.POSITIVE_INFINITY*-1) //=> prints negative infinity
 //Negative infinity is a value less than any number. It is read only,  with global scope.
 //Any positive number multiplied by negative infinity is negative infinity, meanwhile any negative number multiplied by negative infinity is positive infinity.
 //any number divided by negative inifinity is zero
 
 //11. What is the difference between primitive(simple) & complex datatypes //
 //Primitive datatypes are not objects, and have no methods; string, number, boolean, null, and undefined are all primitive/simple datatypes. 
 //Complex datatypes allow you to store collections of data.
 console.log(typeof 42) //=> prints number
 //typeof is an excellent tool to assess datatypes in code
 
 //12. Primitive values are passed to a function BY COPY, complex values are BY REFERENCE. What does that mean, and how are they different?
 //Primitive values are copied. So two different variables will both have their own addresses with their own values, and the value
 //will be duplicated and copied to the new variables new address. A complex value when passed to a new variable will only pass
 //an address to the original complex value. The complex value is still only store in one place. In practice this means that with
 //simple datatype variables, changing a won't change b. However in complex datatypes changing a will change the value that b references.
 //Let's examine some code examples for clarification.
 
 //Simple Example
 var simpleA = 'value';
 console.log(simpleA); //=>prints 'value'
 console.log(simpleB); //=>prints undefined
 
 var simpleB = simpleA;
 console.log(simpleA); //=>prints 'value'
 console.log(simpleB); //=>prints 'value'
 
 simpleB = 'new value';
 console.log(simpleA); //=>prints 'value'
 console.log(simpleB); //=>prints 'new value'
 //As you can see here, simpleB's change does not overwrite simpleA because they are each a unique address.
 
 //Complex Example
 var complexA = ['string', 89, true];
 console.log(complexA); //=> prints ['string', 89, true]
 console.log(complexB); //=> prints undefined
 
 var complexB =complexA;
 console.log(complexA); //=> prints ['string', 89, true]
 console.log(complexB); //=> prints ['string', 89, true]
 
 complexB.push('new');
 console.log(complexA); //=> prints ['string', 89, true, 'new']
 console.log(complexB); //=> prints ['string', 89, true, 'new']
 //As you can see, because complex datatypes when copied only copy a reference, they both refer to the same array (in this example).
 //So when you change the array via complexB, the array referenced by complexA is changed (same array)
 