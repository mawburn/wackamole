import hole from './img/hole.png'
import transition from './img/frame-1.png'
import mole from './img/frame-2.png'
import hitMole from './img/hit.png'
import hitMoleTransition from './img/hit-transition.png'

import normalize from 'normalize.css'
import css from './styles/style.css'

const spaces = document.querySelectorAll('.space')
const container = document.getElementById('container')
const scoreElm = document.getElementById('score')
let score = 0

scoreElm.textContent = `${score}`

spaces.forEach((img) => img.src = hole)

const holeName = hole.replace(/^.*[\\\/]/, '')

setInterval(() => {
  const space = getRandomSpace(holeName)
  
  space.src = transition

  setTimeout(() => {
    space.src = mole
    space.dataset.scorable = true

    setTimeout(() => {
      space.src = (space.dataset.scorable === 'false') ? hitMoleTransition : transition
      space.dataset.scorable = false

      setTimeout(() => {
        space.src = hole
      }, 100) 
    }, (1000 - score*20)) 
  }, 100)
}, (1000 - score*50)) 

container.addEventListener('click', (e) => {
  const target = e.target

  if(target && target.nodeName === 'IMG' && target.dataset.scorable === 'true') {
    ++score
    scoreElm.textContent = `${score}`
    target.dataset.scorable = false
    target.src = hitMole
  }
})

function getRandomSpace(hole, delay = false) {
  const spaceNum = Math.floor(Math.random() * (9) + 1)
  const elm = document.getElementById(`space-${spaceNum}`)

  const elmSrcName = elm.src.replace(/^.*[\\\/]/, '')

  if(elmSrcName === hole) {
    return elm
  }

  if(delay) {
    return setTimeout(() => {
      return getRandomSpace(hole, false)
    }, 250)
  }

  return getRandomSpace(hole, true)
}