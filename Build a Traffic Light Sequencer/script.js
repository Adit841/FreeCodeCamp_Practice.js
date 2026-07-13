const config1 = {
  fault: false,
  phases: [
    { color: "green", duration: 5 },
    { color: "yellow", duration: 2 },
    { color: "red", duration: 4 }
  ]
};

const config2 = {
  fault: false,
  phases: [
    { color: "red", duration: 3 },
    { color: "yellow", duration: -2 },
    { color: "green", duration: 6 }
  ]
};

const config3 = {
  fault: true,
  phases: [
    { color: "green", duration: 5 },
    { color: "yellow", duration: 2 },
    { color: "red", duration: 6 }
  ]
};

const config4 = {
  fault: false,
  phases: []
};

function runSequence(config, cycles){
  if(config.fault){
        console.log("Faulted phase!")
        return 
      }
      if(config.phases.length === 0){
        console.log("No phases found")
      }
  for(let i =0; i < cycles; i++){
    for(let phases of config.phases){
      if(phases.duration < 0){
        console.log("Invalid phase detected")
      }else{
      console.log(`Switching to ${phases.color} for ${phases.duration} s`)
    }}
  } 
}


function generateTimeline(config, cycles){
  let sum = 0;
  let timeline = [];

  for(let i = 0; i < cycles; i++){
    for(let phases of config.phases){
      sum += phases.duration;
      timeline.push(sum)
    }
  }

  return timeline;
}