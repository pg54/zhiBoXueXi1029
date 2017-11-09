/**
 * Created by pangang on 2017/11/8.
 */
var log = console.log.bind(console)

function imageFromPath(path) {
    var img = new Image()
    img.src = path
    return img
}


function judgeBang(o, ball) {
    if (ball.y + ball.img.height > o.y && o.img.height + o.y > ball.y) {

        if (ball.x + ball.img.width > o.x && o.img.width + o.x > ball.x) {

            return true
        }
        return false
    }
}