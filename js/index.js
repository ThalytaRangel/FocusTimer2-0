import Controls from './controls.js'
import Sound from './sounds.js'


import {
  btnPlay,
  btnPause,
  btnStop,
  btnPlus5,
  btnLess5, 
  btnFireplaceSound, 
  btnForestSound,
  btnRainSound,
  btnCoffeeShopSound,
  minutesDisplay,
  secondsDisplay,
  btnLight,
  btnDark,
  mode,
  rainSlider,
  forestSlider,
  coffeeSlider,
  fireSlider
} from './elements.js';

const sounds = Sound({
  btnCoffeeShopSound, 
  btnFireplaceSound, 
  btnRainSound,
  btnForestSound,
  rainSlider,
  forestSlider,
  coffeeSlider,
  fireSlider
})
const controls = Controls({
  btnPause,
  btnPlay,
  btnDark, 
  btnLight,
  mode  
})

let minutes = Number(minutesDisplay.textContent)

//Eventos
btnPlay.addEventListener('click', controls.play)
btnPause.addEventListener('click', controls.pause)
btnStop.addEventListener('click', controls.stop)
btnPlus5.addEventListener('click', controls.increase)
btnLess5.addEventListener('click', controls.decrease)
btnRainSound.addEventListener('click', sounds.rainOn)
btnForestSound.addEventListener('click', sounds.forestOn)
btnCoffeeShopSound.addEventListener('click', sounds.coffeeShopOn)
btnFireplaceSound.addEventListener('click', sounds.fireplaceOn)
btnDark.addEventListener('click', controls.lightMode)
btnLight.addEventListener('click', controls.darkMode)
rainSlider.addEventListener('input', sounds.rainVolume)
forestSlider.addEventListener('input', sounds.forestVolume)
coffeeSlider.addEventListener('input', sounds.coffeeVolume)
fireSlider.addEventListener('input', sounds.fireVolume)



