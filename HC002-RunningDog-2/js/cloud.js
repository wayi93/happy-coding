class Cloud {

    constructor (x) {

        this.x = x;
        this.y = random(-10, 100);
        this.width = 150;
        this.speed = 1;
        this.img = imgsCloud[Math.ceil(random(0, 3))];

    }

    move () {
        this.x -= this.speed;
    }

    show () {
        image (this.img, this.x, this.y, this.width, this.width);
    }

}