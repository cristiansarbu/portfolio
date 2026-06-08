import es from './es';
import en from './en';
import de from './de';

export type Locale = 'es' | 'en' | 'de';

const translations = { es, en, de };

export function getLangFromUrl(url: URL): Locale {
  const segments = url.pathname.split('/');
  const language = segments[1];
  if (language === 'en' || language === 'de') {
    return language;
  }

  return 'es';
}

export function useTranslations(lang: Locale) {
  return function t(key: keyof typeof es): string {
    const translationInCurrentLang = translations[lang][key];
    if (translationInCurrentLang !== undefined) {
      return translationInCurrentLang;
    }

    const translationInDefaultLang = translations['es'][key];
    if (translationInDefaultLang !== undefined) {
      return translationInDefaultLang;
    }

    return key;
  };
}
