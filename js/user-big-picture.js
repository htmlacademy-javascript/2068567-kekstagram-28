import './similar-pictures.js';
import {isEscapeKey} from './util-data.js';
import {renderPhotoData, renderSocialComment} from './render-big-picture.js';
import {similarPictureElements} from './similar-pictures.js';

const bigPicture = document.querySelector('.big-picture');
const body = document.querySelector('body');
const pictures = body.querySelector('.pictures');
const socialCommentCount = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const bigPictureCancel = bigPicture.querySelector('.big-picture__cancel');
const commentsCount = bigPicture.querySelector('.comments-count');
const COMMENT_AMOUNT = 5;
let commentCount = COMMENT_AMOUNT;

const changeClassClose = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  commentsLoader.classList.remove('hidden');
  socialCommentCount.textContent = `${COMMENT_AMOUNT} из ${commentsCount.textContent} комментариев`;
  commentCount = COMMENT_AMOUNT;
};

const changeClassOpen = () => {
  bigPicture.classList.remove('hidden');
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

const findPhotoPath = (evt) => {
  const correctPath = (evt.target.src).split('/').slice(-2).join('/');
  return similarPictureElements.find((pictureElement) => pictureElement.url === correctPath);
};

pictures.addEventListener('click', (evt) => {
  if (evt.target.closest('.picture__img')) {
    openBigPicture();
    renderSocialComment(findPhotoPath(evt));
    renderPhotoData(findPhotoPath(evt));

    const socials = bigPicture.querySelectorAll('.social__comment');
    for (let i = 0; i < COMMENT_AMOUNT; i++) {
      socials[i].classList.remove('hidden');
    }
  }
});

bigPictureCancel.addEventListener('click', () => {
  changeClassClose();
});

commentsLoader.addEventListener('click', () => {
  commentCount += 5;
  const socialComments = bigPicture.querySelectorAll('.social__comment');
  const socialCommentsArray = Array.from(socialComments);
  const commentItem = socialCommentsArray.slice(0, commentCount);
  commentItem.forEach((element) => element.classList.remove('hidden'));
  if (commentItem.length === socialComments.length) {
    commentsLoader.classList.add('hidden');
    commentCount = COMMENT_AMOUNT;
  }
  socialCommentCount.textContent = `${commentItem.length} из ${commentsCount.textContent} комментариев`;
});
