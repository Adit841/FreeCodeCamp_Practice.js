function normalizeUnits (manifest ) {
 if(manifest.unit === "lb"){
  return {
    ...manifest,
    weight : manifest.weight * .45,
    unit : "kg" 
  };
 }
 return {...manifest}

}

function validateManifest(manifest){
  const error = {};
  if(manifest.containerId === undefined){
    error.containerId = "Missing" 
  }else if(typeof manifest.containerId !== "number" || !Number.isInteger(manifest.containerId) || manifest.containerId <=0){
    error.containerId = "Invalid"
  }

  
  if(manifest.destination === undefined){
    error.destination = "Missing" 
  }else if(typeof manifest.destination !== "string"  || manifest.destination.trim().length === 0){
    error.destination = "Invalid"
  }
  
  if(manifest.weight === undefined){
    error.weight = "Missing" 
  }else if(typeof manifest.weight !== "number"  || manifest.weight <= 0 || Number.isNaN(manifest.weight) ){
    error.weight = "Invalid"
  }
  if(manifest.unit ===undefined){
    error.unit = "Missing" 
  }else if( manifest.unit !== "kg" &&manifest.unit !== "lb"){
    error.unit = "Invalid"
  }
  if(manifest.hazmat === undefined){
    error.hazmat = "Missing" 
  }else if(typeof manifest.hazmat !== "boolean"){
    error.hazmat = "Invalid"
  }


  return error;
  
}

function processManifest (manifest ){
 const error = validateManifest(manifest);

 if(Object.keys(error).length === 0){
  console.log(`Validation success: ${manifest.containerId}`)
  const normalized = normalizeUnits(manifest);
    console.log(`Total weight: ${normalized.weight} kg`);
 } else {
  console.log(`Validation error: ${manifest.containerId}`);
    console.log(error)
 }

}