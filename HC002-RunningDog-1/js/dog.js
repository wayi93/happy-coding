class Dog {

    constructor () {
        this.height = 100;
        this.width = 180 * this.height / 215;
        this.x = 100;
        this.y = height - this.height;
        this.bottom = 45;
        this.img = {
            'stay' : createImg(
                'images/dog_stay.png',
                'Stay'
            ),
            'run' : createImg(
                'images/dog_run.png',
                'Run'
            ),
            'jump' : createImg(
                'images/dog_jump.png',
                'Jump'
            ),
        };

        this.vy = 0;
        this.gravity = 0.9;
    }

    show () {
        if(frameCount % 10 < 5) {
            image(this.img.stay, this.x, this.y, this.width, this.height);
        }else {
            image(this.img.run, this.x, this.y, this.width, this.height);
        }
    }

    move () {
        this.y += this.vy;
        this.vy += this.gravity;
        this.y = constrain(this.y, 0, height - this.height - this.bottom);
    }

    jump () {
        if(this.y === height - this.height - this.bottom) {
            this.vy = -20;
        }
    }

}