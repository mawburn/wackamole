import hole from './img/hole.png'
import transition from './img/frame-1.png'
import mole from './img/frame-2.png'

import normalize from 'normalize.css'
import css from './styles/style.css'

const spaces = document.querySelectorAll('.space')

spaces.forEach((img) => img.src = hole)

const holeName = hole.replace(/^.*[\\\/]/, '')

setInterval(() => {
  const space = getRandomSpace(holeName)
  
  space.src = transition

  setTimeout(() => {
    space.src = mole

    setTimeout(() => {
      space.src = transition

      setTimeout(() => {
        space.src = hole
      }, 100) 
    }, 1000)
  }, 100)
}, 250)

function getRandomSpace(hole) {
  const spaceNum = Math.floor(Math.random() * (9) + 1)
  const elm = document.getElementById(`space-${spaceNum}`)

  const elmSrcName = elm.src.replace(/^.*[\\\/]/, '')

  if(elmSrcName === hole) {
    return elm
  }

  return getRandomSpace(hole)
}