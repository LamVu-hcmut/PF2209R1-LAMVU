class circle {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }
    drawCircle() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();
    }
    moveRight() {
        this.x++;
    }
}
class rectangle {
    constructor(x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }
    drawRect() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}
let c = document.getElementById('myCanvas');
let ctx = c.getContext('2d');
function draw() {
    let cir1 = new circle(parseFloat(document.getElementById('x1').value), parseFloat(document.getElementById('y1').value), parseFloat(document.getElementById('r1').value), document.getElementById('c1').value);
    let rect1 = new rectangle(parseFloat(document.getElementById('x2').value), parseFloat(document.getElementById('y2').value), parseFloat(document.getElementById('w2').value), parseFloat(document.getElementById('h2').value), document.getElementById('c2').value);
    ctx.clearRect(0, 0, 1200, 1000);
    rect1.drawRect();
    cir1.drawCircle();

}
function check() {
    let cir1 = new circle(parseFloat(document.getElementById('x1').value), parseFloat(document.getElementById('y1').value), parseFloat(document.getElementById('r1').value), document.getElementById('c1').value);
    let rect1 = new rectangle(parseFloat(document.getElementById('x2').value), parseFloat(document.getElementById('y2').value), parseFloat(document.getElementById('w2').value), parseFloat(document.getElementById('h2').value), document.getElementById('c2').value);
    //Determine coordinates of 4 points of rectangle
    let xRight = rect1.x + rect1.width;
    let xLeft = rect1.x;
    let yTop = rect1.y;
    let yBottom = rect1.y + rect1.height;
    let flag = 0;
    console.log(xLeft, xRight, yTop, yBottom);
    //Find a nearest point (A) to the circle from rectangle
    let xA = cir1.x;
    let yA = cir1.y;
    if (xLeft < xA && xA < xRight && yA > yTop && yA < yBottom) {
        flag = 1;
    }
    if (xA <= xLeft) {
        xA = xLeft;
    }
    if (xA > xRight) {
        xA = xRight;
    }
    if (yA < yTop) {
        yA = yTop;
    }
    if (yA > yBottom) {
        yA = yBottom;
    }
    //Calculate distance AC with C is the center of the circle
    let d = Math.sqrt(Math.pow(cir1.x - xA, 2) + Math.pow(cir1.y - yA, 2));
    console.log(`${xA}     ${yA}`)
    console.log(d);
    if (d <= cir1.radius) {
        flag = 1;
    }
    if (flag) {
        document.getElementById('result').innerHTML = "There is a COLLISION!";
    } else {
        document.getElementById('result').innerHTML = "There is NO collision!";
    }
}
//Move CIRCLE
function moveRight() {
    let cir1 = new circle(parseFloat(document.getElementById('x1').value), parseFloat(document.getElementById('y1').value), parseFloat(document.getElementById('r1').value), document.getElementById('c1').value);
    let n = cir1.x;
    n++;
    document.getElementById('x1').value = n;
    console.log(cir1);
    draw();
}
function moveLeft() {
    let cir1 = new circle(parseFloat(document.getElementById('x1').value), parseFloat(document.getElementById('y1').value), parseFloat(document.getElementById('r1').value), document.getElementById('c1').value);
    let n = cir1.x;
    n--;
    document.getElementById('x1').value = n;
    console.log(cir1);
    draw();
}
function moveUp() {
    let cir1 = new circle(parseFloat(document.getElementById('x1').value), parseFloat(document.getElementById('y1').value), parseFloat(document.getElementById('r1').value), document.getElementById('c1').value);
    let n = cir1.y;
    n--;
    document.getElementById('y1').value = n;
    console.log(cir1);
    draw();
}
function moveDown() {
    let cir1 = new circle(parseFloat(document.getElementById('x1').value), parseFloat(document.getElementById('y1').value), parseFloat(document.getElementById('r1').value), document.getElementById('c1').value);
    let n = cir1.y;
    n++;
    document.getElementById('y1').value = n;
    console.log(cir1);
    draw();
}
//Move RECTANGLE
function moveRightRec() {
    let rect1 = new rectangle(parseFloat(document.getElementById('x2').value), parseFloat(document.getElementById('y2').value), parseFloat(document.getElementById('w2').value), parseFloat(document.getElementById('h2').value), document.getElementById('c2').value);
    let n = rect1.x;
    n++;
    document.getElementById('x2').value = n;
    draw();
}
function moveLeftRec() {
    let rect1 = new rectangle(parseFloat(document.getElementById('x2').value), parseFloat(document.getElementById('y2').value), parseFloat(document.getElementById('w2').value), parseFloat(document.getElementById('h2').value), document.getElementById('c2').value);
    let n = rect1.x;
    n--;
    document.getElementById('x2').value = n;
    draw();
}
function moveUpRec() {
    let rect1 = new rectangle(parseFloat(document.getElementById('x2').value), parseFloat(document.getElementById('y2').value), parseFloat(document.getElementById('w2').value), parseFloat(document.getElementById('h2').value), document.getElementById('c2').value);
    let n = rect1.y;
    n--;
    document.getElementById('y2').value = n;
    draw();
}
function moveDownRec() {
    let rect1 = new rectangle(parseFloat(document.getElementById('x2').value), parseFloat(document.getElementById('y2').value), parseFloat(document.getElementById('w2').value), parseFloat(document.getElementById('h2').value), document.getElementById('c2').value);
    let n = rect1.y;
    n++;
    document.getElementById('y2').value = n;
    draw();
}