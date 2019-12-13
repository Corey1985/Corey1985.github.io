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
function makeContact(id, nameFirst, nameLast) {
    
//make a holder for a new contact object using the parameters
//then return it
let newCon = {
    id: id,
    nameFirst: nameFirst,
    nameLast: nameLast
};
    return newCon;
} 


function makeContactList() {
    
    //in var contacts the array will hold the contact list
    //length api is already created (returns length of contact list)
    //addContact: push a contact into the array
    //findContact: if contact exists return the object / else return undefined
    //removeContact: removes a contact from the list
        //since the contact is in an array, splice off contact
            //this will not only delete the the selected contact but also reindex the array removing undefined elements
    //BONUS: Print Contact Names: 
        //one full name per line
        //new line
        //no empty new lines 
        
    var contacts = [];
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        addContact: function(contact){
            return contacts.push(contact);
        },
        findContact: function(fullName){
            for(let i = 0; i < contacts.length; i++){
            if(contacts[i].nameFirst + " " + contacts[i].nameLast === fullName){
                return contacts[i];
            }
            return undefined;   
            }
        },
        removeContact: function(contact){
                 contacts.splice(contact,1);
        },
        printAllContactNames: function(){
            let printAll = [];
            for(let i = 0; i < contacts.length; i++){
               printAll.push(contacts[i].nameFirst + " " + contacts[i].nameLast);
            }
            return printAll.join("\n");
        }
        
    };
}




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
