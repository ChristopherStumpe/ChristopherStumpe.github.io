////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function min(x, y) {
//build a math min function
//I- two numbers
//o-smaller number
//C-
//E-
if (x < y) {
  return x
} else {
  return y
}
}

////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function isEven(num) {
//I-pos, whole number
//o-boolean on even-ness
//C-use recursive
//E-
  if(num < 0) {
    num = num * (-1)
    return isEven(num)
  } else if (num === 0) {
    return true
  } else if (num === 1) {
    return false
  } else {
    num = num-2
    return isEven(num);
  }
}

////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countChars(string, char) {
//Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function.
//I- string and char
//o-number of char in string
//C-
//E-
let counter = 0
  for(let i = 0; i <= string.length - 1; i++) {
    if (string[i] === char) {
      counter += 1;
    }
  }
  return counter;
}

////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countBs(string) {
  //Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters there are in the string.
//I-string
//o-number of B's
//C-
//E-
//loop to compare with a counter
  let counter = 0
  for(let i = 0; i <= string.length - 1; i++) {
    if (string[i] === "B") {
      counter += 1;
    }
  }
  return counter;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};
