class Sun {

    constructor () {
        this.x = width - 250;
        this.y = 20;
        this.width = 150;
        this.img = createImg(
            'images/sun.png',
            'sun'
        );
        this.yIncrument = 0.3;
    }

    show () {

        if(Math.abs(this.y - 10) > 10) {
            this.yIncrument = 0 - this.yIncrument;
        }
        this.y += this.yIncrument;

        image(this.img, this.x, this.y, this.width, this.width);
    }

}