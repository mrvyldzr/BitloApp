import i18n from 'i18n-js';
//import * as RNLocalize from 'react-native-localize';
import * as Localization from 'react-native-localization';

import tr from './tr';
import en from './en';

// Set the locale once at the beginning of your app.
i18n.locale = Localization.locale;
// When a value is missing from a language it'll fallback to another language with the key present.
i18n.fallbacks = true;

i18n.translations = {
  tr,
  en,
};
export default i18n;