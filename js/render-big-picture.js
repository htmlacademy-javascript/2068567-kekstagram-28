import {similarPictureElements} from './similar-pictures.js';

const bigPictureImg = document.querySelector('.big-picture__img');
const mainImg = bigPictureImg.querySelector('img');
const likesCount = document.querySelector('.likes-count');
const commentsCount = document.querySelector('.comments-count');
const socialComments = document.querySelector('.social__comments');
const socialComment = socialComments.querySelector('.social__comment');
const socialCaption = document.querySelector('.social__caption');

const findPhoto = (evt) => {
  const shortPath = (evt.target.src).split('/').slice(-2).join('/');
  const findPhotoSrc = similarPictureElements.find((pictureElement) => pictureElement.url === shortPath);
  return findPhotoSrc;
};

const renderSocialComment = (evt) => {
  socialComments.innerHTML = '';

  findPhoto(evt).comments.forEach(({avatar, message, name}) => {
    const copySocialComment = socialComment.cloneNode(true);
    copySocialComment.querySelector('.social__picture').src = avatar;
    copySocialComment.querySelector('.social__picture').alt = name;
    copySocialComment.querySelector('.social__text').textContent = message;

    socialComments.append(copySocialComment);
  });

};

const renderPhotoData = (evt) => {
  mainImg.src = findPhoto(evt).url;
  likesCount.textContent = findPhoto(evt).likes;
  commentsCount.textContent = findPhoto(evt).comments.length;
  socialCaption.textContent = findPhoto(evt).description;
  renderSocialComment(evt);
};

export {renderPhotoData};

