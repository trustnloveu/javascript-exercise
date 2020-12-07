// method > obj
// function > global (window || global)

// solution in 'this' issues
// 1. save this into certain constant
// 2. (not prefered) pass another argument(this) as a second arg of forEach() method
// 3. (not prefered) using bind() method
// 4. using arrow function to callback

const video1 = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach(
      function (tag) {
        console.log(this.title, tag);
      }.bind(this)
    );
  },
};

const video2 = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags() {
    const self = this;
    this.tags.forEach(function (tag) {
      console.log(self.title, tag);
    });
  },
};

const video3 = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach(function (tag) {
      console.log(this.title, tag);
    }, this);
  },
};

const video4 = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach((tag) => {
      console.log(this.title, tag);
    });
  },
};

// video.stop = function () {
//   console.log(this);
// };

// function playVideo() {
//   console.log(this);
// }

// function Video(title) {
//   this.title = title;
//   console.log(this);
// }

// video.play();

// playVideo();
// playVideo.call({ name: "Austin" }, 1, 2);
// playVideo.apply({ name: "Austin" }, [1, 2]);
// const fn = playVideo.bind({ name: "Austin" });
// fn();
// playVideo.bind({ name: "Austin" })();

// const v = new Video("b");

// video1.showTags();
// video2.showTags();
// video3.showTags();
video4.showTags();
