import { minutesDisplay } from './elements.js';
import Sound from './sounds.js'
const sounds = Sound({})
import Timer from './timer.js';
const timer = Timer()

export default function Controls({ btnPause,
btnPlay, btnDark, btnLight, mode}) {
  function play() {
    btnPlay.classList.add('hide')
    btnPause.classList.remove('hide')
    sounds.buttonPress()
  
    timer.countdown()
  }
  
  function pause() {
    btnPlay.classList.remove('hide')
    btnPause.classList.add('hide')
    sounds.buttonPress()
  
    timer.hold()
  }
  
  function stop() { 
    btnPlay.classList.remove('hide')
    btnPause.classList.add('hide')   
    timer.reset()
    sounds.buttonPress()
  }

  function increase() {
    if(Number(minutesDisplay.textContent) < 95) {
     let newMinutes = Number(minutesDisplay.textContent) + 5
     timer.updateDisplay(newMinutes, 0)
     sounds.buttonPress()
    }
  }
  
  function decrease() {
    if(Number(minutesDisplay.textContent) > 5) {
     let newMinutes = Number(minutesDisplay.textContent) - 5
     timer.updateDisplay(newMinutes, 0)
     sounds.buttonPress()
  }}

  function darkMode() {
    btnDark.classList.remove('hide')
    btnLight.classList.add('hide') 
   
    mode.classList.add('dark')
   }
   
   function lightMode() {
     btnDark.classList.add('hide')
     btnLight.classList.remove('hide') 
   
     mode.classList.remove('dark')
   }

  return {
    play, 
    pause, 
    stop,
    increase,
    decrease,
    darkMode,
    lightMode
  }
}


