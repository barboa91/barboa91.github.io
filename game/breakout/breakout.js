var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
let bColor = "#0095DD";             //initial ball color

//paddle initalize
let paddleHeight = 10;
let paddleWidth = 80;
let paddleX = (canvas.width-paddleWidth) / 2;

let paddleZ = 0;

//button variables
var rightPressed = false;
var leftPressed = false;

let draw = () =>{
    ctx.canvas.width  = window.innerWidth * 0.8;
    ctx.canvas.height = window.innerHeight * 0.8;
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
    drawBricks();
    move();
    collisionDetection();
    drawScore();  
    drawLives();
    drawRelX(); 
    x += dx;
    y += dy;
    requestAnimationFrame(draw);
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
    paddleZ = paddleX;
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

let gameOver = () =>{
    lives--;
    if(!lives) {
        alert("GAME OVER");
        document.location.reload();
    }
    else {
        x = canvas.width/2;
        y = canvas.height-30;
        dx = 2;
        dy = -2;
       // paddleX = (canvas.width-paddleWidth)/2;
    }
}

let coulumnByWidth = () =>{
    brickColumnCount = (window.innerWidth - brickPadding)/(brickWidth + brickPadding) - 1
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

let slower = () =>{
    if(dx > 0){
        dx--;
    }else if(dx < 0){
        dx++;
    }

    if(dy > 0){
        dy --;
    }else if(dy < 0){
        dy++;
    }
}


// addign listeners for key up and down

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("mousemove", mouseMoveHandler, false);

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
let relX = 0 ;
let clientX = 0;
function mouseMoveHandler(e) {
    var relativeX = (e.clientX - canvas.offsetLeft);
    relX = relativeX;
    clientX = e.clientX;
    if(relativeX > 0 && relativeX< canvas.width) {
        paddleX = relativeX - (paddleWidth/2);
    }
}



//inital ball position
var x = canvas.width/2;
var y = canvas.height-30;
//speed of the ball
var dx = 2;
var dy = -2;
let ballradius = 10;

// variables for the bricks
let brickRowCount = 3;
let brickColumnCount = 6;

let brickWidth = 75;
let brickHeight = 20;
let brickPadding = 10;
let brickOffsetTop = 30;
let brickOffsetLeft = 30;
let brickCount = 100;

coulumnByWidth();

// score

let score = 0;
// Lives

let lives = 3;

function drawLives() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Lives: "+lives, canvas.width-65, 20);
}

let bricks = [];

for (let i = 0; i < brickColumnCount; i++)
{
    bricks[i] = [];
    for (let r = 0; r < brickRowCount; r++){
        bricks[i][r] = { x : 0, y: 0, status : 1}
    }
}

let drawBricks = () =>{
    for (let c = 0; c < brickColumnCount; c++){
        for(let r = 0;r <brickRowCount; r++){
            if( bricks[c][r].status === 1){
                var brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
                var brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
                bricks[c][r].x = brickX;
                bricks[c][r].y = brickY;
                ctx.beginPath();
                ctx.rect(brickX,brickY,brickWidth,brickHeight);
                ctx.fillStyle = "#0095DD";
                ctx.fill();
                ctx.closePath();
            }
        }
    }
}
function collisionDetection() {
    for(var c=0; c<brickColumnCount; c++) {
        for(var r=0; r<brickRowCount; r++) {
            var b = bricks[c][r];
            if(b.status == 1){
                if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight) {
                    dy = -dy;
                    b.status = 0;
                    score ++;
                    //slower();
                }
            }
        }
    }
}

let youWin = () =>{

    alert("YOU WIN, CONGRATULATIONS!");
    document.location.reload();
}

let drawScore = () => {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Score: "+ score, 8, 20);
}

function drawRelX() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Rel X: "+relX +" Client X:" + clientX +"PaddleX : " + paddleX, canvas.width-400, 400);
}

draw();
