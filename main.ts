let rightMotorSpeed = 0
let leftMotorSpeed = 0
let right = 0
let left = 0
let roll = 0
let pitch = 0
radio.setGroup(1)
basic.showString("T")
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        pitch = 0 - input.rotation(Rotation.Pitch)
        roll = input.rotation(Rotation.Roll)
        left = pitch + roll
        right = pitch - roll
        leftMotorSpeed = Math.map(left, -90, 90, -100, 100)
        rightMotorSpeed = Math.map(right, -90, 90, -100, 100)
        radio.sendValue("LMotor", leftMotorSpeed)
        radio.sendValue("RMotor", rightMotorSpeed)
        basic.showString("A")
    } else if (input.buttonIsPressed(Button.B)) {
        radio.sendValue("Obstacle", 1)
        basic.showString("O")
    } else if (input.buttonIsPressed(Button.AB)) {
        radio.sendValue("Police", 1)
        basic.showString("P")
    } else {
        radio.sendValue("Stop", 0)
        basic.showString("T")
    }
})
