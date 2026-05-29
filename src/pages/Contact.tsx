import { useTranslation } from 'react-i18next';
import { mandir } from '../assets/imageConstants';
import InfoContact from '../components/contact/infoContact';
import Footer from '../components/footer/Footer';
import ScrollToTop from '../components/ScrollToTop';

const Contact = () => {
  const { t } = useTranslation();
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="relative h-[60vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center animate-zoom"
            style={{
              backgroundImage: `url(${mandir.contactImage})`,
            }}
          />
          <div className="absolute inset-0 bg-black/45" />
        </div>

        <div className="relative z-10 flex h-full items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold text-white animate-fade-in-up sm:text-5xl md:text-6xl lg:text-7xl">
              {t('contact.title')}
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
      </section>

      <InfoContact />
      <Footer/>
      <ScrollToTop/>
    </main>
  );
};

export default Contact;
