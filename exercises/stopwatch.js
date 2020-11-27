function Stopwatch() {
  // initialize
  let running,
    startTime,
    endTime,
    duration = 0;

  // start
  this.start = function () {
    if (running) throw new Error("Stopwatch is already running.");
    running = true;

    startTime = new Date();
  };

  // stop
  this.stop = function () {
    if (!running) throw new Error("Stopwatch is not started yet.");
    running = false;

    endTime = new Date();
    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    duration += seconds;
    console.log(`Duration: ${sw.duration} second`);
  };

  // reset
  this.reset = function () {
    console.log("The timer has been reset by default.");
    startTime = null;
    endTime = null;
    running = false;
    duration = 0;
  };

  // getter of duration
  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
  });
}

const sw = new Stopwatch();

sw.start();

const random = Math.random() * 3000;
setTimeout(() => {
  sw.stop();
  sw.reset();
}, random);
