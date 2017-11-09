/**
 * Created by pangang on 2017/11/8.
 */
var Block = function (position) {
    //position 是 [0,0]格式
    var p = position
    var image = imageFromPath('block.png')
    var o = {
        img: image,
        x: p[0],
        y: p[1],
        alive: true,
    }
    o.kill = function () {
        o.alive = false
    }
    o.collide = function (ball) {
        return o.alive && judgeBang(o, ball)
    }
    return o
}