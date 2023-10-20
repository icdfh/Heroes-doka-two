let canvas = document.querySelector('.rain');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext('2d');

function randomNum(max, min) {
    return Math.floor(Math.random() * max) + min;
}

function Firefly(x, y, radius, color, velocity) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.velocity = velocity;

    this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        c.fillStyle = this.color;
        c.fill();
    }

    this.update = function() {
        this.x += this.velocity.x;
        this.y += this.velocity.y;

      
        if (this.x + this.radius < 0 || this.x - this.radius > canvas.width ||
            this.y + this.radius < 0 || this.y - this.radius > canvas.height) {
            this.x = randomNum(canvas.width, 0);
            this.y = randomNum(canvas.height, 0);
        }

        this.draw();
    }
}

let firefliesArray = [];

for (let i = 0; i < 240; i++) {
    let fireflyXLocation = Math.floor(Math.random() * window.innerWidth) + 1;
    let fireflyYLocation = Math.random() * window.innerHeight;
    let randomFireflySize = randomNum(2, 1); // Уменьшенный размер
    let randomColor = `rgba(${randomNum(255, 200)}, ${randomNum(100, 0)}, 0, 0.9)`;
    let randomVelocity = { x: (Math.random() - 0.5) * 1, y: (Math.random() - 0.5) * 1 }; // Уменьшенная скорость
    firefliesArray.push(new Firefly(fireflyXLocation, fireflyYLocation, randomFireflySize, randomColor, randomVelocity));
}

function animateFireflies() {
    requestAnimationFrame(animateFireflies);
    c.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < firefliesArray.length; i++) {
        firefliesArray[i].update();
    }
}

animateFireflies();
