// https://inspirnathan.com/posts/6-get-intellisense-for-html-canvas/
// context

const width = 400;
const height = 400;

/** @type {HTMLCanvasElement} */
const c = document.getElementById('myCanvas');
c.width = width;
c.height = height;
const ctx = c.getContext('2d');

function rightTriangle() {
  ctx.beginPath();
  ctx.moveTo(100, 300);
  ctx.lineTo(300, 300);
  ctx.lineTo(300, 100);
  ctx.lineTo(100, 300);
  ctx.stroke();
}
rightTriangle();
// starts the path of the drawing
function circle() {
  ctx.beginPath();
  ctx.arc(width / 2, height / 2, 50, 0, 7);
//   can use rgb hexcode hsl
  ctx.fillStyle = 'red'
  ctx.fill();
  ctx.stroke();
}
circle();

ctx.beginPath();
ctx.rect(100, 300, 200, 20);
ctx.stroke();

function drawGrid() {
  for (let x = 0; x <= width; x += 20) {
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
  }

  for (let y = 0; y <= height; y += 20) {
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
  }
  ctx.strokeStyle = 'red';
  ctx.globalAlpha = 0.2;
  ctx.stroke();
}

drawGrid();
