class TextPanel {

    constructor () {
        this.x = width - 300;
        this.y = 260;
    }

    show () {
        textSize(24);
        fill('#252c79');

        if(isStarted) {
            text('游戏得分：' + score, this.x + 55, this.y);
        }else {
            text('点击【空格键】开始游戏', this.x, this.y);
        }
    }

}