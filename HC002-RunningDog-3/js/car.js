class Car {

    constructor () {
        this.x = width;
        this.y = height - 98;
        this.width = 150;
        this.height = Math.round(this.width * 220 / 640);
        this.speed = 5;
        this.carIndex = Math.floor(random(2));
    }

    move () {
        this.x -= this.speed;
    }

    show () {
        let aCar = imgsCar[this.carIndex];
        image(aCar[this.carIndex + '_' + (frameCount % 8)], this.x, this.y, this.width, this.height);
    }

    isHitTheDog () {
        let result = false;
        if(this.x < dog.x + dog.width - 20 && this.x > 10 && dog.y + dog.height > this.y + 20) {
            result = true;
        }
        return result;
    }

}