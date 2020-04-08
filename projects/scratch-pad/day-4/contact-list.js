// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following API:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 * 
 * BONUS : add a printAllContactNames() Function to your makeContactList() factory, so that the 
 *         contact-list returned has an all() API. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Your Mom
 *          
 *          WARNING: To pass the bonus test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //

//I-Id, first, and last name
//O-contact object
//C-not really?
//E- None
function makeContact(id, nameFirst, nameLast) {
    //Setting up object return
    return {
        //need to use this structure-- {id: '1', nameFirst: 'Max', nameLast: 'Gaudin'}
        "id": id,
        "nameFirst": nameFirst,
        "nameLast": nameLast
    }


} 

//I-
//O-returning an object
//This object consists of the following API:
//length, addcontact, findcontact, remove contact
//Those will all be keys, with their values as functions 
//C-
//E-
function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
     //decided to use an array for my contacts
    var contacts =[];
    var api = {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        addContact: function(contact) {
            contacts.push(contact)
            
           
            
            //I- contact object. This will come from the makecontact function from above
            //O- add the contact object to the contact list 'contacts'
            //C
            //E
        },
        findContact: function(fullName) {
            //I- full-name string
            //O- corresponding contact object from contact list
            //C
            //E- return undefined if not found
           
           
            //Need a temp var for holding corresponding contact
            //Take fullName string input and split it by space
            let tempSplit = fullName.split(" ")
            let tempFirst = tempSplit[0]
            let tempLast = tempSplit[1]
            //a for loop should help search the contact list
            for (let i = 0; i < contacts.length; i++) {
                if(contacts[i]['nameFirst'] == tempFirst && contacts[i]['nameLast'] == tempLast) {
                    return contacts[i]
                }
            }
            
            
            
           
        
            return undefined
        },
        removeContact: function(contact) {
            //I- contact to be removed
            //o- remove this from contactlist
            //C
            //E
         
           
           //input for remove contact full contact object
           //function: splice using the index of that contact object in contacts
           //Take the input, and find the index from that
           //use the id from the input contact to find the index in contacts by looping
           //use that to splice out the contact
           
           for (let i = 0; i < contacts.length; i++) {
               if (contact.id == contacts[i].id) {
                   contacts.splice(i, 1)
                }
           
            }
        },
        printAllContactNames: function() {
        
        
   


            //on execution this function should generate a string within itself containing all of the contacts in the contact object.
            //Best bet for this will be a loop.
            //The loop will need an if statement to check if its the last index so it doesnt add the newline after that one.
            //then this function will need to return that string.
            let printAll =""
            for (let i=0; i<contacts.length; i++) {
               if(i<contacts.length-1) {
                   printAll = printAll + contacts[i].nameFirst + " " + contacts[i].nameLast + "\n"
               } else {
                   printAll = printAll + contacts[i].nameFirst + " " + contacts[i].nameLast
               }
            }
            return printAll;
            
        }
    
    
//         
        
    }
    return api;
}

var contactTest = makeContactList()
contactTest.removeContact(contactTest['findContact']('test test'))



// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
