input.onGesture(Gesture.Shake, function () {
    music.playMelody("C5 B A G F E D C ", 500)
})
music.playMelody("C5 B A G F E D C ", 500)
basic.forever(function () {
    music.playMelody("C5 B A G F E D C ", 500)
})
loops.everyInterval(100, function () {
    music.playMelody("C5 B A G F E D C ", 500)
})
