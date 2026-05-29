import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { mandir } from '../assets/imageConstants';
import Footer from '../components/footer/Footer';
import History from '../components/home/history';
import NearTemple from '../components/home/NearTemple';
import InfoCard from '../components/InfoCard';
import LiveDarshanCard from '../components/LiveDarshanCard';
import LiveDarshanModal from '../components/LiveDarshanModal';
import ScrollToTop from '../components/ScrollToTop';
import TempleInfoCard from '../components/TempleInfoCard';
import { bottomCardsData, topCardsData } from '../data/cardData';

const Home = () => {
  const { t } = useTranslation();
  const [isLiveDarshanOpen, setIsLiveDarshanOpen] = useState(false);

  return (
    <>
      <div className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center animate-zoom"
            style={{
              backgroundImage: `url(${mandir.mandir_entrance})`,
            }}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-up">
              {t('home.landing.title')}
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-100 mb-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              {t('home.landing.subtitle')}
            </p>
            
            <Link to="/about" className="inline-block px-8 py-4 bg-red-700 hover:bg-red-800 text-white
            text-lg font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              {t('home.landing.cta')}
            </Link>
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
      <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="container-lg max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {topCardsData.map((card) => (
              <InfoCard
                key={card.id}
                icon={<span className="text-3xl">{card.icon}</span>}
                title={t(card.titleKey)}
                description={t(card.descriptionKey)}
              />
            ))}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {bottomCardsData.map((card) => (
              <TempleInfoCard
                key={card.id}
                subtitleKey={card.subtitleKey}
                titleKey={card.titleKey}
                items={card.items}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="mb-12">
        <LiveDarshanCard onOpen={() => setIsLiveDarshanOpen(true)} />
      </div>
      <History/>
      <NearTemple/>
      <Footer/>
      <ScrollToTop/>
      <LiveDarshanModal
        isOpen={isLiveDarshanOpen}
        onClose={() => setIsLiveDarshanOpen(false)}
      />
    </>
  );
};

export default Home;
