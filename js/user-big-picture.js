import './similar-pictures.js';
import {isEscapeKey} from './util-data.js';
import {renderPhotoData} from './render-big-picture.js';

const bigPicture = document.querySelector('.big-picture');
const body = document.querySelector('body');
const pictures = body.querySelector('.pictures');
const socialCommentCount = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const bigPictureCancel = bigPicture.querySelector('.big-picture__cancel');

const changeClassClose = () => {
  bigPicture.classList.add('hidden');
  socialCommentCount.classList.remove('hidden');
  commentsLoader.classList.remove('hidden');
  body.classList.remove('modal-open');
};

const changeClassOpen = () => {
  bigPicture.classList.remove('hidden');
  socialCommentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  body.classList.add('modal-open');
};

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    changeClassClose();
  }
};

const openBigPicture = () => {
  changeClassOpen();
  document.addEventListener('keydown', onDocumentKeydown);
};

const closeBigPicture = () => {
  changeClassClose();
};

pictures.addEventListener('click', (evt) => {
  if (evt.target.closest('.picture__img')) {
    openBigPicture();
    renderPhotoData(evt);
  }
});

bigPictureCancel.addEventListener('click', () => {
  closeBigPicture();
});
