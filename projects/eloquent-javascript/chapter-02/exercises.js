
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//create a loop that accepts a number
//the number represents how many rows and columns need to be printed (starting at 1)
function triangles(num) {
  for(let i = 1; i <= num; i++){
    console.log("#".repeat(i));
  }
  return triangles;
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//print numbers 1 thr 100
//if they are multiples of 3 & 5 print "fizzbuzz"
//else if it is a multiple of 3 print "fizz" insead of the number
//else if for multiples of 5 print "buzz"
function fizzBuzz(min, max) {
    for(let i = min; i <= max; i++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log("fizzbuzz");
        }
        else if( i % 3 === 0){
            console.log("fizz");
        }
        else if( i % 5 === 0){
            console.log("buzz");
        }
        else{console.log(i);}
    }

   
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//create a function that prints a grid based off a number 
//number will describe the width and hight of the board
//using newline characters and " " console.log() each row

/*
example:
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
*/

function drawChessboard(num) {
  var board = "";
  for (var y = 0; y < num; y++) {
    board += "";
    for (var x = 0; x < num; x++) {
      if ((x + y) % 2 == 0)
        board += " ";
      else
        board += "#";
    }
    board += "\n";
  }
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
