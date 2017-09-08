class Score {
  constructor() {
    this.value = 0
    this.setScore()
  }

  clear() {
    this.value = 0
    this.setScore()
  }

  update() {
    ++this.value
    this.setScore()
  }

  get() {
    return this.value
  }

  setScore() {
    const scoreElm = document.getElementById('score')

    scoreElm.textContent = `${this.value}`
    scoreElm.setAttribute('aria-label', `score: ${this.value}`)
  }
}

export default Score