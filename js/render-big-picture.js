const bigPictureImg = document.querySelector('.big-picture__img');
const mainImg = bigPictureImg.querySelector('img');
const likesCount = document.querySelector('.likes-count');
const commentsCount = document.querySelector('.comments-count');
const socialComments = document.querySelector('.social__comments');
const socialComment = socialComments.querySelector('.social__comment');
const socialCaption = document.querySelector('.social__caption');

const renderSocialComment = ({comments}) => {
  socialComments.innerHTML = '';
  comments.forEach(({avatar, message, name}) => {
    const cloneSocialComment = socialComment.cloneNode(true);
    cloneSocialComment.querySelector('.social__picture').src = avatar;
    cloneSocialComment.querySelector('.social__picture').alt = name;
    cloneSocialComment.querySelector('.social__text').textContent = message;
    cloneSocialComment.classList.add('hidden');
    socialComments.append(cloneSocialComment);
  });
};

const renderPhotoData = ({url, likes, comments, description}) => {
  mainImg.src = url;
  likesCount.textContent = likes;
  commentsCount.textContent = comments.length;
  socialCaption.textContent = description;
};

export {renderPhotoData, renderSocialComment};

