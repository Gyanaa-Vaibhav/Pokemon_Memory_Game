import click_sound from '/click_sound.mp3?url'
import lose_sound from '/Loss.mp3?url'
import won_sound from '/won.mp3?url'
import gameStart from '/gameStart.mp3?url'

const bgm = new Audio(gameStart)
export function pauseBackground() {
    bgm.pause()
}

export default function useSound(action, status) {
    if (action == 'click') {
        const audio = new Audio(click_sound)
        audio.play()
        audio.loop = false
    }
    if (action == 'background_music') {
        bgm.play()
        bgm.loop = true
    }
    if (action == 'start_game') {
        bgm.play()
        bgm.loop = true
    }
    if (action == 'lose') {
        new Audio(lose_sound).play()
    }
    if (action == 'win') {
        new Audio(won_sound).play()
    }
}