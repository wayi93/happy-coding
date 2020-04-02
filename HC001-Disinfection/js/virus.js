function Virus(x, y) {
    this.width = 10;
    this.height = 10;

    this.x = x;
    this.y = y;

    this.needle = 2;

    this.show = function () {
        //fill('#ff0000');
        //rect(this.x, this.y, this.width, this.height);

        fill('#ff0000');
        var circleCenterX = this.x + this.width / 2;
        var circleCenterY = this.y + this.height / 2;
        circle(circleCenterX, circleCenterY, this.width);
        // 横
        line(this.x - this.needle, circleCenterY, this.x + this.width + this.needle, circleCenterY);
        // 竖
        line(circleCenterX, this.y - this.needle, circleCenterX, this.y + this.height + this.needle);
        // 45度
        line(this.x, this.y + this.height, this.x + this.width, this.y);
        // 135度
        line(this.x, this.y, this.x + this.width, this.y + this.height);

    };
}
