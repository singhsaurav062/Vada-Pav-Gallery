/*=============== SWIPER JS GALLERY ===============*/
let swiperCards = new Swiper(".gallery-cards", {
  loop: true,
  loopedSlides: 5,
  cssMode: true,
  effect: 'fade',
});
  
let swiperThumbs = new Swiper(".gallery-thumbs", {
  loop: true,
  loopedSlides: 5,
  slidesPerView: 3,
  centeredSlides: true,
  slideToClickedSlide: true,

  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

swiperThumbs.controller.control = swiperCards;
//
function handleFileSelect(event) {
  const files = event.target.files;
  const storageRef = firebase.storage().ref();

  for (const file of files) {
      const mediaRef = storageRef.child(file.name);

      mediaRef.put(file).then((snapshot) => {
          console.log('File Uploaded!');
      });
  }
}

//
var h1 = document.querySelector("h1");

h1.addEventListener("input", function() {
  this.setAttribute("data-heading", this.innerText);
});

function openIndexPage() {
  window.location.href = "index.html";
}

function goImage1() {
  window.location.href = "image.html";
}



// Get all gallery card images
const galleryImages = document.querySelectorAll('.gallery__img');

// Add click event listener to each image
galleryImages.forEach((img, index) => {
  img.addEventListener('click', () => {
    openModal(index);
  });
});

