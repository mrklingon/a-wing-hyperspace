function MoveTie (Tf: game.LedSprite) {
    Tf.turn(Direction.Right, randint(-45, 45))
    Tf.move(0.5)
    if (AWing.isTouching(Tf)) {
        game.addScore(Tscore)
        game.removeLife(1)
        Tscore = 0
        Tf.ifOnEdgeBounce()
        Tf.set(LedSpriteProperty.X, randint(0, 4))
        Tf.set(LedSpriteProperty.Y, randint(0, 4))
    }
}
input.onButtonPressed(Button.A, function () {
    AWing.turn(Direction.Right, 45)
})
input.onButtonPressed(Button.AB, function () {
    AWing.delete()
    AWing = game.createSprite(randint(0, 4), randint(0, 4))
})
input.onButtonPressed(Button.B, function () {
    AWing.move(1)
    if (AWing.isTouchingEdge()) {
        Tscore += 10
    }
    AWing.ifOnEdgeBounce()
})
let Tscore = 0
let AWing: game.LedSprite = null
images.createBigImage(`
    . . . . . . . # # #
    . # # # . . . . # .
    # . # . . . . # # #
    . # # # . . . . . .
    . . . . . . . . . .
    `).scrollImage(1, 200)
images.createBigImage(`
    . . . . . . . # # #
    . # # # . . # . # .
    . . # . . . . # # #
    . # # # . . . . . .
    . . . . . . . . . .
    `).scrollImage(1, 200)
let Tie1 = game.createSprite(0, 0)
AWing = game.createSprite(0, 2)
let Tie2 = game.createSprite(4, 4)
game.setLife(3)
while (true) {
    MoveTie(Tie1)
    basic.pause(100)
    MoveTie(Tie2)
    basic.pause(100)
}
