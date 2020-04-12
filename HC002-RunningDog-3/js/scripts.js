const frameRateInt = 60;
let dog;
let road;
let sky;
let imgsCloud = [];
let imgsCar = [];
let textPanel;
let score = 0;
let isStarted = false;
let carEntities = [];

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

    for(let i = 0; i < 2; ++i) {
        let aCar = {};
        let carName = 'ford';
        if(i === 1) {
            carName = 'porsche';
        }

        for(let j = 0; j < 8; ++j) {
            aCar[i + '_' + j] = createImg(
                'images/' + carName + '_' + j + '.png',
                carName + 'j'
            );
        }
        imgsCar.push(aCar);
    }

    dog = new Dog();
    road = new Road();
    sky = new Sky();
    textPanel = new TextPanel();

}

function draw() {

    clear();

    sky.show();
    textPanel.show();

    road.show();
    road.move();

    dog.show();
    dog.move();

    if(isStarted) {

        if(frameCount % (3 * frameRateInt) === 100) {
            let aCar = new Car();
            if(score > 5) {
                aCar.speed += aCar.speed + random(5);
            }
            carEntities.push(aCar);
        }

        let scoreCalc = 0;
        for(let c of carEntities) {

            c.move();
            c.show();

            if(c.x > 0) {

                if(c.isHitTheDog()) {

                    setTimeout(function () {

                        alert('撞上小狗游戏失败，您的最终分数是：' + score + '分!');

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

    if(!isStarted) {
        isStarted = true;
    }

    if(key === ' ') {
        dog.jump();
    }
}
