class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = 0
    this.currentTimeMili = 0
    this.intervalIdMili= 0
  }

  startClick(callback) {
   this.intervalId = setInterval(() => this.currentTime ++, 1000)

   this.intervalIdMili = setInterval(() => this.currentTimeMili ++, 10)
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60)
  }

  getSeconds() {
    return Math.floor(this.currentTime % 60)
  }

  getMiliseconds() {
    const mili = Math.floor(this.currentTimeMili.toString().slice(-2))
    return mili
  }

  twoDigitsNumber(num) {
    if (num > 9) {
      return `${num}`
    } else {
      return `0${num}`
    }
  }

  stopClick() {
    clearInterval(this.intervalId)
    clearInterval(this.intervalIdMili)
  }

  resetClick() {
    this.currentTime = 0
    this.currentTimeMili = 0 
  }
  
  splitClick() {
    const min = this.twoDigitsNumber(this.getMinutes())
    const sec = this.twoDigitsNumber(this.getSeconds())
    const mili = this.twoDigitsNumber(this.getMiliseconds())
    return `${min}:${sec}:${mili}`
  }
} 
