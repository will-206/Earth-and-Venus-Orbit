//inspiration: https://i.imgur.com/EcKQfdi.gif
//credit to https://github.com/bbaars/SolarSystem

const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
canvas.width = innerWidth;
canvas.height = innerHeight;

class Star {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 2;
    }

    draw() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = 'white';
        c.fill();
    }
}

class Planet {
    constructor(x, y, radius, color, velocity, orbitRadius) {
        this.x = x;
        this.y = y;
        this.startX = x;
        this.startY = y;
        this.radius = radius;
        this.color = color;
        this.velocity = velocity;
        this.radian = -1.5708; // 90 degrees
        this.orbitRadius = orbitRadius;
    }

    draw() {
        c.beginPath();
        c.lineWidth = 4;
        c.arc(
            this.startX,
            this.startY,
            this.orbitRadius,
            0,
            Math.PI * 2,
            false
        );
        c.strokeStyle = 'white';
        c.stroke();
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();
        c.shadowBlur = 0;
    }

    update() {
        this.draw();
        if (this.velocity > 0) { 
            this.radian += this.velocity;
            this.x = this.startX + Math.cos(this.radian) * this.orbitRadius;
            this.y = this.startY + Math.sin(this.radian) * this.orbitRadius;
        }
    }
}

const getPlanetForOptions = (radius, velocity, orbitRadius, color) =>
    new Planet(
        canvas.width / 2,
        canvas.height / 2,
        radius,
        color,
        velocity / 1000,
        orbitRadius
    );

let planets;
let stars;
function init() {
    planets = [];
    stars = [];
    scale = 1;
    planets.push(getPlanetForOptions(18 * scale, 0, 0, 'yellow')); // sun
    planets.push(getPlanetForOptions(8 * scale, 104, 120 * scale, 'tan')); // venus
    planets.push(getPlanetForOptions(10 * scale, 64, 168 * scale, 'lightblue')); // earth

    for (let i = 0; i < 25; i++) {
        stars.push(new Star());
    }
}

let lines = [];
let opacity = 1;
let oIncrement = 0.005;

function drawLineSegment(segment) {
    c.beginPath();
    c.moveTo(segment.start.x, segment.start.y);
    c.lineTo(segment.end.x, segment.end.y);
    c.strokeStyle = 'white';
    c.lineWidth = 1;
    c.stroke();
}

function drawLine(planet1, planet2) {
    const segment = {
      start: { x: planet1.x, y: planet1.y },
      end: { x: planet2.x, y: planet2.y }
    };
  
    lines.push(segment);
    lines.forEach(drawLineSegment);
}

// Animation Loop
function animate() {
    requestAnimationFrame(animate);

    c.clearRect(0, 0, canvas.width, canvas.height);
    c.fillStyle = 'rgb(0, 0, 0)';
    c.fillRect(0, 0, canvas.width, canvas.height);

    if ((planets[2].radian + 1.5708) / (Math.PI*2) < 8) { // if earth has rotated fewer than 8 complete times
        drawLine(planets[1], planets[2]);
    } else { // start fade, stop drawing lines
      lines.forEach(drawLineSegment);
        if (opacity > oIncrement) {
            opacity -= oIncrement;
        } else {
            opacity = 0;
        }
    }

    stars.forEach(star => {
        star.draw();
    });

    c.save(); 
    c.globalAlpha = opacity;
    planets.forEach(planet => {
        planet.update();
    });
    planets[0].draw();
    c.restore();
}

init();
animate();
