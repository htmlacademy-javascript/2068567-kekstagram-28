import {isEscapeKey} from './util-data.js';

const form = document.querySelector('#upload-select-image');
const imgUploadFile = document.querySelector('#upload-file');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const imgUploadCancel = document.querySelector('#upload-cancel');
const description = document.querySelector('.text__description');
const hashtag = document.querySelector('.text__hashtags');
const body = document.querySelector('body');

const MAX_QUANTITY_TAG = 5;

const pristine = new Pristine(form, {
  classTo:'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper__error',
});

const createValidTag = (value) => {
  const tags = value
    .trim()
    .split(' ')
    .filter((tag) => tag.trim().length);
  return tags;
};

const validateSymbolsHashtag = (tags) => {
  const symbolHashtag = /#[a-zа-яё0-9]{1,19}$/i;
  const validSymbol = (tag) => symbolHashtag.test(tag);
  return createValidTag(tags).every(validSymbol);
};

const isCorrectQuantityTag = (tags) => createValidTag(tags).length <= MAX_QUANTITY_TAG;
const isRepeatTag = (tags) => {
  const lowerTags = createValidTag(tags).map((tag) => tag.toLowerCase());
  const duplicates = lowerTags.filter((number, index, numbers) => numbers.indexOf(number) !== index);
  return !(duplicates.length >= 1);
};

pristine.addValidator(hashtag, isRepeatTag, 'Хэштеги не должны повторятся');
pristine.addValidator(hashtag, isCorrectQuantityTag, `Хэштегов должно быть не более ${MAX_QUANTITY_TAG}`);
pristine.addValidator(hashtag, validateSymbolsHashtag,'Некорректный хэштэг');

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});

const closeModule = () => {
  imgUploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  form.reset();
  pristine.reset();
  document.removeEventListener('keydown', onDocumentKeydown);
};

function onDocumentKeydown (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeModule();
  }
}

imgUploadFile.addEventListener('change', () => {
  imgUploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
});

imgUploadCancel.addEventListener('click', () => {
  closeModule();
});

const stopEsc = (evt) => {
  if (evt.key === 'Escape') {
    evt.stopPropagation();
  }
};

hashtag.addEventListener('keydown', (evt) => {
  stopEsc(evt);
});

description.addEventListener('keydown', (evt) => {
  stopEsc(evt);
});
