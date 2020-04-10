//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
//take an object and return its values in an array
//I -object
//O -take the keys and place in array
//C -meh
//E -not that I can see
//a for in loop using push
let array = [];
for (var key in object) {
    array.push(object[key]);
}
return array;

} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
//I- object
//O- string, with each key seperated by a space
//C-
//E-
//for in loop again. 
let string = ""
for (var key in object) {
    if(string === "") {
        string += key
    } else {
    string += " " + key
}
}
return string
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
//I- object
//O- string, eacy value seperated by a space.
//C- only string values though
//E-
let string = ""
for (var key in object) {
   if(typeof object[key] === 'string') {
    string += " " + object[key]
   }
}
string = string.substring(1)
return string
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    //I-collection
    //O-object or array
    //C-
    //E-
    if (Array.isArray(collection) === true) {
        return 'array'
    } else if (typeof collection === 'object') {
        return 'object'
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    //I-string of one word
    //O- return the word with first letter in caps
    //C-
    //E-
    let array = string.split("")
    array[0] = array[0].toUpperCase()
    string = array.join("")
    return string
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    //I-string of words
    //O-each word capitalized
    //C-
    //E-
    
    //Ok, I should split the strings by spaces, then do the individual words.
    let arrayWords = string.split(" ");
    //Now I have an array of strings. So loop through the array to cap
    for(let i = 0; i <= arrayWords.length-1; i++) {
        let arrayInd = [];
        arrayInd = arrayWords[i].split("");
        arrayInd[0] = arrayInd[0].toUpperCase();
        arrayWords[i] = arrayInd.join("");
    }
    string = arrayWords.join(" ");
    return string;
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
//I- object with a name property
//O- string, 'Welcome <name>!'
//C-
//E-
//need holder for name
let name = object.name;
//Need to cap the first letter

name = name[0].toUpperCase() + name.slice(1, name.length)
//output!
return `Welcome ${name}!`;
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
//I- object with name and species
//O-return '<Name>' is a <Species>
//C- cap the first letters
//E-

//need holder for name and species
let name = object.name;
let species = object.species;
//Need to cap the first letter
name = name[0].toUpperCase() + name.slice(1, name.length);
species = species[0].toUpperCase() + species.slice(1, species.length);
//output!
return `${name} is a ${species}`;
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
//I-object
//O-if noises array return as string seperated by a space
//C-
//E-, if no noises return 'there are no noises'

    //need a noise box
    let noise = '';
    //If chain to populate
    //Check if it exists and is not just empty
    if(object.noises !== undefined && object.noises.length > 0) {
        
        //this needs to be a string, seperated by a space
        noise = object.noises.join(' ')
    } else {
        //all quiet
        noise = 'there are no noises';
    }
    return noise;
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
//I-string of words and a word
//O- return true if the word is in the string of words, otherwise false
//C-
//E-

//Thinking I'll split it into an array and loop over the array to search for the words
//Doesn't appear to be case sensitive

    //array time
    let array = [];
    //splittin this badboy at spaces
    array = string.split(" ");
    //loop the array
    for(let i = 0; i < array.length; i++) {
      //if chain to chek
      if(word === array[i]) {
          //pack it up boys, we found it
          return true;
      }
    }
    //bummer y'all
    return false;

}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    //I-name and object
    //O-add the name to the object's friends array then return the object
    //C-
    //E-
    //straight forward, just pushing the name
    object.friends.push(name)
    return object
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    //I-take a name and object
    //O-return true if name is a friend of object, false otherwise
    //C-
    //E-
    //Guess I should loop over the array to compare, if statement to bail once I find a match
    
    //if its undefined we can end this party early
    if(object.friends === undefined) {
        return false;
    }
    //loop loop city
    for(let i = 0; i < object.friends.length; i++) {
        //compare names
        if(name === object.friends[i]) {
            //nailed it
            return true
        }
    }
    //one lonely dude
    return false;
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    //I-name and array
    //O-array of nonfriends
    //C-don't output name in the final list
    //E-n/a
    //defining variable I'll use in this function
    //jerklist will be output
  let jerkList = [];
    //homie is player one
  let homie = {};
  //This function is to add a nonfriend to my output
  function addJerk(jerk) {
     //gotta make sure he's not already on here
      let jerkStatus = false;
      for(let i = 0; i < jerkList.length; i++) {
          if (jerk === jerkList[i]) {
              jerkStatus = true;
              break;
          }
      }
      if(jerkStatus === true) {
          return
      } else {
          jerkList.push(jerk);
          return
      }
  };
  //Inputting the array
  function checkFriends(array) {
    console.log('CheckFriends initiated')
    let dude = '';
    let friendStatus = false;
    //running a loop to check if each listed person is on
    //my friend's list or not
      for(let i = 0; i < array.length; i++) {
        console.log('start of dude loop for '+array[i].name)
        //making dude the name for this index
          dude = array[i].name;
          //a loop to compare dude to homie's friend list
          friendStatus = false;
          for(let i = 0; i < homie.friends.length; i++) {
             
              
              if(dude === homie.friends[i]) {
                  //so this dude is on the list, move to 
                  //next index
                  friendStatus = true;
                  console.log('changing friendStatus to true'+dude)
              } 
          }
        if (friendStatus === false) {
          addJerk(dude);
          console.log('addJerk, Dude:' + dude)
        }  
      }
      
  }

  for(let i = 0; i < array.length; i++) {
      if(name === array[i].name) {
          homie = array[i];
          // arrayMinus.splice(i, 1);
      }
  }
  checkFriends(array);
  //Filter homie's name from jerklist
  let filter = jerkList.indexOf(name)
  jerkList.splice(filter, 1)

  return jerkList
}


