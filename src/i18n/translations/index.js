import enJSON from './en.json';
import byJSON from './by.json';
import ruJSON from './ru.json';
import authors from '../../data';

const enAuthors = {};
const byAuthors = {};
const ruAuthors = {};

authors.forEach((item, index) => {
  enAuthors[`name${index}`] = item.name.en;
  enAuthors[`placeOfBirth${index}`] = item.placeOfBirth.en;

  byAuthors[`name${index}`] = item.name.by;
  byAuthors[`placeOfBirth${index}`] = item.placeOfBirth.by;

  ruAuthors[`name${index}`] = item.name.ru;
  ruAuthors[`placeOfBirth${index}`] = item.placeOfBirth.ru;
});

export default {
  en: {
    translation: { ...enJSON, ...enAuthors },
  },
  by: {
    translation: { ...byJSON, ...byAuthors },
  },
  ru: {
    translation: { ...ruJSON, ...ruAuthors },
  },
};
