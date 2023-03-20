import {
  getRandomInteger,
  getRandomElement,
  getSomeRandomElement,
  createIdRandomGenerator,
  createIdGenerator
} from './util-data.js';

const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const names = [
  'Артём',
  'Геннадий',
  'Борис',
  'Григорий',
  'Джон',
  'Петр',
  'Майкл',
  'Федор',
  'Егор',
];
const COMMENT_COUNT = 19;
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

const createPhotoElements = (count) => Array.from({length: count}, createPhotoElement);

export {createPhotoElements};
