class Score {
  constructor() {
    this.value = 0
  }

  clear() {
    this.value = 0
    this.update()
  }

  update() {
    ++this.value
    document.getElementById('score').textContent = `${this.value}`
  }

  get() {
    return this.value
  }
}

export default Score