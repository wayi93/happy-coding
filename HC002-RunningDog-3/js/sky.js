class Sky {

    constructor () {
        this.x = 0;
        this.y = 0;
        this.width = width;
        this.height = height;
        this.img = createImg(
            'images/sky.png',
            'sky'
        );
        this.clouds = [
            new Cloud(100),
            new Cloud(300),
            new Cloud(500)
        ];
        this.sun = new Sun();
    }

    show () {

        background('#ffffff');
        image(this.img, this.x, this.y, this.width, this.height - 100);
        this.sun.show();

        if(random(1) < 0.005) {
            this.clouds.push(new Cloud(width));
        }

        for (let cld of this.clouds) {
            cld.move();
            cld.show();
        }
    }

}