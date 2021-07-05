let cool = "./img/cool.jpeg";
let doctor = "./img/doctor.jpeg";
let stare = "./img/stare.jpeg";
let yawn = "./img/yawn.jpeg";

let imgArray = [cool, doctor, stare, yawn]

let currentImgIndex = 0;

let currentImage = imgArray[currentImgIndex]

console.log('hello here"')
console.log(currentImage)
let imgContainer = document.querySelector('.photo');
imgContainer.src = currentImage;


function previous(){
  if (currentImgIndex === 0){
    currentImgIndex = imgArray.length -1 ;
    changeImage()
  } else {
    currentImgIndex--
    changeImage()
  }
}

function next(){
  if (currentImgIndex === imgArray.length - 1){
    currentImgIndex = 0
    changeImage()
  } else {
    currentImgIndex++
    changeImage()
  }
}

function changeImage(){
  currentImage = imgArray[currentImgIndex]
  imgContainer.src = currentImage;
}


let previousButton = document.querySelector('.previous')
previousButton.addEventListener('click', previous)


let nextButton = document.querySelector('.next');
nextButton.addEventListener('click', next);
