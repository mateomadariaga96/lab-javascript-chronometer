class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = 0
  }

    
    startClick(callback) {
      let that = this
      this.intervalId = setInterval(function () {
        that.currentTime++;
      }, 1000)
    }

    getMinutes() {
      return Math.floor(this.currentTime / 60)
    }

    getSeconds() {
      return this.currentTime % 60
    }

    twoDigitsNumber(number) {
      if (number < 10) {
        return `0${number}`
      }
      return `${number}`

    }

   stopClick() {
    // ... your code goes here
    clearInterval(this.intervalId)
  }

  resetClick() {
    // ... your code goes here
    this.currentTime = 0
  }

  splitClick() {
    // ... your code goes here
    let minStr = `${this.getMinutes()}`
      let secStr = `${this.getSeconds()}`
      if (minStr.length === 1) {
        minStr = "0" + minStr
      }
      if (secStr.length === 1) {
        secStr = "0" + secStr
      }
      return minStr + ":" + secStr
  }
}
