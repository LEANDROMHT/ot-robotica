input.onButtonPressed(Button.A, function () {
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        . # # . .
        . # # . .
        . . . . .
        . . . . .
        `)
    robotbit.Servo(robotbit.Servos.S1, 0)
    basic.pause(1000)
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
    robotbit.Servo(robotbit.Servos.S1, 90)
    basic.pause(1000)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # . . # .
        # # # . .
        # # # # .
        # . . # .
        . . . . .
        `)
    robotbit.Servo(robotbit.Servos.S2, 180)
})
basic.forever(function () {
	
})
