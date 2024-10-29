import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Define supported languages
const supportedLanguages = ['en', 'ar'];

// Function to get the user's preferred language safely
const getUserLanguage = () => {
  if (typeof window !== 'undefined') {
    // Check if running in the browser
    const userLanguage = navigator.language || navigator.userLanguage; // Fallback for older browsers
    return userLanguage.split('-')[0]; // Extract the language code (first two characters)
  }
  return 'en'; // Default language for SSR
};

// Determine the initial language based on the user's language
const languageCode = getUserLanguage();
const initialLanguage = supportedLanguages.includes(languageCode) ? languageCode : 'en';

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: 'en', // Default to 'en' if no supported language is detected
    lng: initialLanguage, // Set the initial language based on user preference
    interpolation: {
      escapeValue: false // React already handles escaping
    },
    resources: {
      en: {
        translations: require('./locales/en/translations.json')
      },
      ar: {
        translations: require('./locales/ar/translations.json')
      }
    },
    ns: ['translations'],
    defaultNS: 'translations',
  });

i18n.languages = supportedLanguages;

export default i18n;
