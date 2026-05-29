import React from 'react';
import { useTranslation } from 'react-i18next';
import { mandir } from '../../assets/imageConstants';

const AboutLanding: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center animate-zoom"
            style={{
              backgroundImage: `url(${mandir.aboutus})`,
            }}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-up">
              {t('about.title')}
            </h1>
          </div>
        </div>

        <style>{`
          @keyframes zoom {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.1);
            }
          }

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-zoom {
            animation: zoom 12s ease-in-out infinite;
          }

          .animate-fade-in-up {
            animation: fadeInUp 1s ease-out forwards;
            opacity: 0;
          }
        `}</style>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto p-8 flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-8">
        {/* Image Section */}
        <div className="lg:w-1/2">
          <img
            src={mandir.mataji}
            alt="Baglamukhi Mata Temple"
            className="rounded-lg shadow-lg w-full"
          />
        </div>

        {/* Temple Info Card */}
        <div className="lg:w-1/2 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">{t('about.knowAboutTemple')}</h2>
          <h3 className="text-2xl font-bold text-red-600 mb-6">{t('about.templeTiming')}</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <p className="text-lg font-medium text-gray-700">{t('about.mangalaAarti')}</p>
              <p className="text-gray-600">{t('about.mangalaAartiTime')}</p>
            </div>
            <div>
              <p className="text-lg font-medium text-gray-700">{t('about.sandhyaAarti')}</p>
              <p className="text-gray-600">{t('about.sandhyaAartiTime')}</p>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6 mb-6">
            <p className="text-lg font-medium text-gray-700 mb-2">{t('about.darshanHours')}</p>
            <p className="text-gray-600">{t('about.morning')}</p>
            <p className="text-gray-600">{t('about.evening')}</p>
          </div>

          <div className="border-t border-gray-200 pt-6 mb-6">
            <p className="text-lg font-medium text-gray-700 mb-2">{t('about.hawanPuja')}</p>
            <p className="text-gray-600">{t('about.availableOnRequest')}</p>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <p className="text-lg font-medium text-gray-700 mb-2">{t('about.navratriSpecial')}</p>
            <p className="text-gray-600">{t('about.extendedTimings')}</p>
          </div>
        </div>
      </div>

      {/* Information Section */}
      <div className="container mx-auto px-8 py-12">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-extrabold text-red-700 mb-4">{t('about.informationAboutTemple')}</h2>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-6xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            {t('about.infoParagraph1')}
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            {t('about.infoParagraph2')}
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            {t('about.infoParagraph3')}
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            {t('about.infoParagraph4')}
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            {t('about.infoParagraph5')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutLanding;