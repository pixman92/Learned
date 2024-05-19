class Chainer {
  constructor() {
    this._queue = [];
  }

  add(fn) {
    this._queue.push(fn);
    return this;
  }

  async next() {
    const fn = this._queue.shift();
    if (fn) {
      await fn();
      await this.next();
    }
  }

  async start() {
    await this.next();
  }
}

const chain = (fns) => {
  const chainer = new Chainer();
  for (const fn of fns) {
    chainer.add(fn);
  }
  return chainer;
};

// const example = async () => {
//   console.log("Starting");
//   await chain([
//     () => console.log("First function"),
//     () => console.log("Second function"),
//     () => console.log("Third function"),
//   ]).start();
//   console.log("Finished");
// };

// example();
