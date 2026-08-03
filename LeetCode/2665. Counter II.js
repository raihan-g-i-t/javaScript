const createCounter = (init) => {
  let current = init;

  return {
    increment: () => {
      return current += 1;
    },

    decrement: () => {
      return current -= 1;
    },

    reset: () => {
      return current = init;
    }
  }
}
