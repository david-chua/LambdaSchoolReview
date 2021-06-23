Turn
[{}, {}, {}] to ['', '', ''] where the strings are name




const suspects = _.filter(videoData, function(suspectObject){
  return suspectObject.present;
})


const suspectsName = _.map( suspects, suspect => {
  return suspect.name
})
