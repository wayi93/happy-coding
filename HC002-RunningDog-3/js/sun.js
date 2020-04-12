class Sun {

    constructor () {
        this.x = width - 250;
        this.y = 20;
        this.width = 150;
        this.img = createImg(
            'images/sun.png',
            'Sun'
        );
        this.yIncrement = -0.3;
    }

    move () {
        if(Math.abs(this.y - 10) > 10) {
            this.yIncrement = 0 - this.yIncrement;
        }
        this.y += this.yIncrement;
    }

    show () {
        image(this.img, this.x, this.y, this.width, this.width);
    }

}