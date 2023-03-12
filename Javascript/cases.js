const image = document.querySelector('.fade_in_slow');
const section = document.querySelector('#Section_Cases');
console.log(image, section); // Check if the image and section elements are being properly selected
window.addEventListener('scroll', function() {
  const sectionTop = section.getBoundingClientRect().top;
  const sectionBottom = section.getBoundingClientRect().bottom;
  const windowHeight = window.innerHeight;
  
  if (sectionTop < windowHeight && sectionBottom > 0) {
    console.log('Section is visible'); // Check if the section is visible
    image.style.opacity = 1;
    console.log('Image opacity:', image.style.opacity); // Check if the image opacity is being set to 1
  }
});
