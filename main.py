strip: neopixel.Strip = None
range2: neopixel.Strip = None

def on_forever():
    global strip, range2
    strip = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB_RGB)
    range2 = strip.range(0, 5)
    strip.set_brightness(63.75)
    strip.show()
    strip.set_pixel_color(0, neopixel.colors(NeoPixelColors.RED))
    strip.set_pixel_color(2, neopixel.colors(NeoPixelColors.GREEN))
    basic.pause(100)
    strip.clear()
basic.forever(on_forever)
