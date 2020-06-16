let x = 0;
let x1 = 0;
let x2 = 0;
let x3 = 0;
let movement = 180;

window.onload=function() {
  document.querySelector('.face').addEventListener('click', titleClicked);
  document.querySelector('.title-wrapper').addEventListener('click', titleClicked);
  document.querySelector('.rotate').addEventListener('click', (event) => rotate(event));
  document.querySelector('.rotate-x').addEventListener('click', (event) => rotateX(event));
  document.querySelector('.rotate-y').addEventListener('click', (event) => rotateY(event));
}

function titleClicked() {
  console.log('titleClicked')
  x += 180;
  document.querySelector('.face').style.transform = `translate(-50%, -50%) rotateY(${x}deg) rotate(-45deg)`;
}

function rotate() {
  console.log('rotate')
  x1 += movement;
  event.target.style.transform = `rotate(${x1}deg)`;
}
function rotateX() {
  x2 += movement;
  event.target.style.transform = `rotateX(${x2}deg)`;
}
function rotateY() {
  x3 += movement;
  event.target.style.transform = `rotateY(${x3}deg)`;
}