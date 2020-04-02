function Snake() {
    this.width = 10;
    this.height = 10;
    this.x = 10;
    this.y = 10;
    this.xIncrement = 1;
    this.yIncrement = 0;

    this.tails = [];
    this.virusQuantity = 0;

    this.update = function () {

        // save the positions of the tail parts
        if(this.virusQuantity > 0) {
            for(var i = 0; i < this.virusQuantity - 1; ++i) {
                this.tails[this.virusQuantity - i - 1] = this.tails[this.virusQuantity - i - 2];
            }
            this.tails[0] = {
                x : this.x,
                y : this.y
            };
        }

        this.x = this.x + this.xIncrement * this.width * speed;
        this.y = this.y + this.yIncrement * this.height * speed;

        this.x = constrain(this.x, 0, width - this.width);
        this.y = constrain(this.y, 0, height - this.height);

    };
    
    this.show = function () {

        // show the head
        fill('#ffffff');
        rect(this.x, this.y, this.width, this.height);

        // show the body (virus)
        for(var i = 0; i < this.tails.length; ++i) {
            fill('#a0a0a0');
            rect(this.tails[i].x, this.tails[i].y, this.width, this.height);
        }

    };

    this.changeDirection = function (x, y) {
        if(this.xIncrement + x !== 0 && this.yIncrement + y !== 0) {
            this.xIncrement = x;
            this.yIncrement = y;
        }
    };

    this.isHitVirus = function () {
        var result = false;
        if( Math.abs(virus.x - this.x) <= virus.width && Math.abs(virus.y - this.y) <= virus.height) {
            result = true;
        }
        return result;
    };

    this.eat = function () {
        ++this.virusQuantity;
    };

    this.isDeath = function () {
        var result = false;

        // 撞到边界
        if(this.x + this.width >= width || this.x <= 0 || this.y + this.height >= height || this.y <= 0) {
            result = true;
        }else {

            // 撞到自己
            for(var i = 0; i < this.tails.length; ++i) {
                if( Math.abs(this.tails[i].x - this.x) < this.width && Math.abs(this.tails[i].y - this.y) < this.height) {
                    result = true;
                    break;
                }
            }

        }

        return result;
    };
}
