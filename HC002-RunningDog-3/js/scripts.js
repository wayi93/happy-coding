let sky;
let road;
let dog;
let isStarted = false;
let textPanel;
let score = 0;
let imgsCloud = [];
let imgsCar = [];
let frameRateInt = 60;
let carEntities = [];

function setup() {
    createCanvas(800, 400);
    frameRate(frameRateInt);

    // resource: load the images of clouds
    for(let i = 0; i < 4; ++i) {
        imgsCloud.push(
            createImg(
                'images/cloud0' + i + '.png',
                'cloud0' + i
            )
        );
    }

    // resource: load the images of cars
    for(let i = 0; i < 2; ++i) {
        let aCar = {};

        // car name
        let carName = 'ford';
        if(i === 1) {
            carName = 'porsche';
        }

        for(let j = 0; j < 8; ++j) {
            aCar[i + '_' + j] = createImg(
                'images/' + carName + '_' + j + '.png',
                carName + '_' + j
            );
        }

        imgsCar.push(aCar);
    }


    sky = new Sky();
    road = new Road();
    dog = new Dog();
    textPanel = new TextPanel();
}

function draw() {

    sky.show();

    road.show();

    dog.show();
    dog.move();

    textPanel.show();


    if(isStarted) {
        if(frameCount % (3 * frameRateInt) === 100) {

            let car = new Car();
            if(score > 5) {
                car.speed += car.speed + Math.round(random(5));
            }
            carEntities.push(car);

        }

        let scoreCalc = 0;
        for (let c of carEntities) {
            c.move();
            c.show();

            // check if the car hits the dog
            if(c.x > 0) {
                if(c.isHitTheDog()) {

                    // game over
                    setTimeout(function () {
                        alert('撞到小狗游戏失败，您的最终得分是：' + score + '分。');

                        carEntities = [];
                        score = 0;
                        isStarted = false;
                    }, 0);

                }
            }else {
                ++scoreCalc;
            }
        }
        score = scoreCalc;

    }

}

function keyPressed() {
    if(key === ' ') {

        if(!isStarted) {
            isStarted = true;
        }

        dog.jump();
    }
}
