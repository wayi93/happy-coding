var snake;
var speed = 1;
var virus;

function setup() {
    createCanvas(400, 400);
    frameRate(8);
    snake = new Snake();
    virus = new Virus(random(width - snake.width), random(height - snake.height));
}

function draw() {

    if(snake.isHitVirus()) {
        virus = new Virus(random(width - snake.width), random(height - snake.height));
        snake.eat();
    }

    background('#515151');
    snake.update();
    snake.show();
    virus.show();

    if(snake.isDeath()) {
        snake = new Snake();
        virus = new Virus(random(width - snake.width), random(height - snake.height));

        setTimeout(function(){ alert('死掉了，重新开始吧！'); }, 100);
    }

}

function keyPressed() {
    if(keyCode === UP_ARROW) {
        snake.changeDirection(0, -1);
    }else if(keyCode === DOWN_ARROW) {
        snake.changeDirection(0, 1);
    }else if(keyCode === RIGHT_ARROW) {
        snake.changeDirection(1, 0);
    }else if(keyCode === LEFT_ARROW) {
        snake.changeDirection(-1, 0);
    }
}
