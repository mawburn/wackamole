import {hole, transition, mole, hitMole, hitMoleTransition} from './images'

export default class Spaces {
  constructor() {
    this.spaces = document.querySelectorAll('.space')
    this.spaces.forEach((img) => img.style.backgroundImage = `url(${hole})`)
  }

  hitMole(space) {
    space.dataset.scorable = 'hit'
    space.style.backgroundImage = `url(${hitMole})`
  }

  newMole(moleTimer) {
    const randSpace = this.getRandomSpace()
    randSpace.style.backgroundImage = `url(${transition})`

    setTimeout(() => {
      randSpace.style.backgroundImage = `url(${mole})`
      randSpace.dataset.scorable = 'true'
      
      setTimeout(() => {
        this.removeMole(randSpace)
      }, moleTimer)
    }, 100)  
  }

  removeMole(space) {
    const transImg = (space.dataset.scorable === 'hit') ? hitMoleTransition : transition 

    return new Promise(res => {
      space.dataset.scorable = 'false'
      space.style.backgroundImage = `url(${transImg})`

      setTimeout(() => {
        space.style.backgroundImage = `url(${hole})`
      }, 100)
    })
  }

  getRandomSpace(badSpaces = []) {
    const randSpace = Math.floor(Math.random() * 9)
    const spaceBg = this.getSpaceBackground(randSpace)

    if(spaceBg === hole.replace(/^.*[\\\/]/, '')) {
      return this.spaces[randSpace]
    } 

    const newBadSpaces = badSpaces.concat([randSpace])
    return this.getRandomSpace(newBadSpaces)
  }

  getSpaceBackground(num) {
    return this.spaces[num].style.backgroundImage.slice(4, -1).replace(/"/g, '').replace(/^.*[\\\/]/, '')
  }
}