class Sky {

    constructor () {
        this.x = 0;
        this.y = 0;
        this.width = width;
        this.height = height - 100;
        this.img = createImg(
            'images/sky.png',
            'Sky'
        );
        this.clouds = [
            new Cloud(100),
            new Cloud(300),
            new Cloud(500),
        ];
        this.sun = new Sun();
    }

    show () {
        image(this.img, this.x, this.y, this.width, this.height);
        this.sun.show();
        this.sun.move();

        if(random(1) < 0.005) {
            this.clouds.push(new Cloud(width));
        }

        for(let cld of this.clouds) {
            cld.move();
            cld.show();
        }
    }

}