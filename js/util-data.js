const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const getSomeRandomElement = (elements, amount) => {
  const someElements = [];
  let amountRandom = getRandomInteger(1, amount);
  for (let i = 0; i < amountRandom; i++) {
    const randomElement = getRandomElement(elements);
    if (someElements.includes(randomElement)) {
      amountRandom++;
    } else {
      someElements.push(randomElement);
    }
  }
  return someElements.join(' ');
};

const createIdRandomGenerator = (max) => {
  let count = getRandomInteger(1, max);
  return () => count++;
};

const createIdGenerator = (max) => {
  let count = 1;
  return () => {
    if (max < count) {
      count = 1;
    }
    return count++;
  };
};

export {
  getRandomInteger,
  getRandomElement,
  getSomeRandomElement,
  createIdRandomGenerator,
  createIdGenerator
};

