/**
 *Loops:
 *0. Loops are used to execute a code block multiple times
 *1. If you're not careful with your conditions you can run an infinite loop which will crash your compiler.
 *2. There are 3 main types of loops we use, For, For-In, & While loops.
 */
 
 //1. Explain while, for, and for-in loops //
 //For Loops:
 //For Loops are my go-to loop. Good for most generic applications.
 var myVar = 5;
 
 for(let i = 1; i < myVar; i++) {
     console.log(i);
 }//prints 1, 2, 3, 4 to the console. It doesn't print 5 because once i is equal to five it is no longer less than 5 (myVar).
 //The first part of the rule declaration is the counter. You have to initiate a counter start value. The next is the ending. 
 //You dictate when the loop will stop running. Once the counter no longer satisfies the conditions here, the loop ends.
 //The final part is the incrementer, this indicates how you want the counter to change after each cycle.
 
 //For-In Loops
 //For-In Loops are particularly useful for looping through objects.
 var myObject = {
     'key1': 1,
     'key2': 2,
     'key3': 3
 }
 
 for(var key in myObject) {
     console.log(key)//Will print key1, key2, key3
 }
  for(var key in myObject) {
     console.log(myObject[key])//will print 1, 2, 3
 }
 //A for-in loop cycles through each key of the designated object.
 
 //While Loops
 //While loops execute while a condition is true
 var i = 1
 while (i < 10) {
     console.log(i)
     i++
 }//prints 1, 2, 3, 4, 5, 6, 7, 8, 9
 //It's imperative in a while loop to add a counter increment to the end so you don't get stuck in an infinite loop.
 
 //2.Be able to loop any number of times, forward counting up to some limit, backward counting down to 0
 var startVar = 1 //arbitrary, but 1 seems like a good start point
 var varLimit = 10 //arbitraty
 var iTest //just declaring
 for (iTest = startVar; iTest <=varLimit*2; iTest++) { //Setting iTest to my start var, I doubled the end value since we're counting up and down, and incrementing by one
     if(iTest<=varLimit) { //While we're counting up, ezpz
         console.log(iTest)//Just printing our counter, this will print 1-10
     } else { //Now it gets interesting
         console.log(varLimit*2-iTest) //once we're halfway there we take the limit divided by 2 and subtract the counter from it to ease back down to zero. This will print 9-0
     }
 }
 
 //3.Loop over an Array, forwards and backwards
  var thisArray = ["start here", "next this", "how about now", 'one more', "last one"];
  function myArrayCounter (myArray) {
      let doubleLength = myArray.length*2
      for (var iCount = 0; iCount <= doubleLength; iCount++) {
          if(iCount < myArray.length) {
              console.log(myArray[iCount]);
              
          } else if (iCount == myArray.length) {
              console.log(myArray[iCount-2])
              iCount = iCount+2
              
          } else {
              console.log(myArray[doubleLength-iCount])
              
          }
          
      }
      
  }

myArrayCounter(thisArray);

 //4.Loop over an Object
 var thisObject = {
  key1: 'this key',
  key2: 'this other key',
  key3: 'derivative'
 }
 
 for (var key in thisObject) {
  console.log(thisObject[key])
 }