
function makeRequest(location){
  return new Promise((resolve, reject) => {
    if (location === 'Amazon'){
      resolve('Amazon awaits')
    } else {
      reject('This location is for amazon employees only');
    }
  })
}


function processRequest(response){
  return new Promise((resolve, reject) => {
    console.log('processing response');
    resolve(`Extra information + ${response}`)
  })
}


// makeRequest('Amazon')
//   .then(response => {
//     console.log('Response received')
//     return processRequest(response)
//   }).then(processedResponse => {
//     console.log(processedResponse)
//   }).catch(err => {
//     console.log(err);
//   })



async function doWork(){
  try{
    const response = await makeRequest('Facebook');
    console.log('Received response');
    const processedResponse = await processRequest(response)
    console.log(processedResponse)
  } catch(err){
    console.log(err)
  }

}


doWork()
