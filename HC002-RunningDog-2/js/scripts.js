const frameRateInt = 60;
let dog;
let road;
let sky;
let imgsCloud = [];

function setup() {
    createCanvas(800, 400);
    frameRate(frameRateInt);

    for(let i = 0; i < 4; ++i) {
        imgsCloud.push(
            createImg(
                'images/cloud0' + i + '.png',
                'Cloud' + i
            )
        );
    }

    dog = new Dog();
    road = new Road();
    sky = new Sky();

}

function draw() {

    clear();

    sky.show();

    road.show();
    road.move();

    dog.show();
    dog.move();
}

function keyPressed() {
    if(key === ' ') {
        dog.jump();
    }
}
