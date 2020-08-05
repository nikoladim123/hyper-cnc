// header anims
var galleryBoxContent = document.getElementsByClassName('galleryBoxContent')
var galleryHeading = document.getElementsByClassName('galleryHeading')

function servicesHeadingFun() {
  if(servicesHeading[0].getClientRects()[0].top < window.innerHeight /1.2){
    servicesHeading[0].style.transform = 'scale(1)';
    servicesSmallHeading[0].style.opacity = '1';
  }
}

function galleryBoxContentShowText() {
  if(galleryBoxContent[0].getClientRects()[0].top < window.innerHeight / 1.4 ){
    galleryHeading[0].style.filter = 'blur(1px)';
    setTimeout(function () {
      galleryHeading[0].style.top = '-25vw';
    }, 500);
  }
  else{
    galleryHeading[0].style.filter = 'blur(100vw)';

    setTimeout(function () {
      galleryHeading[0].style.top = '-20vw';
    }, 500);
  }
}


// airsoft section anims


var airSoftSection = document.getElementsByClassName('airSoftSection')
var airsoftOverlay = document.getElementsByClassName('airsoftOverlay')
var airsoftHeading = document.getElementsByClassName('airsoftHeading')

function airSoftSectionFun() {
  if(airSoftSection[0].getClientRects()[0].top < window.innerHeight /1.5){
    airsoftOverlay[0].style.background = 'rgba(0,0,0,0)';
    airsoftHeading[0].style.color = 'black';
  }else{
    airsoftOverlay[0].style.background = 'rgba(0,0,0,0.9)';
    airsoftHeading[0].style.color = 'white';
  }
}


// windows events
window.addEventListener('scroll',()=>{
  galleryBoxContentShowText()
  airSoftSectionFun()
})
