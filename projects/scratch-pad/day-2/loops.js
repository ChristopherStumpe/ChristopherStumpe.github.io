// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
    //I- array
    //O-printed array values
    //C-
    //E-
   //I'll use a for loop with the counter corresponding to the array index
   for (var i = 0; i < array.length; i++) {
     console.log(array[i])
   }
   
  
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
    //I-array
    //O-printed reverse array values
    //C-
    //E-
  //I'll use another for loop, but I'll invert the counter to correspond to the tail of the index and work backwards
  for (var i = array.length-1; i >= 0; i--) {
    console.log(array[i]);
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
    //I-object
    //O-array with object keys
    //C-
    //E-
  //I'll use a for in loop and push to create an array of the keys
  var myArray = []
  for(var key in object) {
    myArray.push(key)
  }
  return myArray
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
    //I-object
    //O-printed object keys
    //C-
    //E-
  //I'll use a for in loop to print each key
  for(var key in object) {
    console.log(key)
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
    //I-object
    //O-array of values
    //C-
    //E-
  
  //I'll use a for in loop to collect the objects values in an array
  var myArray = [];
  
  for (var key in object) {
    myArray.push(object[key])
  }
  return myArray
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
    //I-object
    //O-printed values
    //C-
    //E-
  //Using a for in loop I'll print the values
  for (var key in object) {
    console.log(object[key])
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the length of its key/value pairs
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
    //I-object
    //O-object length of pairs
    //C-
    //E-
  //I'll create a counter and add one to it for each loop in a for in loop
  var counter = 0
  for (var key in object) {
    counter++
  }
  return counter
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
    //I-object
    //O-printed values in reverse
    //C-
    //E-
  //I'll use a for in loop to add the values to an array and then loop through that array using an inverted i as index
  var myArray = [];
  for (var key in object) {
    myArray.push(object[key])
  }
  for(var i=myArray.length-1; i>=0; i--) {
    console.log(myArray[i])
  }
  
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
