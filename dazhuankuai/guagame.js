/**
 * Created by pangang on 2017/11/8.
 */
var GuaGame = function (fps) {
    var g = {
        keydowns: {},
        actions: {}
    }
    var canvas = document.querySelector('#id-canvas')
    var context = canvas.getContext('2d')
    g.canvas = canvas
    g.context = context

    window.addEventListener('keydown', function () {
        g.keydowns[event.code] = true
    })

    window.addEventListener('keyup', function () {
        g.keydowns[event.code] = false
    })

    g.registerAction = function (key, callback) {
        g.actions[key] = callback
    }

    g.drawImage = function (pImage) {
        g.context.drawImage(pImage.img, pImage.x, pImage.y)
    }
//      timer
    setInterval(function () {
        var actions = Object.keys(g.actions)
        for (var i = 0; i < actions.length; i++) {
            var key = actions[i]
            if (g.keydowns[key]) {
                g.actions[key]()
            }
        }
        g.update()
        g.context.clearRect(0, 0, canvas.width, canvas.height)
        g.draw()
    }, 1000 / fps)
    return g
}