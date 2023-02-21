const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const names = ['Артём', 'Геннадий', 'Борис', 'Григорий', 'Джон', 'Петр', 'Майкл', 'Федор', 'Егор'];
const PHOTO_ELEMENT_COUNT = 25;
const COMMENT_COUNT = 3;

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

const idPhoto = createIdGenerator(25);
const urlPhoto = createIdGenerator(25);
const idRandomComment = createIdRandomGenerator(999);

const createComment = () => ({
  id: idRandomComment(),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: getSomeRandomElement(messages, 2),
  name: getRandomElement(names),
});

const createPhotoElement = () => ({
  id: idPhoto(),
  url: `photos/${urlPhoto()}.jpg`,
  description: 'Это какое-то описание фотографии',
  likes: getRandomInteger(15, 200),
  comments: Array.from({length: COMMENT_COUNT}, createComment),
});

const photoElements = Array.from({length: PHOTO_ELEMENT_COUNT}, createPhotoElement);

photoElements();
