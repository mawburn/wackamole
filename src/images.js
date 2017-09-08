import hole from './img/hole.png'
import transition from './img/frame-1.png'
import mole from './img/frame-2.png'
import hitMole from './img/hit.png'
import hitMoleTransition from './img/hit-transition.png'

const preload = () => {
  document.body.appendChild(createImg(hole))
  document.body.appendChild(createImg(transition))
  document.body.appendChild(createImg(mole))
  document.body.appendChild(createImg(hitMole))
  document.body.appendChild(createImg(hitMoleTransition))

  function createImg(url) {
    const elm = document.createElement('IMG')
    elm.src = url
    elm.classList.add('preload')
    return elm 
  }
}

export {hole, transition, mole, hitMole, hitMoleTransition}
export default preload