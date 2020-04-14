// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(args) {
  //Use the reduce method in combination with the concat method to “flatten” an array of arrays into a single array that has all the elements of the original arrays.
  //I-arrays
  //O-single sleek array
  //C-
  //E-
  //use concat and reduce
  //create result array
  //search down to lowest array level
  //reduce with concat to make the new array
  
  function grab(value, nextValue) {
    let output = []
    output = value.concat(nextValue)
    return output
  }

  //need to go to next level of arrays. 
  
  
//   for(let i =0; i<args.length; i++) {
//     if(Array.isArray(args[i])==true) {
//     flatten(args[i])
//   }
// }
let result = [];
result = args.reduce(grab)

  // for(let i = 0; i < args.length; i++) {
  //   result = args[i].reduce(grab)
  //}

  // let result = args.reduce(grab)
  return result
}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
function loop(value, testFun, updateFun, bodyFun) {
while(testFun(value)) {
    bodyFun(value);
    value = updateFun(value);
  }
}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(array, test) {
  //I-array and test
  //O-true if every element passes, false if any fail
  //C-
  //E-
  for(let i = 0; i <array.length;i++) {
    if(test(array[i]) == false) {
      return false
    }
  }
  return true;
}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function dominantDirection(text) {
  
  

  //I-text
  //O-determine the dominate direction in a string of text, and output that
  //C-
  //E-
  
  //use characterscript and countby
  
  //count characters
  //filter out non-helpful ones
 
  //
  let scripts = countBy(text, char=> {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  }).filter(({direction}) => direction != "none");
console.log(scripts, 'scripts')

  let highest = {
    count: -1
  };
  for (let i = 0; i< scripts.length; i++){
    if (scripts[i].count > highest.count && scripts[i].name != 'none'){
      highest = scripts[i];
    }
  }
  return highest.name;


  let total = scripts.reduce((n, {count}) => n + count, 0);
  if (total == 0) return "No scripts found";
console.log(total)
  scripts.reduce((preR, element)=>{
    
  },[])
//filter out none's
//console.log(SCRIPTS.filter(s => s.direction == "ttb"));
console.log(scripts.filter(name => name.direction != 'none'))

//reduce to find answer
  function characterCount(script) {
  return script.ranges.reduce((count, [from, to]) => {
    return count + (to - from);
  }, 0);
}
}

  
   
  
// function characterScript(code) {
//   for (let script of SCRIPTS) {
//     if (script.ranges.some(([from, to]) => {
//       return code >= from && code < to;
//     })) {
//       return script;
//     }
//   }
//   return null;
// }

// console.log(characterScript(121));

// // → {name: "Latin", …}function countBy(items, groupName) {
//   let counts = [];
//   for (let item of items) {
//     let name = groupName(item);
//     let known = counts.findIndex(c => c.name == name);
//     if (known == -1) {
//       counts.push({name, count: 1});
//     } else {
//       counts[known].count++;
//     }
//   }
//   return counts;
// }

// console.log(countBy([1, 2, 3, 4, 5], n => n > 2));
// // → [{name: false, count: 2}, {name: true, count: 3}]
// 

// function textScripts(text) {
//   let scripts = countBy(text, char => {
//     let script = characterScript(char.codePointAt(0));
//     return script ? script.name : "none";
//   }).filter(({name}) => name != "none");

//   let total = scripts.reduce((n, {count}) => n + count, 0);
//   if (total == 0) return "No scripts found";

//   return scripts.map(({name, count}) => {
//     return `${Math.round(count * 100 / total)}% ${name}`;
//   }).join(", ");
// }

// console.log(textScripts('英国的狗说"woof", 俄罗斯的狗说"тяв"'));

// → 61% Han, 22% Latin, 17% Cyrillic

//Your solution might look a lot like the first half of the textScripts example. You again have to count characters by a criterion 
//based on characterScript and then filter out the part of the result that refers to uninteresting (script-less) characters.

//Finding the direction with the highest character count can be done with reduce. If it’s not clear how, refer to the example 
//earlier in the chapter, where reduce was used to find the script with the most characters.


// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
