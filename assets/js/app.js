var galleryBoxContent = document.getElementsByClassName('galleryBoxContent')
var galleryHeading = document.getElementsByClassName('galleryHeading')


function servicesHeadingFun() {
  if(servicesHeading[0].getClientRects()[0].top < window.innerHeight /1.2){
    servicesHeading[0].style.transform = 'scale(1)';
    servicesSmallHeading[0].style.opacity = '1';
  }
}

function galleryBoxContentShowText() {
  if(galleryBoxContent[0].getClientRects()[0].top < window.innerHeight / 1.2 ){
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


window.addEventListener('scroll',()=>{
  galleryBoxContentShowText()
})
