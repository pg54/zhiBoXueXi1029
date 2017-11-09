/**
 * Created by pangang on 2017/11/8.
 */
var Paddle = function () {
    var o = {
        img: imageFromPath('paddle.png'),
        x: 40,
        y: 225,
        speed: 5
    }
    o.move = function (x) {
        if (x < 0) {
            x = 0
        }
        if (x > 400 - o.img.width) {
            x = 400 - o.img.width
        }
        o.x = x
    }
    o.moveLeft = function () {
        o.move(o.x - o.speed)
    }
    o.moveRight = function () {
        o.move(o.x + o.speed)
    }
    o.collide = function (ball) {
        return judgeBang(o, ball)
    }
    return o
}