const isValidLength = (str, requiredLength) => str.length <= requiredLength;
isValidLength('проверяемая строка', 10);

const isPalindrome = (str) => {
  const word = str.toLowerCase().replaceAll(' ', '');
  const wordReverse = word.split('').reverse().join('');
  return word === wordReverse;
};
isPalindrome('Лёша на полке клопа нашёл ');

const getNumber = (type) => {
  const string = (String(type)).replaceAll(' ', '');
  let elementNumber = '';
  for (const element of string) {
    if (!isNaN(Number(element))) {
      elementNumber += element;
    }
  }
  return elementNumber.length === 0 ? NaN : Number(elementNumber);
};
getNumber(('1 кефир, 0.5 батона'));

const padStart = (originalString, minLength, padString) => {
  const padStringLength = minLength - originalString.length;
  if (padStringLength <= 0) {
    return originalString;
  }
  let repeatString = '';
  while (repeatString.length < padStringLength) {
    repeatString += padString;
  }
  if (repeatString.length > padStringLength) {
    const shortElement = padString.slice(0, padStringLength - repeatString.length);
    const shortString = repeatString.slice(0, repeatString.length - padString.length);
    return `${shortElement}${shortString}${originalString}`;
  }
  return `${repeatString}${originalString}`;
};
padStart('q', 4, 'we');
