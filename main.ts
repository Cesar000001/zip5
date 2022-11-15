let strip: neopixel.Strip = null
basic.forever(function () {
    strip = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB_RGB)
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Yellow))
    strip.setPixelColor(4, neopixel.colors(NeoPixelColors.White))
    strip.setBrightness(63.75)
    while (true) {
        strip.show()
        basic.pause(100)
        strip.clear()
    }
})
