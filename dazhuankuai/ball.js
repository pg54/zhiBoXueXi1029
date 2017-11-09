/**
 * Created by pangang on 2017/11/8.
 */
var Ball = function () {
    var image = imageFromPath('ball.png')
    var o = {
        img: image,
        x: 40,
        y: 200,
        speedX: 20,
        speedY: 20,
        fired: false,
    }
    o.fire = function () {
        o.fired = true
    }
    o.move = function () {
        if (o.fired) {
            if (o.x < 0 || o.x > 400) {
                o.speedX = -o.speedX
            }
            if (o.y < 0 || o.y > 300) {
                o.speedY = -o.speedY
            }
            o.x += o.speedX
            o.y += o.speedY
        }
    }
    o.反弹 = function () {
        o.speedY *= -1
    }
    return o
}