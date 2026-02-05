import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

export default function LanguageSwitcher() {
  const router = useRouter();
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language || 'en';

  const switchLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    document.cookie = `NEXT_LOCALE=${lang};path=/;max-age=31536000`;
  };

  return (
    <div className="language-switcher">
      <button
        onClick={() => switchLanguage('en')}
        className={currentLanguage === 'en' ? 'active' : ''}
      >
        EN
      </button>
      <button
        onClick={() => switchLanguage('hi')}
        className={currentLanguage === 'hi' ? 'active' : ''}
      >
        HI
      </button>
    </div>
  );
}
