// Header section
const header = document.getElementById('header');
let isOpaque = false;

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        if (!isOpaque) {
            header.classList.add('nav-opaque');
            isOpaque = true;
        }
    } else {
        if (isOpaque) {
            header.classList.remove('nav-opaque');
            isOpaque = false;
        }
    }
});

// Hero section
var typed = new Typed(" .auto-type",{
    strings : ["App Designer", "Video Editor", "Youtuber"],
    typeSpeed : 150,
    backSpeed : 150,
    loop : true
})

// Swiper projects
const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 20,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // If we need navigation buttons
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // Enable autoplay and set options
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
  });
  
  // Get the swiper container
  const swiperContainer = document.querySelector('.swiper');
  
  // Add mouseover and mouseout event listeners to pause and resume autoplay
  swiperContainer.addEventListener('mouseenter', () => {
    swiper.autoplay.stop();
    swiper.mousewheel.disable(); // Disable mousewheel when the mouse is over the swiper container
  });
  
  swiperContainer.addEventListener('mouseleave', () => {
    swiper.autoplay.start();
    swiper.mousewheel.enable(); // Enable mousewheel when the mouse moves away from the swiper container
  });
  
  // Allow scrolling when the mouse is over the swiper container
  swiperContainer.addEventListener('wheel', (event) => {
    event.preventDefault();
    swiperContainer.scrollTop += event.deltaY;
  });


// image slide show

 // Get the image elements
 const images = document.querySelectorAll('.slideshow-img');

 // Initialize index for tracking the current image
 let currentIndex = 0;

 // Function to change the image
 function changeImage() {
   // Hide all images
   images.forEach(image => image.style.display = 'none');

   // Show the current image
   images[currentIndex].style.display = 'block';

   // Increment the index for the next image
   currentIndex = (currentIndex + 1) % images.length;

   // Schedule the next image change after 2 seconds
   setTimeout(changeImage, 2000);
 }

 // Start the slideshow
 changeImage();

 

 // Get the image elements with slideshow-img2 class
const images2 = document.querySelectorAll('.swiper-slide:nth-child(2) .slideshow-img2');

// Initialize index for tracking the current image in slideshow-img2
let currentIndex2 = 0;

// Function to change the image for slideshow-img2
function changeImage2() {
  // Hide all images in slideshow-img2
  images2.forEach(image => image.style.display = 'none');

  // Show the current image in slideshow-img2
  images2[currentIndex2].style.display = 'block';

  // Increment the index for the next image in slideshow-img2
  currentIndex2 = (currentIndex2 + 1) % images2.length;

  // Schedule the next image change after 2 seconds in slideshow-img2
  setTimeout(changeImage2, 2000);
}

// Start the slideshow for slideshow-img2
changeImage2();


 



