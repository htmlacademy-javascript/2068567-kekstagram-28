import {createPhotoElements} from './data.js';

const similarListElement = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');
const similarPictureElements = createPhotoElements(25);
const similarListFragment = document.createDocumentFragment();

similarPictureElements.forEach(({url, likes, comments}) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  similarListFragment.append(pictureElement);
});

similarListElement.append(similarListFragment);

export {similarPictureElements};
