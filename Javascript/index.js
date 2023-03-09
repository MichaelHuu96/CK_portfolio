var container = document.querySelector(".bg_container");
var helloText = document.querySelector(".hello_text");
var cubeformation = document.querySelector(".graph_element_Cubeformation");
var michael = document.querySelector(".graph_element_Michael_A");
const elements = document.querySelectorAll('.avoid_mouse');




document.onmousemove = e => {
  container.style.backgroundPositionX = -e.clientX * 0.04 + "px";
  container.style.backgroundPositionY = -e.clientY * 0.05 + "px";
  helloText.style.transform = "translateX(" + (-e.clientX * 0.01) + "px) translateY(" + (-e.clientY * 0.02) + "px)";
  cubeformation.style.transform = "translateX(" + (-e.clientX * 0.025) + "px) translateY(" + (-e.clientY * 0.02) + "px)";
  michael.style.transform = "translateX(" + (-e.clientX * 0.025) + "px) translateY(" + (-e.clientY * 0.02) + "px)";

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
