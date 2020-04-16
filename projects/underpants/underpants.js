// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below it's instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

_.identity = function(value){
    return value;
}

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

_.typeOf = function(value){
    //I- any value
    //O- type of value as string
    //C-none
    //E- null and array are both objects, 
  
    //variable to hold result  
   let result = typeof(value);
    //Accounting for edge cases
   if(result == 'object') {
       if(Array.isArray(value)) {
           let result = 'array';
           return result;
       }
       if(value === null) {
           let result = 'null';
           return result;
       }
   }
  return result;  
}

/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/
_.first = function(array, number) {
    //I-array and number
    //O-array literal if array is not an array, 
        //if number is not given or empty return first element in array
        //otherwise return the first number items of array
    //C-
    //E-negative number? empty list
        //number bigger than array length? whole array
    
    //Check if array is an array. If statement
        //if not array return array literal
    //if statement to grab negative numbers
        //if negative return empty array
    //declare results array
    //loop with end being the input number
        //push the value at given index to the new array
    //return results
    
    //Accounting for edge cases
    if(!Array.isArray(array) || number < 0) {
        return [];
    };
   let results = []; //answer receptacle
   for(let i = 0; i < number && i<array.length; i++) { //loop to grab those sweet values
       results.push(array[i]);
   }
   if(results.length == 0) { //edge cases
       results = array[0]
   }
   return results;
}

/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/
_.last = function(array, number) {
    //I- array and a number
    //O- if array is not an array, return object literal, if number is not given or not a number, return the last element in array. otheriwse return the last number items in array
    //C
    //-Ewhat if number is negative. what if number is greater than the length.
    
    //last is the other side of the coin to first. we'll solve it the exact same way, but with an inverted loop.
   
    if(!Array.isArray(array) || number < 0) {
        return [];
    };
   let results = [];
   let counter;
   if (number>array.length) {
       counter = array.length
   } else {
       counter = number
   }
   for(let i = array.length-1; i > (array.length-counter-1); i--) {
       results.unshift(array[i]);
   }
   if(results.length == 0) {
       results = array[array.length-1]
   }
   
   return results;
}

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/
_.indexOf = function(array, value) {
    /**I-array and value
     * O-return the index of array that is the first occurrance of value,
     * return -1 if value is not in array
     * do not use [].indoexof :(
     * C-
     * E-what if array has multiple val's? first occurance
     * what if val isnt in array? -1
     */
    //So, loop through array and compare is the plan
        //use if to compare
            //if found return first index
            //if not return -1
    for(let i = 0; i <array.length; i++) {
        if(array[i] === value) {
            return i;
        }
    }
    return -1

}

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/
_.contains = function(array, value) {
   
  //ternary & method for elegance
        
     return array.includes(value) ? true : false;
       

}

/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

_.each = function(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}

/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/
_.unique = function(array) {
    //new array
    //copy over
    //filter
    //return
    
    //use .index (-1)
   
     var newArray = [];
    // Loop through the Array using a for loop.
    for(var i = 0; i < array.length; i++) {
        /* Using a conditional statement and .index() method access the
         * elements of the Array.
         */
        if(newArray.indexOf(array[i]) === -1) {
           // Push the elements into the new Array. 
           newArray.push(array[i]);
        } 
    }
    // Return the new Array.
    return newArray;
};
    


/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

_.filter = function(array, funky) {
    //array literal
    //loop through array
        //grab element, and i
        //pass into function
        //if true push to new array
            //default for if its not true/false
    //return array
    let myArray = [];
    let result;
    for(let i =0; i<array.length; i++) {
        result = funky(array[i], i, array)
        if(result == true) {
            myArray.push(array[i])
        }
    }
    return myArray;
}

/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter(), you must use _.filter() in your implementation
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

_.reject = function(array, funky) {
    
    //what does filter actually give us?
    //it gives us the values that passed a true false test
        //this means the filter to grab if done correctly should work.
    
    //run filter function(same inputs)
    //let filterResults = filter()
    //we want to compare this with array (argument inputed)
        //we're looking for stuff in array that is not in filter results
    //anything not in filterResults that is in original array push into results
    
    
    //so. push array
    let results =[];
    let filterResults =_.filter(array, funky)
    for(let i=0; i<array.length;i++) {
        if(filterResults.includes(array[i])) {
        } else {
            results.push(array[i])
        }
    }
    return results;
}

/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/

_.partition = function(array, funky) {
    /**Input- Array, and function
     * Output- an array, consisting of two subarrays generated from funky
     *  subTruthy- all truthy results in array
     *  subFalsy- all falsy results in array
     * Edge Cases- This is going to return an array of arrays
     */
     
     
     //----------------------------
     //create two new variables, our subarrays (subTruthy & subFalsey)
        //nest those two in larger array, //////results.push(subTruthy)
     //loop through array
        //
        //call function, include element, key, array
        //conditional if result = true =>subTruthy, false into subFalsey
    //How to push into greater array, results?
    //----------------------------
    
        
    let subTruthy = [] //this will be an array of values. We will determine which of the two arrays to put them into based on if the 
    //funky(array[i]) == true or false
    let subFalsey = []
    let results = [] //this will be an array consisting of the two arrays above it and will be our output
    let funkResult;
    
    //Loop here
    for(let i = 0; i < array.length; i++) {
        funkResult = funky(array[i], i, array) //returning true/false (boolean)
        if(funkResult === true) {
            //pushing funkResult in subTruthy
            subTruthy.push(array[i]);
        } else {
            subFalsey.push(array[i]);
        }
    }
    //we have all results in subTruth & false
    //we want our results in the array results
    results.push(subTruthy, subFalsey);
    return results;
}


