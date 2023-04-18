import Controls from './controls.js'
const controls = Controls({})
import { minutesDisplay, secondsDisplay} from './elements.js'
import Sound from './sounds.js'
const sounds = Sound({})


export default function Timer() {    
  let timerTimeOut
  let minutes = Number(minutesDisplay.textContent)

  function updateDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
  }  

  
  function countdown() {
    timerTimeOut = setTimeout(function() {
      let seconds = Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)
      
      let isFinished = minutes <= 0 && seconds <= 0
      
      updateDisplay(minutes, 0)
      
      if (isFinished) {
        controls.stop()
        updateDisplay(minutes, seconds)
        sounds.timeEnd()
        return
      }
      
      if (seconds <= 0) {
        seconds = 60
        --minutes          
      }    
      
      updateDisplay(minutes, String(seconds - 1))    
      
      countdown()
    }, 1000)
  }
  
  function hold() {
    clearTimeout(timerTimeOut)
  }

  function reset() {
    updateDisplay(minutes, 0)
    clearTimeout(timerTimeOut)
  }

  return {
    countdown,
    updateDisplay, 
    reset, 
    hold       
  }
}