//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
//I-object, key, and value
//O-update key on object with new value
//C-
//E-if key does not exist, create it
object[key] = value;
return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
//I-object and an array of strings
//O-remove any properties on the object that are listed in the array
//C-
//E-
    //let's run a loop over the array
    for(let i = 0; i < array.length; i++) {
        //check to make sure a match is there
        if (array[i] in object) {
            //if match delete that badboy
            delete object[array[i]]
        }
    }
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
//I-array
//O-return array with all duplicates removed
//C-
//E-
//index of
//last index of
//if they aren't equal. splice out last index of
//Recurring function in loop?

  //loop through the array  AA
    //check index = i array[i] for value
    
    //Loopcycle BB
    //see if this value at array[i] occurs again later in the array
    //If so, Delete the value at the later index
      //don't go to next index yet, repeat this check until there's only one value instance in this array
      //Loopcycle BB
    
    //check the next index AA

  //Loop AA
  let iHolder = 0;
  let iValue = '';
  for (let i = 0; i < array.length; i++) {
    console.log('beginning  for loop AA, i='+i)
    //This loop will go through each index
    iHolder = i;
    iValue = array[i];
    function removeCopies(iHolder, iValue, array) {
      console.log('beginning function removeCopies, values of iHolder=' +iHolder+'/value of iValue='+iValue+'/value of array'+array)
      if (array.indexOf(iValue) === array.lastIndexOf(iValue)) {
        console.log('passed IF equal check')
        return //what value? array?
      } else {
        console.log('failed IF equal check')
        //magic happens here
        //splice treatment
        // how to write the index of lastIndex array[array.lastIndexOf(iValue)]
        console.log('index to delete=' +array.lastIndexOf(iValue))
        array.splice(array.lastIndexOf(iValue), 1)
        console.log('array post splice /'+ array)
        //return removecopies
        return removeCopies(iHolder, iValue, array)
      }
      

    }
    removeCopies(iHolder, iValue, array);
      //Loop BB
      //So an actual loop is probably not the best choice for this. I guess i'll try an if chain in a function?
      //Starting here will be loop BB. This will check the value of the current i against the rest of the loop. once this passes the individuality test it will bail out and go to next cycle of AA

      //End of loop BB


    //End of loop AA
  
  }
  return array;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}