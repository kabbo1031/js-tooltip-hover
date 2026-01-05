const tooltip = document.getElementById('tooltip');
const target = document.querySelector('.tip');

target.addEventListener('mouseenter', e=>{
  tooltip.innerText = target.dataset.tip;
  tooltip.style.display = 'block';
});

target.addEventListener('mousemove', e=>{
  tooltip.style.left = e.pageX + 12 + 'px';
  tooltip.style.top = e.pageY + 12 + 'px';
});

target.addEventListener('mouseleave', ()=>{
  tooltip.style.display = 'none';
});
