import GameBoard from './gameBoard'
import Score from './score'
import preloadImages, {hole, transition, mole, hitMole, hitMoleTransition} from './images'

import normalize from 'normalize.css'
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

// Game Loop
const gameLoop = () => {
  const difficulty = document.querySelector('input[name="difficulty"]:checked').value
  const moleLength = () => 1000 - (score.get() * difficulty)
  const newMoleTimer = () => 500 - (score.get() * (difficulty/2))

  return setInterval(() => {
    gameBoard.newMole(moleLength())  
  }, newMoleTimer())
}

// Event Listeners

//-- Start Game
gameButton.addEventListener('click', e => {
  const buttonText = gameButton.textContent

  if(!gameActive) {
    gameButton.textContent = 'Stop'
    gameButton.style.backgroundColor = '#e87b51'
    gameButton.style.color = '#FFF'
    gameActive = gameLoop()
    score.clear()
  } else {
    gameButton.textContent = 'Start'
    gameButton.removeAttribute('style')
    clearInterval(gameActive)
    gameActive = false
  }

  difficultyOpts.forEach(mode => mode.disabled = gameActive)
})

//-- Register Smash
gameBoardElm.addEventListener('click', e => {
  if(gameActive && e.type === 'click' || e.keyCode == 13) {
    const target = e.target

    if(target && target.classList.contains('space') && target.dataset.scorable === 'true') {
      score.update()
      gameBoard.hitMole(target)
    }
  }
})
