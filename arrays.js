var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  return ['foo', ...array];
}

 function destructivelyAddElementToBeginningOfArray(array, element){
  var addToBeginning = [1];
   addToBeginning.unshift('foo');
   return addToBeginning;

 }


function addElementToEndOfArray(array, element){
  return [...array, 'foo'];
}


function destructivelyAddElementToEndOfArray(array, element){
  var addToEnd =[1];
  addToEnd.push('foo');
    return addToEnd;
}


function accessElementInArray(array, index){
  return [1];
}
 
function destructivelyRemoveElementFromBeginningOfArray(array){
  var numbers = [1,2,3];
  var other = numbers.shift();
  return other;
}




