class Score {
  constructor() {
    this.value = 0
  }

  update() {
    document.getElementById('score').textContent = `${this.value}`
  }

  get() {
    return this.value
  }

  add(x = 1) {
    this.value += x
  }
}

export default Score