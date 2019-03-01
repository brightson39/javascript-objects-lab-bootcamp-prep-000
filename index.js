var recipes = {}

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = Value;
  return object
}

function destructivelyDeleteFromObjectByKey(object, key){
  newObj = Object.assign({}, object);
  delete newObj.key;
  return newObj
}



function destructivelyDeleteFromObjectByKey({}, key){
return {}
}