/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

_.map = function(collection, funky) {
    /**Input- collection, function
     * Output- modified collection, (collection after running it through funky), funkyCollection
     * C-
     * E-
     * 
     * 
     * */
     
     //loop through collection
     //conditional statement? =>check type of collection (array.isarray)
     //different loop for object?
     
     //declare some variables
     //if collection is array
        //loop through array
            //in loop apply the function
            //function will output a return
                //what will the function return?
                    //an array
                     //funkyCollection = funky(array)
        //put in result
    //if object
        // for in loop
            //return an array
                //results.push(funky(array)), but that would be a nested array?
                    //instead lets do:
                    //funkyCollection = funky(array)
        //put in result
    //return
    
    let funkyCollection =[];
    if(Array.isArray(collection)) {
        for(let i = 0; i < collection.length; i++) {
            funkyCollection.push(funky(collection[i], i, collection))
        } 
        
    }else { 
        for(let key in collection) {
            funkyCollection.push(funky(collection[key], key, collection))
        }
            
        }
    return funkyCollection;
}
    



/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

_.pluck = function(array, prop) {
    /**Input-array and property
     * Output-an array of the value of property
     * Constraints-use map
     * Edge-unknown
    */
    
    //create variables
        //results array
        //homebrew function
            //grab value
            //also do pushing
    //use map with homebrew function to 'pluck' the value (grabs each object, and does a function to the object.)
    
    //Creating Variables
   
   
    // _.map(array, valuePusher)
    // return results;
    
    //use a loop to go over the array.
    //use map within the loop to access objects in the array
   
    
      
      //map takes collection and function
        //the input function has the three
    
    let results = _.map(array, function(object, index, array) {
        //the output will be an array with this function applied to it.
        //we want this function to convert the object at each index of the array, to the value of the key of each object.
        //this function will be operating on an object.
        //we want the end of this function to return a string.
        
        //---------we're operating on an object.
        //grab the string of the name from that object
        //return that
        
        
        return object[prop]
    })
    
    return results;
}


/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/
_.every = function(collection, funky) {
/**
 * I: A collection and function
 * O: A boolean value
 * C: Return a boolean based on all truthy or falsey outputs. 
 * E: What if function doesn't return a boolean?
 *    What if function is not given?
 * 
 * 1. _.map() INPUT: Collection and function :: OUTPUT: Collection function(value)
 * //  _.map(array, function(object, index, array)
 * 2. _.partition() INPUT: An array and func :: OUTPUT: Array: [[Truthy],[Falsey]]
 * 3. _.filter() INPUT: An array and function :: OUTPUT: Everything that passed
 * true in an array
 * 4. _.reject(): An array and function :: OUTPUT: Everything that failed as
 * false in an array
 * 
 * 
 * 5. _.every() Input: Collection and function :: OUTPUT: One-drop boolean
 * 
 * // Invoke map function
 *  // Assign map results into variable
 *  // Loop over results
 *  // if map results[i] return false
 *  // after loop return true
 */ 
    let mapResults;
    if(arguments.length == 2) {
            mapResults = _.map(collection, funky);
    } else if(Array.isArray(collection)){
        //  _.map(array, function(object, index, array)
            mapResults = _.map(collection, function(value, i, collection) {
            if(collection[i]) {
                return true;
            } else {
                return false;
            }
        }) 
    } else {
            mapResults = _.map(collection, function(value, key, collection) {
            if(collection[key]) {
                return true;
            } else {
                return false;
            }
        })
    }
    for(let i = 0; i < mapResults.length; i++) {
            if(mapResults[i] === false) {
                return false;
            }
        }
        return true;
};

/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/
_.some = function(collection, funky) {
    let mapResults;
    if(arguments.length == 2) {
        mapResults = _.map(collection, funky);
    } else {
        mapResults = _.map(collection, function(value, i, collection) {
            if(collection[i]) {
             return true;
        } else {
            return false;
        }
        });
    }   for(let i = 0; i < mapResults.length; i++) {
            if(mapResults[i] === true) {
                return true;
            }
        }
        return false;
};

/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/

// Declare variables
    // Declare a garden variable to hold previous results
// Conditional statement for garden
// Loop over array 
    // For each loop, garden = function running over each array element
// Return garden outside of the loop
_.reduce = function(array, funky, seed = array[0]) {
    let garden = seed;
    let i;
    for(arguments.length === 3 ? i = 0 : i = 1; i < array.length; i++) {
        garden = funky(garden, array[i], i);
    }
    return garden;
};

/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

// Use spread in the function parameter
    // Use a for loop to loop over the array of arguments
        // Use a for in loop to loop through the objects
            // For each key, reassign new object property to that key
// Return object
_.extend = function(myObject, ...objects) {
    for(let i = 0; i < objects.length; i++) {
        for(let key in objects[i]) {
            myObject[key] = objects[i][key];
        }
    }
    return myObject;
};
//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
