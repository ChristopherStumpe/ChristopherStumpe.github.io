// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    //I-vase
    //O-function that gives true/false based on greater than comparison of base and value
    //C-
    //E-
    //Whew, this one was a doozy for me. I decied to make an if statement that returned different functions, either string or number
    //Then those functions return a boolean based on a greater than expression for value vs base
  if (typeof base == 'string') {
     return function testString(value) {
       if (value > base) {
           return true
       } else {
           return false
       } 
     }
  } else {
   return function testNumber(value) {
       if (value > base) {
           return true
       } else {
           return false
       }
   }
  }
  
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    //I-base
    //O-function that gives true or false based on less than comparison
    //C-
    //E-
    //Ok, have a much better grasp on it now, and this is a cleaner version of the code from above but for "less than"
    return function testCompare(value) {
        if (value<base) {
            return true
        } else {
            return false
        }
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    //I-character
    //O-test function to compare starting values
    //C-
    //E-
    
    //Cool, so I'm going to return a function that converts both values to lowercase and then runs an if statement to compare my index zero with starts with
    return function myTest(myString) {
        myString = myString.toLowerCase()
        startsWith = startsWith.toLowerCase()
        if(myString[0] == startsWith) {
            return true
        } else {
            return false
        }
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    //I-character
    //O-test function to compare ending value
    //C-
    //E-
    //I'm going to return a function that converts both values to lowercase and then runs an if statement to compare the values, using length property minus one to get the last character
    return function myEndTest(yourString) {
        yourString = yourString.toLowerCase()
        endsWith = endsWith.toLowerCase()
        if(yourString[yourString.length-1] == endsWith) {
            return true
        } else {
            return false
        }
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return an Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    //I-array of strings and function
    //O-array of strings, modified
    //C-
    //E-
    //I'll make a variable to hold the new array
        var newStrings = []
        var tempString
    //Ok, ok, so next a loop, I'll use a for loop
    for(let i=0;i<strings.length;i++) {
        //Now I'll modify the string and put it in the new array
       tempString = strings[i]
       tempString = modify(tempString)
       newStrings.push(tempString)
    }
    
    return newStrings
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    //I-array and test function
    //O-boolean based on test results
    //C-
    //E-
    //I'll make a temporary placeholder for the string I'm testing
    let testString
    
    //run it through a loop, if it fails the test at any point return false, otherwise exit loop and return true at that point
    for(let i = 0; i < strings.length; i++) {
        testString = strings[i]
        if (test(testString) == false) {
            return false}
    }
    return true
    
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}