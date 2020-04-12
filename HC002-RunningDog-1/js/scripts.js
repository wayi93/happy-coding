const frameRateInt = 60;
let dog;

function setup() {
    createCanvas(800, 400);
    frameRate(frameRateInt);
    dog = new Dog();
}

function draw() {

    clear();

    dog.show();
    dog.move();
}

function keyPressed() {
    if(key === ' ') {
        dog.jump();
    }
}
