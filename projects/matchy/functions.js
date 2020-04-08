/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////



//I - array & name (string)
//O - animal's object OR null
//C - I don't think there are any
//E - null if it doesnt exist
//I want to return the object I'm looking for. 
function search (aniArr, aniName) {
    //My search
    //Make a loop to search the array
    //Array has index & value, using the value
    //in this case the array is filled with objects.
    //So I need to grab the name of the animals from the objects that are filling the array and compare them with the input name
    
    //Loop here
    //For loop?
    for (let i = 0; i <= aniArr.length-1; i++) {
        //Grab my object -name
        if(aniArr[i].name === aniName) {
            
    //This should be the object OR null if the object isn't found
    return aniArr[i];
        }
        
    }
    return null
    //null option goes here
    
}

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////


//I - 3 designated parameters: animals (array), name(string), replacement(object)
//O- object
//C-
//E- do nothing if not found
//Search for our animal. if found, replace, if not do nothing

function replace(animals, name, replacement) {
    
    //If block, if its the object, replace, if its null bail out of function
    if( search(animals, name) === null) {
    } else {
        //replace part
        //They're both objects, but we're swappin in array
        //splice?
        let poorGuy = search(animals, name) 
        //we need the index of poorguy..
        animals.splice(animals.indexOf(poorGuy), 1, replacement)
    }
    //This will either be null, or an object.
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////


//I - animal array, name
//O- no return, but remove a designated animal array
//C
//E- if animal doesnt exist, do nothing
//So take input, use search function to locate it, then delete using splice. Use if statement to do nothing if necessary

function remove (animals, name) {
    //Search to return array
    let beGone = search(animals, name); //This will give me a return of the specific animal object to be deleted
    if (beGone !== null) {//This is to make sure it only deletes if the search was successful
        animals.splice(animals.indexOf(beGone),1)
    }
    
    
    
}

//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////



//I - animals, animal
//O - add new object to animals array if all conditions pass
//C - needs name greater 0, species greater 0, unique name.
//E- none?

function add (animals, animal) {
    //This part should check conditions satisfied
    let test;
    //Name greater zero
    if (animal.name.length === 0) {
        test = "fail";
    }
    //species greater zero
    if (animal.species.length === 0) {
        test = 'fail';
    }
    //unique name
    //loop to check animals array names
    for(let i = 0; i<animals.length; i++) {
        if (animals[i].name === animal.name) {
            test = "fail";
        }
    }
    //Here is where I'll add it to animals array if it passes. If statement gate I guess
    if (test !== 'fail') {
        animals.push(animal);
    }
}

/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
