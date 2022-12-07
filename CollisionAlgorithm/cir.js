class circle {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }
    draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();
    }
}
let c = document.getElementById("myCanvas");
let ctx = c.getContext('2d');
function draw() {
    let cir1 = new circle(parseFloat(document.getElementById('x1').value), parseFloat(document.getElementById('y1').value), parseFloat(document.getElementById('r1').value), document.getElementById('c1').value);
    let cir2 = new circle(parseFloat(document.getElementById('x2').value), parseFloat(document.getElementById('y2').value), parseFloat(document.getElementById('r2').value), document.getElementById('c2').value);
    console.log(cir1);
    ctx.clearRect(0, 0, 1300, 3000);
    cir1.draw();
    cir2.draw();
}
function check() {
    let cir1 = new circle(parseFloat(document.getElementById('x1').value), parseFloat(document.getElementById('y1').value), parseFloat(document.getElementById('r1').value), document.getElementById('c1').value);
    let cir2 = new circle(parseFloat(document.getElementById('x2').value), parseFloat(document.getElementById('y2').value), parseFloat(document.getElementById('r2').value), document.getElementById('c2').value);
    let d = Math.sqrt(Math.pow(cir1.x - cir2.x, 2) + Math.pow(cir1.y - cir2.y, 2));
    console.log(d);
    document.getElementById("d").innerHTML = `Distance of 2 circle center is: ${d}`;
    if (d <= (cir1.radius + cir2.radius)) {
        document.getElementById("result").innerHTML = "There is a COLLISION.";
    }
    else {
        document.getElementById("result").innerHTML = "There is NO collision.";
    }
}