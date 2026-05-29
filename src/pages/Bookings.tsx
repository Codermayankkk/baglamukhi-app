import { useTranslation } from 'react-i18next';
import {
  FaBed,
  FaCalendarDay,
  FaCheck,
  FaFireFlameCurved,
  FaHandsPraying,
  FaMoon,
  FaWhatsapp,
} from 'react-icons/fa6';
import { mandir } from '../assets/imageConstants';
import Footer from '../components/footer/Footer';
import ScrollToTop from '../components/ScrollToTop';

const Bookings = () => {
  const { t } = useTranslation();

  const phoneNumber = '8959040275';
  const whatsappMessage =
    'Namaste, mujhe Maa Baglamukhi Mandir me Guest Hotel, Hawan ya Chola booking ke liye jaankari chahiye.';
  const whatsappLink = `https://wa.me/91${phoneNumber}?text=${encodeURIComponent(
    whatsappMessage,
  )}`;

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
  return (
    <main className="min-h-screen bg-white">
      <section className="relative h-[60vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center animate-zoom"
            style={{
              backgroundImage: `url(${mandir.hawan_three})`,
            }}
          />
          <div className="absolute inset-0 bg-black/45" />
        </div>

        <div className="relative z-10 flex h-full items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold text-white animate-fade-in-up sm:text-5xl md:text-6xl lg:text-7xl">
              {t('bookings.title')}
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

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_340px] lg:items-start">
          <div>
            <h2 className="mb-6 text-3xl font-extrabold text-red-500">
              {t('bookings.hawanBookingSection')}
            </h2>

            <div className="max-w-md rounded border-2 border-red-500 bg-white p-5 shadow-sm">
              <div className="mb-3 flex items-start justify-between gap-4">
                <h3 className="text-2xl font-extrabold leading-tight text-red-500">
                  {t('bookings.principalHawan')}
                </h3>
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-500 text-white">
                  <FaCheck className="text-sm" aria-hidden="true" />
                </span>
              </div>
              <p className="mb-4 text-3xl font-extrabold text-gray-800">
                {t('bookings.hawanDuration')}
              </p>
              <p className="text-base font-bold leading-7 text-gray-700">
                {t('bookings.hawanDurationDesc')}
              </p>
            </div>
          </div>

          <aside className="rounded bg-gray-100 p-7">
            <h3 className="mb-7 text-xl font-extrabold text-gray-900">
              {t('bookings.dakshinaAmounts')}
            </h3>
            <p className="mb-5 text-base leading-7 text-gray-600">
              <span className="font-extrabold text-red-500">{t('bookings.dakshina2100')}</span>
            </p>
            <p className="text-base leading-7 text-gray-600">
              <span className="font-extrabold text-red-500">Note</span> - {t('bookings.dakshinaNote')}
            </p>
          </aside>
        </div>
      </section>

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
            {bookingPackages.map((bookingPackage) => {
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
        <div className="mx-auto max-w-7xl overflow-hidden rounded-lg bg-white shadow-[0_20px_70px_rgba(31,41,55,0.12)]">
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
      <Footer/>
      <ScrollToTop/>
    </main>
  );
};

export default Bookings;
