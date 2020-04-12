class Road {

    constructor () {

        this.width = 100;
        this.height = 100;
        this.x = 0;
        this.y = height - this.height;
        this.img = createImg(
            'images/road.png',
            'Road'
        );
        this.speed = 5;
    }

    move () {
        if(Math.abs(this.x) > this.width) {
            this.x = 0;
        }else {
            this.x -= this.speed;
        }
    }

    show () {
        for(let i = 0; i < this.getQuantity(); ++i) {
            image(this.img, this.x + Math.round(this.width * i), this.y, this.width, this.height);
        }
    }

    getQuantity () {
        return Math.ceil(width / this.width) + 2;
    }

}