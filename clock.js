function Clock () {
  // 1. Create a Date object.
  let date = new Date();
  // 2. Store the hours, minutes, and seconds.
  this.hours = date.getHours();
  this.minutes = date.getMinutes();
  this.seconds = date.getSeconds();
  // 3. Call printTime.
  this.printTime();
  // 4. Schedule the tick at 1 second intervals.
  setInterval(this._tick.bind(this), 1000);
}

Clock.prototype.printTime = function () {
  // Format the time in HH:MM:SS
  let formattedTime = `${this.hours}:${this.minutes}:${this.seconds}`;
  console.log(formattedTime);
  // Use console.log to print it.
};

Clock.prototype._tick = function () {
  // 1. Increment the time by one second.
  this.seconds++;
  if (this.seconds == 60) {
    this.minutes++;
    this.seconds = 0;
  }
  if (this.minutes === 60) {
    this.hours++;
    this.minutes = 0;
  }
  if (this.hours === 24) {
    this.hours = 0;
  }
  // 2. Call printTime.

  this.printTime();
};

const clock = new Clock();
