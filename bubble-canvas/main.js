const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

class Circle {
  constructor(x, y, dx, dy, radius, color) {
    this._x = x;
    this._y = y;
    this._dx = dx;
    this._dy = dy;
    this._rad = Math.random() * Math.PI * 2;
    this._radius = radius;
    this._color = color;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this._x, this._y, this._radius, 0, Math.PI * 2, false);
    ctx.fillStyle = this._color;
    ctx.fill();
  };

  update() {
    // get the circles back to the start
    if (this._x - this._radius > innerWidth) {
      this._x = -this._radius;
    }

    this._x += this._dx;
    this._y += Math.sin(this._rad) * yVariation;
    this._rad += .1;
    this.draw();
  };

}

function createCircles(numberOf) {
  let arr = [];

  for (let i = 0; i < numberOf; i++) {
    let radius = 20,
      color = palette[Math.floor(Math.random() * (palette.length - 1))],
      x = Math.random() * (innerWidth - radius * 2) + radius,
      y = Math.random() * (innerHeight + yVariation * 2) - yVariation,
      dx = Math.random() * 4,
      dy = Math.random() * 4;

    arr.push(new Circle(x, y, dx, dy, radius, color));
  }

  return arr;
}

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, innerWidth, innerHeight);

  circleArray.forEach(circle => {
    circle.update();
  })
}

let yVariation = 5;
let palette = ['#3D6FFF', '#3888E8', '#4AC0FF', '#38CDE8', '#3DFFF5'];
let circleArray = createCircles(1500);

animate();