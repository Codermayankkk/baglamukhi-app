import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { mandir } from '../../assets/imageConstants';

const History = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-linear-to-br from-yellow-50 to-orange-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="container-lg max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Section - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={mandir.mander_one}
                alt="Temple History"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
            </div>
          </div>

          {/* Right Section - Content */}
          <div className="lg:pl-8">
            <span className="text-sm font-semibold uppercase tracking-wide text-red-800 bg-red-100 px-4 py-2 rounded-full mb-6 inline-block">
              {t('history.knowAboutTemple')}
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
              {t('history.historyTitle')}
            </h1>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              {t('history.paragraph1')}
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              {t('history.paragraph2')}
            </p>
            <Link
              to="/about"
              className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-red-800 hover:bg-red-900 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              {t('history.knowMore')}
              <svg className="ml-3 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;