import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaBed, FaCalendarDay, FaCheck, FaFireFlameCurved, FaHandsPraying, FaMoon, FaWhatsapp } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { mandir } from '../assets/imageConstants';
import Footer from '../components/footer/Footer';
import History from '../components/home/history';
import NearTemple from '../components/home/NearTemple';
import LiveDarshanCard from '../components/LiveDarshanCard';
import LiveDarshanModal from '../components/LiveDarshanModal';
import ScrollToTop from '../components/ScrollToTop';
import TempleInfoCard from '../components/TempleInfoCard';
import { bottomCardsData } from '../data/cardData';

const Home = () => {
  const { t } = useTranslation();
  const [isLiveDarshanOpen, setIsLiveDarshanOpen] = useState(false);

  const phoneNumber = '8959040275';
  const whatsappMessage =
    'Namaste, mujhe Maa Baglamukhi Mandir me Guest Hotel, Hawan ya Chola booking ke liye jaankari chahiye.';
  const whatsappLink = `https://wa.me/91${phoneNumber}?text=${encodeURIComponent(
    whatsappMessage,
  )}`;

  const bookingPackages = [
      {
        id: 1,
        title: t('bookings.oneDayPackage'),
        subtitle: t('bookings.sameDayPackage'),
        includes: [t('bookings.hawanBooking'), t('bookings.cholaBooking')],
        icon: FaCalendarDay,
        image: mandir.hawan_photo_two,
      },
      {
        id: 2,
        title: t('bookings.oneDayOneNight'),
        subtitle: t('bookings.stayWithBooking'),
        includes: [t('bookings.guestHouse'), t('bookings.hawanBooking'), t('bookings.cholaBooking')],
        icon: FaMoon,
        image: mandir.guest_house_two,
      },
    ];

    const bookingServices = [
        {
          id: 1,
          title: t('bookings.guestHouse'),
          description: t('bookings.guestHouseDesc'),
          icon: FaBed,
        },
        {
          id: 2,
          title: t('bookings.hawanBooking'),
          description: t('bookings.hawanBookingDesc'),
          icon: FaFireFlameCurved,
        },
        {
          id: 3,
          title: t('bookings.cholaBooking'),
          description: t('bookings.cholaBookingDesc'),
          icon: FaHandsPraying,
        },
      ];

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
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {topCardsData.map((card) => (
              <InfoCard
                key={card.id}
                icon={<span className="text-3xl">{card.icon}</span>}
                title={t(card.titleKey)}
                description={t(card.descriptionKey)}
              />
            ))}
          </div> */}
          <section className="bg-red-50 px-4 py-16 sm:px-6 lg:px-8">
                  <div className="mx-auto max-w-7xl">
                    <div className="mb-10 text-center">
                      <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.25em] text-[#8c4558]">
                        {t('bookings.bookingPackages')}
                      </p>
                      <h2 className="text-4xl font-extrabold text-red-500 sm:text-5xl">
                        {t('bookings.packageSelect')}
                      </h2>
                    </div>
          
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                      {bookingPackages?.map((bookingPackage) => {
                        const Icon = bookingPackage.icon;
                        return (
                          <article
                            key={bookingPackage.id}
                            className="overflow-hidden rounded-lg bg-white shadow-[0_18px_50px_rgba(31,41,55,0.12)]"
                          >
                            <div className="grid grid-cols-1 sm:grid-cols-[220px_1fr]">
                              <div className="relative min-h-56 overflow-hidden">
                                <img
                                  src={bookingPackage.image}
                                  alt={bookingPackage.title}
                                  className="h-full w-full object-cover"
                                />
                                <div className="absolute inset-0 bg-red-950/30" />
                                <div className="absolute left-5 top-5 flex h-14 w-14 items-center justify-center rounded-full bg-white text-red-500 shadow-lg">
                                  <Icon className="text-2xl" aria-hidden="true" />
                                </div>
                              </div>
          
                              <div className="p-7">
                                <p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-[#8c4558]">
                                  {bookingPackage.subtitle}
                                </p>
                                <h3 className="mb-5 text-3xl font-extrabold text-gray-900">
                                  {bookingPackage.title}
                                </h3>
          
                                <ul className="mb-7 space-y-3">
                                  {bookingPackage.includes.map((item) => (
                                    <li
                                      key={item}
                                      className="flex items-center gap-3 text-base font-bold text-gray-700"
                                    >
                                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-100 text-red-500">
                                        <FaCheck className="text-xs" aria-hidden="true" />
                                      </span>
                                      {item}
                                    </li>
                                  ))}
                                </ul>
          
                                <a
                                  href={whatsappLink}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="inline-flex items-center justify-center gap-3 rounded-full bg-green-600 px-7 py-3 text-sm font-extrabold text-white transition hover:bg-green-700"
                                >
                                  <FaWhatsapp className="text-xl" aria-hidden="true" />
                                  {t('bookings.packageBook')}
                                </a>
                              </div>
                            </div>
                          </article>
                        );
                      })}
                    </div>
                  </div>
                </section>
                <section className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
                  <div className="mx-automax-w-[1600px] overflow-hidden rounded-lg bg-white shadow-[0_20px_70px_rgba(31,41,55,0.12)]">
                    <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr]">
                      <div className="relative min-h-80 overflow-hidden">
                        <img
                          src={mandir.guest_house}
                          alt="Guest house sitting room"
                          className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-red-950/45" />
                        <div className="absolute inset-x-0 bottom-0 p-8 text-white">
                          <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em]">
                            {t('bookings.directBookingHelp')}
                          </p>
                          <h2 className="text-3xl font-extrabold sm:text-4xl">
                            {t('bookings.guestHawanChola')}
                          </h2>
                        </div>
                      </div>

                      <div className="p-8 sm:p-10 lg:p-12">
                        <p className="mb-6 text-lg leading-8 text-gray-600">
                          {t('bookings.bookingDescription')}
                        </p>

                        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                          {bookingServices.map((service) => {
                            const Icon = service.icon;

                            return (
                              <article
                                key={service.id}
                                className="rounded-lg border border-gray-200 bg-gray-50 p-5"
                              >
                                <Icon
                                  className="mb-4 text-3xl text-red-500"
                                  aria-hidden="true"
                                />
                                <h3 className="mb-2 text-lg font-extrabold text-gray-900">
                                  {service.title}
                                </h3>
                                <p className="text-sm leading-6 text-gray-600">
                                  {service.description}
                                </p>
                              </article>
                            );
                          })}
                        </div>

                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                          <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center gap-3 rounded-full bg-green-600 px-8 py-4 text-base font-extrabold text-white transition hover:bg-green-700"
                          >
                            <FaWhatsapp className="text-2xl" aria-hidden="true" />
                            {t('bookings.whatsapp')} {phoneNumber}
                          </a>
                          <a
                            href={`tel:+91${phoneNumber}`}
                            className="inline-flex items-center justify-center rounded-full border border-red-200 px-8 py-4 text-base font-extrabold text-red-500 transition hover:bg-red-50"
                          >
                            {t('bookings.call')} +91 {phoneNumber}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
              </section>
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
