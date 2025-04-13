const items = document.querySelectorAll('.menu-item');
const detailBox = document.getElementById('detailBox');

items.forEach(item => {
  item.addEventListener('mouseover', () => {
    detailBox.textContent = item.getAttribute('data-detail');
  });

  item.addEventListener('mouseover', () => {
    detailBox.textContent = item.getAttribute('data-detail');
    detailBox.classList.add('reveal');
  });
  
  item.addEventListener('mouseout', () => {
    detailBox.textContent = 'Hover or tap a heuristic to see details...';
    detailBox.classList.remove('reveal');
  });
  
});
