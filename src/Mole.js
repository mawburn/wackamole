import default from './Grid'
import hole from './img/hole.png'
import transitionFrame from './img/frame-1.png'
import mole from './img/frame-2.png'

export default class Mole extends Grid {

  constructor(grid, defaultHole = hole, defaultTransition = transitionFrame, defaultMole = mole) {
    super(grid)
    this.hole = defaultHole
    this.transition = defaultTransition
    this.mole = defaultMole
  }

  render() {
    const mole = document.createElement('img')
    mole.src = this.defaultImg
    return mole
  }

  activate(grid, callback, timer = 100) {
    

    setTimeout({

    }, 100)
  } 
}