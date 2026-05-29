import { useTranslation } from 'react-i18next';

const LanguageToggle = () => {
  const { i18n, t } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'hi' : 'en';
    i18n.changeLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  const currentLang = i18n.language;

  return (
    <div className="flex items-center gap-3">
      <span className="text-base font-semibold text-gray-700">
        {t('navbar.language')} :
      </span>
      <button
        type="button"
        onClick={toggleLanguage}
        className="relative h-10 w-24 rounded-full bg-gray-200 shadow-inner transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
        aria-label="Toggle language"
      >
        <div
          className={`absolute top-1 h-8 w-11 rounded-full bg-white shadow-md transition-transform duration-300 ${
            currentLang === 'hi' ? 'translate-x-12' : 'translate-x-1'
          }`}
        />
        <span
          className={`absolute left-4 top-2.5 text-sm font-extrabold transition-colors duration-300 ${
            currentLang === 'en' ? 'text-red-600' : 'text-gray-400'
          }`}
        >
          En
        </span>
        <span
          className={`absolute right-4 top-2.5 text-sm font-extrabold transition-colors duration-300 ${
            currentLang === 'hi' ? 'text-red-600' : 'text-gray-400'
          }`}
        >
          Hi
        </span>
      </button>
    </div>
  );
};

export default LanguageToggle;
