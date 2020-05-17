const canvas = document.querySelector('.star-canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');


class Star {
  constructor(x, y, dy, color) {
    this._x = x;
    this._y = y;
    this._lenght = Math.random() * 3 + 1;
    this._dy = dy;
    this._color = color;
  }

  draw() {
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.moveTo(this._x, this._y);
    ctx.lineTo(this._x, this._y + this._lenght);
    ctx.strokeStyle = this._color;
    ctx.stroke();
  }

  update() {
    if (this._y < -this._lenght) {
      this._x = Math.random() * innerWidth;
      this._y = innerHeight + this._lenght;
    }

    this._y += this._dy;

    this.draw()
  }
}


function createStars(numberOf) {
  let constelation = [];
  for (let i = 0; i < numberOf; i++) {
    let x = Math.random() * innerWidth,
      y = Math.random() * innerHeight,
      dy = -Math.random(),
      color = `rgb(255,255,255,${Math.random()})`;

    constelation.push(new Star(x, y, dy, color));
  }
  return constelation;

}

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, innerWidth, innerHeight);
  constelation.forEach(tear => tear.update());
}

window.addEventListener('resize', function() {
  canvas.height = this.innerHeight;
  canvas.width = this.innerWidth;
})

const btn = document.querySelector('.btn-theme');
btn.onclick = function() {

  canvas.classList.toggle('invert');
  this.classList.toggle('invert');

  !this.classList.contains('invert') ?
    this.innerHTML = '<i class="fas fa-moon"></i>' :
    this.innerHTML = '<i class="fas fa-sun"></i>';
}

let nOfStars = 500;
let constelation = createStars(nOfStars);

animate();