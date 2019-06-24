var chocolateBars= ["snickers", "hundred grand", "kitkat", "skittles"];

  
function addElementToBeginningOfArray(array, element){
  const a= [1]; 
  const b=["foo",... array];
  return b;
}

function destructivelyAddElementToBeginningOfArray(array, element){
<<<<<<< HEAD
  var a =[1];
  a.unshift( 'foo');
=======
  var a=[1];
  a= ("foo", ... a );
>>>>>>> ffec2c2d1f855ccb9ebf39e01844c69471beedfa
  return (a);
}

function addElementToEndOfArray(array, element){
  const a= [1]; 
  const b=[ ...array, "foo" ];
  return b;
}

function destructivelyAddElementToEndOfArray(array, element){
  var a=[1];
  a.push ("foo");
  return (a);
}

function accessElementInArray(array, index){
  var a=[ 1, 2, 3 ];
  return (a[2]);
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  var a=[ 1, 2, 3 ];
  a= a.slice (1);
  return (a);
}

function removeElementFromBeginningOfArray(array){
  var a=[ 1, 2, 3 ];
  b= a.slice (1);
  return (a);
}

function destructivelyRemoveElementFromEndOfArray(array){
  var a=[ 1, 2, 3 ];
   a= a.slice (0, a.length - 1);
  return (a);
}

function removeElementFromEndOfArray(array){
  var a=[ 1, 2, 3 ];
  b= a.slice (0, a.length - 1);
  return (a);
}

