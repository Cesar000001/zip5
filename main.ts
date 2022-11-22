input.onButtonPressed(Button.A, function () {
	
})
function orange () {
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Orange))
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Orange))
    strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Orange))
    strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Orange))
    strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Orange))
}
function rouge () {
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Red))
}
function vert () {
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Green))
}
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P3, 5, NeoPixelMode.RGB)
strip.setBrightness(100)
basic.forever(function () {
    rouge()
    strip.show()
    strip.clear()
    basic.pause(10000)
    orange()
    strip.show()
    strip.clear()
    basic.pause(1000)
    vert()
    strip.show()
    strip.clear()
    basic.pause(10000)
})
