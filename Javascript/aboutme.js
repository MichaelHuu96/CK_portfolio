const elements = document.querySelectorAll('.avoid_mouse');




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
  