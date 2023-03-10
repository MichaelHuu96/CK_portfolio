var container = document.querySelector(".bg_container");

var cubeformation = document.querySelector(".graph_element_Cubeformation");
var michael = document.querySelector(".graph_element_Michael_A");

const elements = document.querySelectorAll('.avoid_mouse');
const cursor_perspectives = document.querySelectorAll(".cursor_perspective");
const cursor_perspectives_high = document.querySelectorAll(".cursor_perspective_high");
const cursor_perspectives_bg = document.querySelectorAll(".cursor_perspective_bg");


document.onmousemove = e => {
  container.style.backgroundPositionX = -e.clientX * 0.04 + "px";
  container.style.backgroundPositionY = -e.clientY * 0.05 + "px";

  cubeformation.style.transform = "translateX(" + (-e.clientX * 0.025) + "px) translateY(" + (-e.clientY * 0.02) + "px)";
  michael.style.transform = "translateX(" + (-e.clientX * 0.025) + "px) translateY(" + (-e.clientY * 0.02) + "px)";


  for (var i = 0; i < cursor_perspectives.length; i++) {
    cursor_perspectives[i].style.transform = "translateX(" + (-e.clientX * 0.002) + "px) translateY(" + (-e.clientY * 0.02) + "px)";
  }

  for (var i = 0; i < cursor_perspectives_high.length; i++) {
    cursor_perspectives_high[i].style.transform = "translateX(" + (-e.clientX * 0.008) + "px) translateY(" + (-e.clientY * 0.02) + "px)";
  }  
  for (var i = 0; i < cursor_perspectives_bg.length; i++) {
    cursor_perspectives_bg[i].style.transform = "translateX(" + (-e.clientX * 0.025) + "px) translateY(" + (-e.clientY * 0.02) + "px)";
  }
  
}


elements.forEach((element) => {
  element.addEventListener('mousemove', (e) => {
    const { left, top, width, height } = element.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    const offsetX = Math.max(-width, Math.min(width, (width / 2 - x) * 1));
    const offsetY = Math.max(-height, Math.min(height, (height / 2 - y) * 1));
    element.style.setProperty('--offset-x', `${offsetX}px`);
    element.style.setProperty('--offset-y', `${offsetY}px`);
    element.classList.add('move');
  });

  element.addEventListener('mouseleave', () => {
    element.classList.remove('move');
  });

  element.addEventListener('touchmove', (e) => {
    const { left, top, width, height } = element.getBoundingClientRect();
    const x = e.touches[0].clientX - left;
    const y = e.touches[0].clientY - top;
    const offsetX = Math.max(-width, Math.min(width, (width / 2 - x) * 1));
    const offsetY = Math.max(-height, Math.min(height, (height / 2 - y) * 1));
    element.style.setProperty('--offset-x', `${offsetX}px`);
    element.style.setProperty('--offset-y', `${offsetY}px`);
    element.classList.add('move');
  });

  element.addEventListener('touchend', () => {
    element.classList.remove('move');
  });
});
