////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(start, end, step = 1) {
//Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.
  //I-start and end numbers (step, set to default to 1)
  //O- return array, inclusive
  //C-
  //E-return empty array if start === end
  //make our output array
  let output = []; 
  //Empty exception if start ===end
  if(start === end) {
    return output;
  }
   //Loop seems like a good starting point
  if(step > 0) {
     for (let i = start; i <= end; i =i+ step) {
        output.push(i);
     }
  } else {
     for (let i = start; i >= end; i =i+ step) {
       output.push(i);
     }
  }
  return output;
}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(array) {
  //Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55.
  //I-array of numbers
  //O-sum of this array
  //C-
  //E-
  //need a dropbox
  let sum =0;
  //loop this up 
  for (let i = 0; i < array.length; i++) {
    sum+=array[i];
  }
  return sum;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array) {
  //I-array
  //o- reverse that array and return as new array
  //C-
  //E-
  //The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. 
  let newArray = [];
  for (let i = array.length-1; i >= 0; i --) {
    newArray.push(array[i]);
  }
  return newArray;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) {
  //The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements.
  //I-array
  //o-same array, reversed
  //C-
  //E-
  //I plan to use a loop to loop over half of the array I think
  //I'll swap front and back as I go so I don't delete elements I'll need
  let tempFront;
  let tempBack;
  for(let i = 0; i < Math.floor(array.length/2); i++) {
    tempFront = array[i];
    tempBack = array[array.length-1-i];
    array[i] = tempBack;
    array[array.length-1-i] = tempFront;
  }
  return array;
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {
  //Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument.
  //I-array
  //O-list
  //C-
  //E-

//   let list = {
//   value: 1,
//   rest: {
//     value: 2,
//     rest: {
//       value: 3,
//       rest: null
//     }
//   }
// };
  //I'll need to loop through the array.
  //Will i need a constructor function to build the objects?
  let list = {};
  let x;
  let listSoFar;
  for (let i = array.length-1; i >= 0; i--) {
    //add object to list
   if(i === array.length-1) {
    x = array[i];
    // console.log('x='+x)
    //local binding for list so far
    listSoFar = list;
    // console.log('listSoFar='+listSoFar)
    list = {value: x, rest: null}
    // console.log('list='+list)
     
   } else {
    x = array[i];
    // console.log('x='+x)
    //local binding for list so far
    listSoFar = list;
    // console.log('listSoFar='+listSoFar)
    list = {value: x, rest: list}
    // console.log('list='+list)
   }
    
    
    //So to begin, make an object
    //value is array[i] and rest: null
    //Then need to make that whole thing an object to add to the next object 
    //assign the rest value and assign value array[i]
    
  }
  return list;
}
////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list) {
  //I-list
  //o-array
  //C-
  //E-
  let array = [];
  for (let node = list; node; node = node.rest) {
    array.push(node.value)
  }
  return array;
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(element, list) {
  //I-element, and list
  //o-return the list with the element added to the top of the list
  //C-
  //E-
  //Then add a helper function prepend, which takes an element and a list and creates a new list that adds the element to the front 
  //of the input list.
  let oldList = list;
  list = {
    value: element,
    rest: oldList
  }
  return list;
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, number) {
  //I-list and a number
  //o-returns the element at the given position in the list
  //C-
  //E- undefined when no element
  //and nth, which takes a list and a number and returns the element at the given position in the list (with zero referring to the first element) or undefined when there is no such element.

//If you haven’t already, also write a recursive version of nth.

//The recursive version of nth will, similarly, look at an ever smaller part of the “tail” of the list and at the same time count down the 
//index until it reaches zero, at which point it can return the value property of the node it is looking at. To get the zeroth element of a 
//list, you simply take the value property of its head node. To get element N + 1, you take the Nth element of the list that’s in this list’s 
//rest property.
  let counter = -1
  for (let node = list; node; node = node.rest) {
    counter += 1;
    if (number === counter) {
      return node.value;
    }
  }

}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
var log = console.log
function deepEqual(thing1, thing2) {
  log('start of function')
  log('thing1='+thing1)
  log('thing2='+thing2)
  //First check if object
  if(typeof(thing1) === 'object') {
    log('type of thing1= '+ typeof(thing1) +', start of if chain 216')
    //Initiate for in loop
    for(var key in thing1) {
      //check if value is an object
      if(typeof(thing1[key] === 'object')) {
        log('type of thing1 key= '+typeof(thing1[key])+', start of if chain 222')
        //if object, recurse
        log('RECURSION')
        return deepEqual(thing1[key], thing2[key])
      }
      //check num of keys/props
      if(Object.keys(thing1).length !== Object.keys(thing2).length) {
        log('object lenghts unequal fail 228')
        return false
      }
      //This is where I do the array comparison. It's getting into the next line and bunging it up.
      log('thing1[key] =' + thing1[key])
      //It's a full object with a nested array. why hasn't it recursed?
      //it's not, its an array. ok. that's better. it's [1, 2, 3]
      log(typeof(thing1[key]))
      log(Array.isArray(thing1[key]))
      if(typeof(thing1[key])== 'object' && Array.isArray(thing1[key])) {
        //array check with true or false returns
        //loop?
        log('test')
        for(let i = 0; i <thing1[key].length; i++) {
          log('3rdtest')
          log(thing1[key][i])
          log(thing2[key][i])
          if (thing1[key][i] !=thing2[key][i]) {
            log('2ndtest')
            return false
          }
        }
        log(thing1)
        log('why not here?');
        return true;
       

      }

      //compare values
      if(thing1[key] !== thing2[key]) {
        log('thing1 key not equal thing2 key, '+thing1[key] + ' / '+thing2[key] +' /fail line 233')
        return false
      }
      
    }
    //Null/Undefined Finder (needs to be before empty finder)
    if (typeof thing1 == "object" && thing2 == null) {
      return false
    }
    //losing my nested null here
    //I'll try doing an if check to filter it?
    log(thing1)
    if(thing1 == null && thing2 != null) {
      log('here we are')
      return false
    }



    
    //Empty Object Finder
    if(Object.keys(thing1).length ==0 &&Object.keys(thing2).length==0) {
      return true;
    }
  }
  //compare values
  //should I have an object exempter here?
  //If this is still here, I left it in
  //appears to be working.
  if(typeof thing1 !== 'object') {
  if (thing1 !== thing2) {
    log('thing1 ='+thing1)
    log('thing2 =' +thing2)
    // if(thing1 ==='' && thing2 ==='') {
    //   return true
    // }
    log('failing at 242')
    return false
  }
  }
    
        //if object, recurse
      //check if nested arrays?
      //check num of keys/props
      //compare keys
      //compare values
  //compare values
  //if objects recursive call
  //once pass return true
  return true;
}
console.log(deepEqual({},{}))

//check length of keys
//check keys
//check values
//if object cycle back

//Things to test for
  //2 empty objects
  //2 numbers
  //2 falsey values
  //2 objects same props and values
  //2 objects same props and diff values
  //2 objects identical nested arrays
  //2 objects unique nested arrays
  //2 objects with nested objects
////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
