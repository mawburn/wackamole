class Score {
  constructor() {
    this.value = 0
    document.getElementById('score').textContent = `${this.value}`
  }

  clear() {
    this.value = 0
    document.getElementById('score').textContent = `${this.value}`
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