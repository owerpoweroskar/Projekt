input.onGesture(Gesture.ScreenUp, function () {
    radio.sendString("JA")
})
input.onGesture(Gesture.ScreenDown, function () {
    radio.sendString("NEJ")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onGesture(Gesture.Shake, function () {
    let ringsignal = ""
    radio.sendValue(ringsignal, 1)
})
radio.onReceivedValue(function (name, value) {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
basic.showIcon(IconNames.Happy)
radio.setGroup(14)
basic.pause(2000)
basic.clearScreen()
if (input.buttonIsPressed(Button.A)) {
	
}
if (input.buttonIsPressed(Button.B)) {
	
}
if (input.buttonIsPressed(Button.AB)) {
	
}
