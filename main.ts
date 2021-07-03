let rightMotorSpeed = 0
let leftMotorSpeed = 0
let right = 0
let left = 0
let roll = 0
let pitch = 0
basic.showString("T")
radio.setGroup(1)
basic.forever(function () {
    pitch = 0 - input.rotation(Rotation.Pitch)
    roll = input.rotation(Rotation.Roll)
    if (input.buttonIsPressed(Button.A)) {
        left = pitch + roll
        right = pitch - roll
        leftMotorSpeed = Math.map(left, -90, 90, -100, 100)
        rightMotorSpeed = Math.map(right, -90, 90, -100, 100)
        radio.sendValue("LMotor", leftMotorSpeed)
        radio.sendValue("RMotor", rightMotorSpeed)
        basic.showString("A")
    } else if (input.buttonIsPressed(Button.B)) {
        let Obstacle = 0
        radio.sendValue("Obstacle", Obstacle)
        basic.showString("O")
    } else {
        radio.sendValue("Stop", 0)
        basic.showString("T")
    }
})
