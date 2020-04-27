// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
  //base case
if(n === 1) return 1 ;
if(n < 0) return null;
if(n === 0) return 1;
// recursive case
 return n * factorial(n-1);
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array) {
  //base case
  // stop array.length === 0
  // return 0, we try to return number
  if(array.length === 0) return 0;
  return array[0] + sum(array.slice(1));
};


// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  //we need to flatten out this badboy.
  //do an array check to see if we need to recurse?
  //base case
  if (array.length === 0) {
    return Number(0)
  }
  //recursive case
  if(Array.isArray(array[0])) {
    arraySum(array[0])
  }
  return Number(array[0]) + Number((arraySum(array.slice(1))))
};

// 4. Check if a number is even.
var isEven = function(n) {
  //if n === 1 returns false
  //then if n === 0 return true
  //recursive case, num - 2
  n = Math.abs(n)
  
  if(n===1) return false;
  if(n===0) return true;
  return isEven(n-2);
  
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(number) {
  // base case
  if (number === 0) return 0; 
  // recursive case
  number = number > 0 ? number - 1 : number + 1;
  return number + sumBelow(number);
};
// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y) {
 // start and end x + 1 && y - 1
 // swamp x and y, where y is larger
if(x > y) {
if(x - y <= 1) {
   return [];
 }
 return [x - 1].concat(range(x - 1, y));
}
 // empty array if no integers in the array
// base case, seed array
 if(y - x <= 1) {
   return [];
 }
// return x + range(x+1)
console.log('return', [0]);
return [x + 1].concat(range(x + 1, y));
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
//base case: when the exponent is equal to 0, return 1
  if (exp === 0){
    return 1;
  }
  //if exponent is a negative number
  if (exp < 0){
//return 1 divided by the function call to exponent, 
//where the base is positive and exp is negativ
    return 1 / exponent(base, -exp);
  }
//if exponent is a positive number, multiply the base by a recursive call to exponent, 
//where the value of the exponent is altered to get closer to meeting the base case
    return base * exponent(base, exp - 1);
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
  var powerOfTwo = function(num) {
  // base case:
  // num equal to 0, return false
  // num equal t0 1, return true
  // num divided by 2 and not 0, return false
  if (num === 0) return false;
  if (num === 1) return true;
  if (num % 2 !== 0) {
    return false;
  }
  // recursive case: return function call by itself, divided by 2
  return powerOfTwo(num/2);
};

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string) {
  //base case: string.;ength ===0, return  empty string ""
  if(string.length === 0) {
    return '';
  } 
  return string[string.length-1] + reverse(string.slice(0, string.length-1));
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  //base case:string is empty, string.length is one or zero
  //if case for false, first equal last, using case
 
 //We run a loop, that has a conditional, that if it is a space, remove it?
 //make it ignore spaces in the check
  string = string.replace(' ', '')
  if(string === '' || string.length===1) {
    return true
  }
  if(string[0].toUpperCase() !== string[string.length-1].toUpperCase()) {
    return false
  }
  //recursive: call function by itself, passing string 
    //before return, put an if check, and if the next value that we'll identify is a space, we exclude that int he slice
    
  // if(string[1] === ' ' && string[string.length-2] === ' ') {
  //   return palindrome(string.slice(2, string.length-1))
  // } else if (string[1] === ' ') {
  //   return palindrome(string.slice(2, string.length-1))
  // } else if (string[string.length-2] === ' ') {
  //   return palindrome(string.slice(1, string.lenth-2))
  // }
  
  return palindrome(string.slice(1, string.length-1))
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y, rem = 0) {
  //yuck. oh man. ew. ok. how to approach this.
    //def div x/y. that will give some decimal nonsense. so maybe the end condition is when x/y is an integer?
      //we bump x. or maybe y. hm. I think x. I think we sub one from x until we have an integer, and everytime we do we add one to rem for the count
      
  
  //base case
  if(Number.isInteger(x/y)) {
    return rem
  }
  rem = rem+1
  return modulo(x-1, y, rem)
  
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
var multiply = function(x, y) {
  if(x === 0) {
    return 0; 
  } 
  if (x < 0 ){
  return -y + multiply(x + 1, y);
  } else {
  return y + multiply(x -1, y);
  }
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y, count = 0) {
  //gross. ok. ummmmmm
    //just fancy subtraction right?, take x-y repeatedly?
    
  //base case is just when x-y is <= zero
  if(x-y <= 0) {
    return count;
  }
  //recurse
    //subtract. what to do when its not even though
  count++
  return divide(x-y, y, count)
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  
  if(str1==='' && str2===''){
    return true;
  }
  if(str1.slice(0, 1) !== str2.slice(0, 1)) {
    return false;
  }
  
  return compareStr(str1.slice(1), str2.slice(1))
  
  // if(str1[0] !== str2[0]) {
  //   return false
  // }
  // return compareStr(str1.slice(1), str2.slice(1))
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str){
  //base case
  // str.length
  // return str
  if(str.length === 1) return [str];
  if(str.length === 0) return [];
  
  //recursive
  return [str.slice(0, 1)].concat(createArray(str.slice(1)));
  
};

// 17. Reverse the order of an array
var reverseArr = function (array) {
  //Base Case
  //When array.length is zero, return empty array to start chain
  if(array.length === 0) return [];

  //recursive
    //use slice to remove from end of array
    //once we runout concat will chain them in reverse order
  return (array.slice(array.length-1).concat(reverseArr(array.slice(0,array.length-1))))
};


// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  //base case is when length is zero, return empty array
  if( length === 0) return [];
  //recursive
  //use concat to call function
  return [value].concat(buildList(value, length-1))
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  //if the array at zero isn't the value, remove it from the recursion. 
  //the base case, is a loop that runs through array, and if every value of array is equal value, it returns array.length
  
  //recursive, if the element doesnt equal value, we return the array without it.
  
  //base
    //if array.length = 0, return 0
    
  
  //recursive
    //2 things can happen
      //1, value !== array[0]
        //slice it off and invoke function again
      //2 OR, the value and array[0] are equal
        //Then we want to return 1 + invoking function with array sliced off
  //base
  if(!array.length) return 0;
  
  //recursive
  if(value !== array[0]) {
    return countOccurrence(array.slice(1), value)
  }
  return 1 + countOccurrence(array.slice(1), value)
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  // when array.lenght is 0
  // return empty array []
  //let arr = [];
  if(!array.length) return [];
  // rec case: callback(array[0].concat(array.slice(1), callback))
return [callback(array[0])].concat(rMap(array.slice(1), callback));
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  //base case: f the number is negative, return null
   if (n < 0){
  return null;
  } else if(n === 1){
    return 1;
    //if the number is strictly equal to 1, return 1 
  } else {
    return nthFibo(n - 1) + nthFibo(n - 2);
    //these are numbers so dont concat, just add
  }
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input) {
    // base case: no words in the array
  if (input.length === 0) {
    return input;
  }
  // make our new array 
  //have the current index, concat the rest with recursion
  let newArray = [].concat(input[0].toUpperCase(), capitalizeWords(input.slice(1)));
  // return our new array
  return newArray;
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array) {
  // base case: no words 
   if (!array.length) {
    return [];
  } return [array[0][0].toUpperCase() + array[0].slice(1)].concat((capitalizeFirst(array.slice(1))));
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj = {}) {
  
  //base case
  if(str.length === 0) {
    return obj;
  }
  
  //recursive case
  // if the letter is in the object, then we'll add 1 to it
  //if the letter is not in the object, we will add it and set it to one.
  if(obj[str[0]]) {
    obj[str[0]] ++;
  } else {
    obj[str[0]] = 1;
  }
  
    return letterTally(str.slice(1), obj)
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list) {
  // base case: when no numbers
  if (list.length === 0) {
    return list;
  }
  if (list[0] === list[1]) {
  return compress(list.slice(1));
  }
  // recursion concatinating the current index with the rest. 
  return [].concat(list[0], compress(list.slice(1)));
};

// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
  //base case, return array literal at length zero
  if(array.length===0) return [];
  //recursive
  //starting a counter here, setting it to 1 so if the array[0] isn't a zero, it slices regulary
  let zeroCount = 1;
  //if we're dealing with a zero we need to check the next index
  if(array[0] === 0) {
    //setting the count to zero here to make index math work starting at zero
    zeroCount = 0
    do{
      //add one for each zero
      zeroCount +=1;
    }
    //is the next one a zero?, add to the slice count
    while(array[0+zeroCount] ===0)
  }
  // return this number plus the rest of array, if next indexes are zeros, slice them off
  return([array[0]].concat(minimizeZeroes(array.slice(zeroCount))))
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  //I'm adding a counter for the negative sign
  //base case
  if(array.length === 0) {
    return []
  }
  
 let pos = Math.abs(array[0])
 let neg = Math.abs(array[1])
 neg = -1*neg;
 
  return [pos].concat([neg]).concat(alternateSign(array.slice(2)))
  
  
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
  //I'll need to identify each number in the string
    //then replace it with the word equivalent
      //do the let declaration within the if statement.
  //just go character by character
  
  //Base case, string length is zero
  if(str.length === 0) {
    return '';
  }
  //recursive case
    //trickier. I don't need to check if its a letter. I think I just make a big if statement to run each character through?
    //zero
    if(str[0] === '0') {
      return 'zero' + numToText(str.slice(1)) 
    }
    //one
     else if(str[0] === '1') {
      return 'one' + numToText(str.slice(1)) 
    }
    //two
     else if(str[0] === '2') {
      return 'two' + numToText(str.slice(1)) 
    }
    //three
     else if(str[0] === '3') {
      return 'three' + numToText(str.slice(1)) 
    }
    //four
     else if(str[0] === '4') {
      return 'four' + numToText(str.slice(1)) 
    }
    //five
     else if(str[0] === '5') {
      return 'five' + numToText(str.slice(1)) 
    }
    //six
     else if(str[0] === '6') {
      return 'six' + numToText(str.slice(1)) 
    }
    //seven
     else if(str[0] === '7') {
      return 'seven' + numToText(str.slice(1)) 
    }
    //eight
     else if(str[0] === '8') {
      return 'eight' + numToText(str.slice(1)) 
    }
    //nine
     else if(str[0] === '9') {
      return 'nine' + numToText(str.slice(1)) 
    }
    //none of the above
     else {
      return str[0] + numToText(str.slice(1)) 
    }
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------
