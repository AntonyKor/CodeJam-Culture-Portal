import i18n from "i18next";
import { reactI18nextModule } from "react-i18next";
import resources from './translations';

i18n
  .use(reactI18nextModule)
  .init({
    resources,
    lng: "en",
    keySeparator: false
  });
