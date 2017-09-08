import GameBoard from './gameBoard'
import Score from './score'
import preloadImages, {hole, transition, mole, hitMole, hitMoleTransition} from './images'

import normalize from 'normalize.css'
import toggleSwitch from './styles/switch.css'
import css from './styles/style.css'

// Initialize
const modeElm = document.getElementById('mode')
const gameBoardElm = document.getElementById('gameboard')
const gameButton = document.getElementById('game')
const difficultyOpts = document.querySelectorAll('.difficulty')
const holeName = hole.replace(/^.*[\\\/]/, '')
let gameActive

const gameBoard = new GameBoard()
const score = new Score()

preloadImages()
score.update()

// Game Loop
const gameLoop = () => {
  const difficulty = document.querySelector('input[name="difficulty"]:checked').value
  const moleLength = () => 1000 - (score.value * difficulty)
  const newMoleTimer = () => 500 - (score.value * (difficulty/2))

  return setInterval(() => {
    gameBoard.newMole(moleLength())  
  }, newMoleTimer())
}

// Event Listeners
gameBoardElm.addEventListener('click', e => {
  const target = e.target

  if(target && target.classList.contains('space') && target.dataset.scorable === 'true') {
    score.update()
    gameBoard.hitMole(target)
  }
})

modeElm.addEventListener('click', e => {
  if(e.target.type === 'radio') {
    difficulty = e.target.value
  }
})

gameButton.addEventListener('click', e => {
  const buttonText = gameButton.textContent

  if(!gameActive) {
    gameButton.textContent = 'Stop'
    gameActive = gameLoop()
    score.clear()
  } else {
    gameButton.textContent = 'Start'
    clearInterval(gameActive)
    gameActive = false
  }

  difficultyOpts.forEach(mode => mode.disabled = gameActive)
})