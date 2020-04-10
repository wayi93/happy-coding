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
                'stay'
            ),
            'run' : createImg(
                'images/dog_run.png',
                'run'
            ),
            'jump' : createImg(
                'images/dog_jump.png',
                'jump'
            )
        };

        this.vy = 0; //垂直方向的速度
        this.gravity = 0.9;
    }

    jump () {
        if(this.y === height - this.height - this.bottom) {
            this.vy = -20;
        }
    }

    move () {
        this.y += this.vy;
        this.vy += this.gravity;
        this.y = constrain(this.y, 0, height - this.height - this.bottom);
    }

    show () {
        //rect(this.x, this.y, 145, 201);
        //circle(this.x, this.y, 100);

        if(this.y < height - this.height - this.bottom) {
            image(this.img.jump, this.x, this.y, this.width, this.height);
        }else {
            if(frameCount % 10 < 5) {
                image(this.img.stay, this.x, this.y, this.width, this.height);
            }else {
                image(this.img.run, this.x, this.y, this.width, this.height);
            }
        }
    }
}