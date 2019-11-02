function addElementToBeginningOfArray(array,element) {
  var newArray = [...array]
  newArray = newArray.unshift(element)
  return(newArray)
}

function destructivelyAddElementToBeginningOfArray(array,element){
  array = array.unshift(element)
  return(array)
}

function addElementToEndOfArray(array,element){
   var newArray = [...array]
  newArray = newArray.push(element)
  return(newArray)
}

function destructivelyAddElementToEndOfArray(array,element){
  array = array.push(element)
  return(array)
}

function accessElementInArray(array,index){
  return(array[index])
  
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return(array)
}

function removeElementFromBeginningOfArray(array) {
  return(array.slice(1))
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array = array.pop()
  return(array)
}

