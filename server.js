var firstIndex = 0;
function automaticslide(){
    setTimeout(automaticslide, 2000);
    var pics;
    const img = document.querySelectorAll('slideshow-container1');
    for(pics=0; pics<slide.length;pics++){
        img[pics].computedStyleMap.display = "none";
    }
    firstIndex++;
    if(firstIndex > img.length){
        firstIndex =1;
    }
    img[firstIndex -1].computedStyleMap.display = "block";
}
automaticslide();


var secondIndex = 0;
function automaticslide(){
    setTimeout(automaticslide, 2000);
    var pics;
    const img = document.querySelectorAll('slideshow-container2');
    for(pics=0; pics<slide.length;pics++){
        img[pics].computedStyleMap.display = "none";
    }
     secondIndex++;
    if(secondIndex > img.length){
        secondIndex =1;
    }
    img[secondIndex -1].computedStyleMap.display = "block";
}
automaticslide();










/*let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const slideshowContainer = document.querySelector('.slideshow-container');
let slideshowInterval;


function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = 'block';
}

function startSlideshow() {
    showSlides();
    slideshowInterval = setInterval(showSlides, 3000); // Change slide every 3 seconds (adjust as needed)
}

function pauseSlideshow() {
    clearInterval(slideshowInterval);
}

startSlideshow(); // Start the slideshow

slideshowContainer.addEventListener('mouseenter', pauseSlideshow);
slideshowContainer.addEventListener('mouseleave', startSlideshow);*/