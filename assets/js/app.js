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
  }
  else{
    galleryHeading[0].style.filter = 'blur(100vw)';
  }
}


window.addEventListener('scroll',()=>{
  galleryBoxContentShowText()
})
