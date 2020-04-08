
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(number) {
//I number
//O a triangle console logged, that number high, and that number wide.
//loop seems like a good place to start
//I'll use += to concat hash
let hash ='';
for (let i = 1; i <= number; i++) {
  hash += '#';
  console.log(hash);
}
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz(start, end) {
  //I- start and end values
  //O- integers, inclusive, from start to end with multiples of 3, and 5 printing strings
  //Loop for sure. I'll use if statements to check for multiples
  for(let i = start; i <= end; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz');
    } else if (i % 3 === 0) {
      console.log('fizz');
    } else if (i % 5 ===0) {
      console.log('buzz');
    } else {
      console.log(i);
    }
  }
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(number) {
//uhhhhhh
//I number (size of board)
//O chessboard made of hashes and spaces, each side the length of the input number
//So. This looks scary, but it's still really similar to the triangle problem in essence.
//So that means I should use a loop to get the number implemented
  let oddLines = '';
  let evenLines = '';
  
  //This is my loop to build my odd lines
  for(let i = 1; i <= number; i++) {
    if ( i % 2 === 0) {
      oddLines += '#';
    } else {
      oddLines += ' ';
    }
  }
  //loop to build even lines. They're opposite hashes
    for(let i = 1; i <= number; i++) {
    if ( i % 2 === 0) {
      evenLines += ' ';
    } else {
      evenLines += '#';
    }
  }
  //Just gonna insert my new line to the end of each
  oddLines += '\n';
  evenLines += '\n';
  
 //Since it should be printed in one go I'll make a board variable
  let board = ''
  
  //putting it all together
  for(let i = 1; i <= number; i++){
    if (i % 2 === 0) {
      board += evenLines;
    } else {
      board += oddLines;
    }
  }
  //print this fool!
  console.log(board);

}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
