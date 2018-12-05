var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  return ['foo', ...array];
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  var arr = [1];
    return arr.push('foo');
}

function addElementToEndOfArray(array, element){
  return [...array, 'foo'];
}

function destructivelyAddElementToEndOfArray(array, element){
  return array.push('foo');
}