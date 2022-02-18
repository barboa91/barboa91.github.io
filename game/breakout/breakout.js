var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
let bColor = "#0095DD";             //initial ball color

//paddle initalize
let paddleHeight = 10;
let paddleWidth = 80;
let paddleX = (canvas.width-paddleWidth) / 2;

//button variables
var rightPressed = false;
var leftPressed = false;




let draw = () =>{
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    if((y + dy) < ballradius){
        dy = -dy;
        rColor();
    }else if( (y + dy) > canvas.height-ballradius-20){
        if(x > paddleX && x < paddleX + paddleWidth) {
            dy = -dy;
            faster();
        }else if( (y + dy) > canvas.height-ballradius){
        gameOver();
        }
    }
    if(x + dx > canvas.width-ballradius || x + dx < ballradius){
        dx = -dx;
        rColor();
    }
    dBall();
    move();
    x += dx;
    y += dy;
}

let rColor = () =>{
    bColor ="#" + Math.floor(Math.random()*16777215).toString(16);
}

let move = () =>{
    if(rightPressed) {
        paddleX += 7;
        if (paddleX + paddleWidth > canvas.width){
            paddleX = canvas.width - paddleWidth;
        }
    }
    else if(leftPressed) {
        paddleX -= 7;
        if (paddleX < 0){
            paddleX = 0;
        }
    }
}

let dBall = () =>{
    ctx.beginPath();
    ctx.arc(x, y, ballradius, 0, Math.PI*2);
    ctx.fillStyle = bColor;
    ctx.fill();
    ctx.closePath();
    drawPaddle();
}
function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight-20, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

let gameOver = () =>{
    alert("GAME OVER");
    document.location.reload();
    clearInterval(interval); // exception for chrome
}

let faster = () =>{
    if(dx > 0){
        dx++;
    }else if(dx < 0){
        dx--;
    }

    if(dy > 0){
        dy ++;
    }else if(dy < 0){
        dy--;
    }
}


//drawPaddle();
//addign listeners for key up and down

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }
}

var interval = setInterval(draw, 10);

//inital ball position
var x = canvas.width/2;
var y = canvas.height-30;
//speed of the ball
var dx = 2;
var dy = -2;
let ballradius = 10;


