// Write your solution in this file!
let driver = {};


function updateDriverWithKeyAndValue (driver, key, value){
 let copyOfDriver = {...driver};
 copyOfDriver[key] = value;
 return copyOfDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
driver[key] = value;
 return driver;
}

 function deleteFromDriverByKey(driver,key){
   let copy = {...driver};
 delete copy{key};
 return copy;
 }
 
function destructivelyDeleteFromDriverByKeyAndValue(driver,key)

return driver
)
  