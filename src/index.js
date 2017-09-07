import GameBoard from './gameBoard'
import Score from './score'
import preloadImages, {hole, transition, mole, hitMole, hitMoleTransition} from './images'

import normalize from 'normalize.css'
import css from './styles/style.css'

// Initialize
const container = document.getElementById('container')
const holeName = hole.replace(/^.*[\\\/]/, '')

const gameBoard = new GameBoard()
const score = new Score()

preloadImages()
score.update()

// Event Listeners
container.addEventListener('click', (e) => {
  const target = e.target

  if(target && target.classList.contains('space') && target.dataset.scorable === 'true') {
    score.add()
    score.update()
    gameBoard.hitMole(target)
  }
})

// Game Loop
const gameLoop = setInterval(() => {
  gameBoard.newMole(1000)  
}, 500)