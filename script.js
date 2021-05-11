const imgs = document.getElementById('imgs');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

const images = document.querySelectorAll('#imgs img');
console.log(images);
let index = 0;

let interval = setInterval(run, 2000);

function run() {
  index++;
  changeImage();
}

function changeImage() {
  if (index > images.length - 1) {
    index = 0;
  } else if (index < 0) {
    index = images.length - 1;
  }
  imgs.style.transform = `translateX(${-index * 500}px)`;
}

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(run, 2000);
}

rightBtn.addEventListener('click', () => {
  index++;
  changeImage();
  resetInterval();
});

leftBtn.addEventListener('click', () => {
  index--;
  changeImage();
  resetInterval();
});
