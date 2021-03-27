basic.forever(function () {
    input.setSoundThreshold(SoundThreshold.Loud, 0)
    led.enable(true)
    led.setBrightness(128)
    led.plotBarGraph(
    input.soundLevel(),
    0
    )
    basic.pause(100)
    basic.clearScreen()
})
