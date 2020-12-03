function Stopwatch() {
  // initialize
  let running,
    startTime,
    endTime,
    duration = 0;

  // getter of properties
  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
  });
  Object.defineProperty(this, "startTime", {
    get: function () {
      return startTime;
    },
  });
  Object.defineProperty(this, "endTime", {
    get: function () {
      return endTime;
    },
  });
  Object.defineProperty(this, "running", {
    get: function () {
      return running;
    },
  });
}

// start
Stopwatch.prototype.start = function () {
  if (this.running) throw new Error("Stopwatch is already running.");
  this.running = true;
  this.startTime = new Date();
};

// stop
Stopwatch.prototype.stop = function () {
  if (!this.running) throw new Error("Stopwatch is not started yet.");
  this.running = false;
  this.endTime = new Date();

  const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
  duration += seconds;
};

// reset
Stopwatch.prototype.reset = function () {
  this.startTime = null;
  this.endTime = null;
  this.running = false;
  duration = 0;
};

// Execution
const watch = new Stopwatch();

watch.start();

// const random = Math.random() * 3000;
setTimeout(() => {
  watch.stop();
  watch.reset();
}, 1000);
