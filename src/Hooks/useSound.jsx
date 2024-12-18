import click_sound from '/audio/click_sound.mp3?url'
import lose_sound from '/audio/Loss.mp3?url'
import won_sound from '/audio/won.mp3?url'
import gameStart from '/audio/gameStart.mp3?url'
import pikachu from '/audio/pika-pikachu.mp3?url'

const bgm = new Audio(gameStart)
export function pauseBackground() {
    bgm.pause()
}

export default function useSound(action) {
    if (action === 'click') {
        const audio = new Audio(click_sound)
        audio.play()
        audio.loop = false
    }
    if (action === 'pikachu') {
        const audio = new Audio(pikachu)
        audio.play()
        audio.loop = false
    }
    if (action === 'background_music') {
        bgm.play()
        bgm.loop = true
    }
    if (action === 'start_game') {
        bgm.play()
        bgm.loop = true
    }
    if (action === 'lose') {
        new Audio(lose_sound).play()
    }
    if (action === 'win') {
        new Audio(won_sound).play()
    }
}